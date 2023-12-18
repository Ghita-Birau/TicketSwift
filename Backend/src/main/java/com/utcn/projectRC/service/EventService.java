package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.EventTicketCategoryDTO;
import com.utcn.projectRC.DTO.VenueDTO;
import com.utcn.projectRC.Exception.NotFoundException;
import com.utcn.projectRC.Exception.InternalServerErrorException;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.EventTicketCategory;
import com.utcn.projectRC.model.EventType;
import com.utcn.projectRC.model.Filter.FilterRequest;
import com.utcn.projectRC.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public EventDTO convertEventToEventDTO(Event event) {
        EventDTO eventDTO = new EventDTO();
        eventDTO.setEventId(event.getEventId());

        EventType eventType = event.getEventTypeId();
        if (eventType != null) {
            eventDTO.setEventTypeName(eventType.getEventTypeName());
        }

        eventDTO.setDescription(event.getEventDescription());
        eventDTO.setName(event.getEventName());
        eventDTO.setStartDate(event.getStartDate());
        eventDTO.setEndDate(event.getEndDate());
        eventDTO.setUrlImage(event.getUrlImage());

        VenueDTO venueDTO = new VenueDTO();
        venueDTO.setVenueId(event.getVenueId().getVenueId());
        venueDTO.setLocation(event.getVenueId().getLocation());
        venueDTO.setType(event.getVenueId().getType());
        venueDTO.setCapacity(event.getVenueId().getCapacity());
        venueDTO.setLatitude(event.getVenueId().getLatitude());
        venueDTO.setLongitude(event.getVenueId().getLongitude());
        eventDTO.setVenue(venueDTO);

        List<EventTicketCategoryDTO> ticketCategories = event.getListEventTicketCategory()
                .stream()
                .map(this::convertEventTicketCategoryToDTO)
                .collect(Collectors.toList());

        eventDTO.setListEventTicketCategories(ticketCategories);
        return eventDTO;
    }

    private EventTicketCategoryDTO convertEventTicketCategoryToDTO(EventTicketCategory eventTicketCategory) {
        EventTicketCategoryDTO eventTicketCategoryDTO = new EventTicketCategoryDTO();
        eventTicketCategoryDTO.setEventTicketCategoryId(eventTicketCategory.getEventTicketCategoryId());
        eventTicketCategoryDTO.setPrice(eventTicketCategory.getPrice());
        eventTicketCategoryDTO.setAccess(eventTicketCategory.getAccess());
        eventTicketCategoryDTO.setAvaibleQuantity(eventTicketCategory.getAvaibleQuantity());
        eventTicketCategoryDTO.setDiscountPercentage(eventTicketCategory.getDiscountPercentage());
        eventTicketCategoryDTO.setSales(eventTicketCategory.getPrice() - (eventTicketCategoryDTO.getDiscountPercentage() / 100 * eventTicketCategory.getPrice() ));
        eventTicketCategoryDTO.setDescription(eventTicketCategory.getTicketCategory().getDescription());

        return eventTicketCategoryDTO;
    }

    /* Nu folosesc momentan
    public List<EventDTO> getEventsDTOByLocationAndType(String location, String eventTypeName) {
        List<Event> eventList = eventRepository.findAllByVenueId_LocationAndEventTypeId_EventTypeName(location, eventTypeName);
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByName(String eventName) {
        List<Event> eventList = eventRepository.findAllByEventName(eventName);
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByLocation(String location) {
        List<Event> eventList = eventRepository.findAllByVenueId_Location(location);
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByStartDate(LocalDate startDate) {
        List<Event> eventList = eventRepository.findAllByStartDate(startDate);
        if(eventList.isEmpty()) {
            throw new NotFoundException("No event starts at this time");
        } else {
            return eventList.stream().map(this::convertEventToEventDTO).toList();
        }
    }*/

    public List<EventDTO> getAllEventsDTO() {
        List<Event> eventList = eventRepository.findAll();
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no events available");
        } else {
            return eventList.stream().map(this::convertEventToEventDTO).toList();
        }
    }

    public List<EventDTO> searchEventsDTOByNameOrLocation(String searchTerm) {
        List<Event> eventList = null;

        try {
            if (searchTerm != null) {
                eventList = eventRepository.findAllByEventNameContainingIgnoreCase(searchTerm);
                if (eventList.isEmpty()) {
                    eventList = eventRepository.findAllByVenueId_LocationContainingIgnoreCase(searchTerm);
                    if (eventList.isEmpty()) {
                        String errorMessage = "We did not find any events according to your requirements";
                        System.out.println(errorMessage);
                        throw new NotFoundException(errorMessage);
                    }
                }
            } else {
                eventList = eventRepository.findAll();
                if (eventList.isEmpty()) {
                    String errorMessage = "There are no events available";
                    System.out.println(errorMessage);
                    throw new NotFoundException(errorMessage);
                }
            }
            return eventList.stream().map(this::convertEventToEventDTO).toList();
        } catch (NotFoundException ex) {
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
            throw ex;
        } catch (Exception ex) {
            String errorMessage = "An error occurred while processing the request: " + ex.getMessage();
            System.err.println(errorMessage);
            throw new InternalServerErrorException(errorMessage);
        }
    }


    public List<EventDTO> filterEventsDTOByStartDateRange(LocalDate startDateFrom, LocalDate startDateTo) {
        List<Event> eventList = null;

        if(startDateFrom != null && startDateTo != null) {
            eventList = eventRepository.findAllByStartDateBetween(startDateFrom, startDateTo);
        } else if (startDateFrom != null) {
            eventList = eventRepository.findAllByStartDateAfter(startDateFrom);
        } else if (startDateTo != null) {
            eventList = eventRepository.findAllByStartDateBefore(startDateTo);
        } else {
            eventList = eventRepository.findAll();
        }
        if(eventList.isEmpty()) {
            throw new NotFoundException("No event starts in the specified dates");
        } else {
            return eventList.stream().map(this::convertEventToEventDTO).toList();
        }
    }

    public List<EventDTO> filterEventsDTOByPriceRange(long priceFrom, long priceTo) {
        List<Event> eventList;

        if (priceFrom != 0 && priceTo != 0) {
            eventList = eventRepository.findAllByListEventTicketCategory_PriceBetween(priceFrom, priceTo);
        } else if (priceFrom != 0) {
            eventList = eventRepository.findAllByListEventTicketCategory_PriceGreaterThanEqual(priceFrom);
        } else if (priceTo != 0) {
            eventList = eventRepository.findAllByListEventTicketCategory_PriceLessThanEqual(priceTo);
        } else {
            eventList = eventRepository.findAll();
        }

        List<EventDTO> eventDTOList = new ArrayList<>();
        for (Event event : eventList) {
            EventDTO eventDTO = convertEventToEventDTO(event);

            List<EventTicketCategoryDTO> filteredCategories = eventDTO.getListEventTicketCategories()
                    .stream()
                    .filter(category -> category.getPrice() >= priceFrom && category.getPrice() <= priceTo)
                    .collect(Collectors.toList());

            eventDTO.setListEventTicketCategories(filteredCategories);
            eventDTOList.add(eventDTO);
        }
        if(eventDTOList.isEmpty()) {
            throw new NotFoundException("There are no tickets with the price in the specified range");
        } else {
            return eventDTOList;
        }
    }


    public List<EventDTO> filterEventsDTOByEventType(String eventTypeName) {
        List<Event> eventList = eventRepository.findAllByEventTypeId_EventTypeNameContainingIgnoreCase(eventTypeName);
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no events in the category you are looking for");
        } else {
            return eventList.stream().map(this::convertEventToEventDTO).toList();
        }
    }

    public List<EventDTO> filterEventsByTicketCategoryDesciption(String categoryDescription) {
        List<Event> eventList = eventRepository.findAllByListEventTicketCategory_TicketCategory_DescriptionContainingIgnoreCase(categoryDescription);

        List<EventDTO> eventDTOList = new ArrayList<>();
        for (Event event : eventList) {
            EventDTO eventDTO = convertEventToEventDTO(event);

            List<EventTicketCategoryDTO> filteredCategories = eventDTO.getListEventTicketCategories()
                    .stream()
                    .filter(category -> category.getDescription().equals(categoryDescription))
                    .collect(Collectors.toList());

            eventDTO.setListEventTicketCategories(filteredCategories);
            eventDTOList.add(eventDTO);
        }
        if(eventDTOList.isEmpty()) {
            throw new NotFoundException("There are no events in the category you are looking for");
        } else {
            return eventDTOList;
        }
    }

    public List<EventDTO> filterEventsByTicketCategoryAccess(String access) {
        List<Event> eventList = eventRepository.findAllByListEventTicketCategory_AccessContainingIgnoreCase(access);

        List<EventDTO> eventDTOList = new ArrayList<>();
        for (Event event : eventList) {
            EventDTO eventDTO = convertEventToEventDTO(event);

            List<EventTicketCategoryDTO> filteredCategories = eventDTO.getListEventTicketCategories()
                    .stream()
                    .filter(category -> category.getAccess().equals(access))
                    .collect(Collectors.toList());

            eventDTO.setListEventTicketCategories(filteredCategories);
            eventDTOList.add(eventDTO);
        }
        if(eventDTOList.isEmpty()) {
            throw new NotFoundException("There are no tickets for the selected category");
        } else {
            return eventDTOList;
        }
    }

    public List<EventDTO> filterEventsByDiscountedTickets(boolean hasDicount) {
        if(hasDicount) {
            List<Event> eventList = eventRepository.findAllByListEventTicketCategory_DiscountPercentageGreaterThan(0.0);

            List<EventDTO> eventDTOList = new ArrayList<>();
            for (Event event : eventList) {
                EventDTO eventDTO = convertEventToEventDTO(event);

                List<EventTicketCategoryDTO> filteredCategories = eventDTO.getListEventTicketCategories()
                        .stream()
                        .filter(category -> category.getDiscountPercentage() > 0.0)
                        .collect(Collectors.toList());

                eventDTO.setListEventTicketCategories(filteredCategories);
                eventDTOList.add(eventDTO);
            }
            if(eventDTOList.isEmpty()) {
                throw new NotFoundException("There are no discounted tickets");
            } else {
                return eventDTOList;
            }
        } else {
            List<Event> eventList = eventRepository.findAll();
            if(eventList.isEmpty()) {
                throw new NotFoundException("There are no events available");
            } else {
                return eventList.stream().map(this::convertEventToEventDTO).toList();
            }
        }
    }

    public List<EventDTO> filterEventsDTO(FilterRequest filterRequest) {
        List<EventDTO> filteredEvents = getAllEventsDTO();

        if (filterRequest.getStartDateFrom() != null || filterRequest.getStartDateTo() != null) {
            filteredEvents = filterEventsDTOByStartDateRange(filteredEvents, filterRequest.getStartDateFrom(), filterRequest.getStartDateTo());
        }

        if (filterRequest.getPriceFrom() != 0 || filterRequest.getPriceTo() != 0) {
            filteredEvents = filterEventsDTOByPriceRange(filteredEvents, filterRequest.getPriceFrom(), filterRequest.getPriceTo());
        }

        if (filterRequest.getEventTypeName() != null) {
            filteredEvents = filterEventsDTOByEventType(filteredEvents, filterRequest.getEventTypeName());
        }

        if (filterRequest.getTicketCategoryDescription() != null) {
            filteredEvents = filterEventsByTicketCategoryDesciption(filteredEvents, filterRequest.getTicketCategoryDescription());
        }

        if (filterRequest.getTicketCategoryAccess() != null) {
            filteredEvents = filterEventsByTicketCategoryAccess(filteredEvents, filterRequest.getTicketCategoryAccess());
        }

        if (filterRequest.isHasDiscount()) {
            filteredEvents = filterEventsByDiscountedTickets(filteredEvents);
        }

        filteredEvents = filteredEvents.stream()
                .filter(eventDTO -> eventDTO.getListEventTicketCategories() != null)
                .collect(Collectors.toList());

        return filteredEvents;
    }

    private List<EventDTO> filterEventsDTOByStartDateRange(List<EventDTO> events, LocalDate startDateFrom, LocalDate startDateTo) {
        return events.stream()
                .filter(event -> isEventInStartDateRange(event, startDateFrom, startDateTo))
                .collect(Collectors.toList());
    }

    private boolean isEventInStartDateRange(EventDTO event, LocalDate startDateFrom, LocalDate startDateTo) {
        LocalDate eventStartDate = event.getStartDate();
        return (startDateFrom == null || eventStartDate.isAfter(startDateFrom) || eventStartDate.isEqual(startDateFrom)) &&
                (startDateTo == null || eventStartDate.isBefore(startDateTo) || eventStartDate.isEqual(startDateTo));
    }

    private List<EventDTO> filterEventsDTOByPriceRange(List<EventDTO> events, long priceFrom, long priceTo) {
        return events.stream()
                .map(event -> filterEventDTOByPriceRange(event, priceFrom, priceTo))
                .collect(Collectors.toList());
    }

    private EventDTO filterEventDTOByPriceRange(EventDTO event, long priceFrom, long priceTo) {
        List<EventTicketCategoryDTO> filteredCategories = event.getListEventTicketCategories()
                .stream()
                .filter(category -> category.getPrice() >= priceFrom && category.getPrice() <= priceTo)
                .collect(Collectors.toList());

        event.setListEventTicketCategories(filteredCategories);
        return event;
    }

    private List<EventDTO> filterEventsDTOByEventType(List<EventDTO> events, String eventTypeName) {
        return events.stream()
                .filter(event -> event.getEventTypeName().contains(eventTypeName))
                .collect(Collectors.toList());
    }

    private List<EventDTO> filterEventsByTicketCategoryDesciption(List<EventDTO> events, String categoryDescription) {
        return events.stream()
                .map(event -> filterEventByTicketCategoryDesciption(event, categoryDescription))
                .collect(Collectors.toList());
    }

    private EventDTO filterEventByTicketCategoryDesciption(EventDTO event, String categoryDescription) {
        List<EventTicketCategoryDTO> filteredCategories = event.getListEventTicketCategories()
                .stream()
                .filter(category -> category.getDescription().contains(categoryDescription))
                .collect(Collectors.toList());

        event.setListEventTicketCategories(filteredCategories);
        return event;
    }

    private List<EventDTO> filterEventsByTicketCategoryAccess(List<EventDTO> events, String access) {
        return events.stream()
                .map(event -> filterEventByTicketCategoryAccess(event, access))
                .collect(Collectors.toList());
    }

    private EventDTO filterEventByTicketCategoryAccess(EventDTO event, String access) {
        List<EventTicketCategoryDTO> filteredCategories = event.getListEventTicketCategories()
                .stream()
                .filter(category -> category.getAccess().contains(access))
                .collect(Collectors.toList());

        event.setListEventTicketCategories(filteredCategories);
        return event;
    }

    private List<EventDTO> filterEventsByDiscountedTickets(List<EventDTO> events) {
        return events.stream()
                .map(event -> filterEventByDiscountedTickets(event))
                .collect(Collectors.toList());
    }

    private EventDTO filterEventByDiscountedTickets(EventDTO event) {
        List<EventTicketCategoryDTO> filteredCategories = event.getListEventTicketCategories()
                .stream()
                .filter(category -> category.getDiscountPercentage() > 0.0)
                .collect(Collectors.toList());

        event.setListEventTicketCategories(filteredCategories);
        return event;
    }

}
