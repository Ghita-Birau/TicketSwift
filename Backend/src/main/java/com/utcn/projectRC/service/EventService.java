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

    private List<Event> filteredEvents;

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

    public List<Event> getAllEvents() {
        List<Event> eventList = eventRepository.findAll();
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no events available");
        } else {
            return eventList.stream().toList();
        }
    }

    public List<Event> searchEventsByNameOrLocation(String searchTerm) {
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
            return eventList.stream().toList();
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


    public List<Event> filterEventsByStartDateRange(LocalDate startDateFrom, LocalDate startDateTo) {
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
            return eventList.stream().toList();
        }
    }

    public List<Event> filterEventsByPriceRange(long priceFrom, long priceTo) {
        List<Event> eventListAllCategory;

        if (priceFrom != 0 && priceTo != 0) {
            eventListAllCategory = eventRepository.findAllByListEventTicketCategory_PriceBetween(priceFrom, priceTo);
        } else if (priceFrom != 0) {
            eventListAllCategory = eventRepository.findAllByListEventTicketCategory_PriceGreaterThanEqual(priceFrom);
        } else if (priceTo != 0) {
            eventListAllCategory = eventRepository.findAllByListEventTicketCategory_PriceLessThanEqual(priceTo);
        } else {
            eventListAllCategory = eventRepository.findAll();
        }

        List<Event> eventList = new ArrayList<>();
        for (Event event : eventListAllCategory) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .filter(category -> category.getPrice() >= priceFrom && category.getPrice() <= priceTo)
                    .collect(Collectors.toList());

            event.setListEventTicketCategory(filteredCategories);
            eventList.add(event);
        }
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no tickets with the price in the specified range");
        } else {
            return eventList;
        }
    }


    public List<Event> filterEventsByEventType(String eventTypeName) {
        List<Event> eventList = eventRepository.findAllByEventTypeId_EventTypeNameContainingIgnoreCase(eventTypeName);
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no events in the category you are looking for");
        } else {
            return eventList.stream().toList();
        }
    }

    public List<Event> filterEventsByTicketCategoryDesciption(String categoryDescription) {
        List<Event> eventListAllCategory = eventRepository.findAllByListEventTicketCategory_TicketCategory_DescriptionContainingIgnoreCase(categoryDescription);

        List<Event> eventList = new ArrayList<>();
        for (Event event : eventListAllCategory) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .filter(category -> category.getTicketCategory().getDescription().equals(categoryDescription))
                    .collect(Collectors.toList());

            event.setListEventTicketCategory(filteredCategories);
            eventList.add(event);
        }
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no events in the category you are looking for");
        } else {
            return eventList;
        }
    }

    public List<Event> filterEventsByTicketCategoryAccess(String access) {
        List<Event> eventListAllCategory = eventRepository.findAllByListEventTicketCategory_AccessContainingIgnoreCase(access);

        List<Event> eventList = new ArrayList<>();
        for (Event event : eventListAllCategory) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .filter(category -> category.getAccess().equals(access))
                    .collect(Collectors.toList());

            event.setListEventTicketCategory(filteredCategories);
            eventList.add(event);
        }
        if(eventList.isEmpty()) {
            throw new NotFoundException("There are no tickets for the selected category");
        } else {
            return eventList;
        }
    }

    public List<Event> filterEventsByDiscountedTickets(boolean hasDicount) {
        if(hasDicount) {
            List<Event> eventListAllCategory = eventRepository.findAllByListEventTicketCategory_DiscountPercentageGreaterThan(0.0);

            List<Event> eventList = new ArrayList<>();
            for (Event event : eventListAllCategory) {
                List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                        .stream()
                        .filter(category -> category.getDiscountPercentage() > 0.0)
                        .collect(Collectors.toList());

                event.setListEventTicketCategory(filteredCategories);
                eventList.add(event);
            }
            if(eventList.isEmpty()) {
                throw new NotFoundException("There are no discounted tickets");
            } else {
                return eventList;
            }
        } else {
            List<Event> eventList = eventRepository.findAll();
            if(eventList.isEmpty()) {
                throw new NotFoundException("There are no events available");
            } else {
                return eventList.stream().toList();
            }
        }
    }

    public List<EventDTO> filterEvents(FilterRequest filterRequest) {
        filteredEvents = getAllEvents();

        if(filterRequest.getSearchTearm() != null) {
            filteredEvents = searchEventsByNameOrLocation(filterRequest.getSearchTearm());
        }

        if (filterRequest.getStartDateFrom() != null || filterRequest.getStartDateTo() != null) {
            filteredEvents = filterEventsByStartDateRange(filterRequest.getStartDateFrom(), filterRequest.getStartDateTo());
        }

        if (filterRequest.getPriceFrom() != 0 || filterRequest.getPriceTo() != 0) {
            filteredEvents = filterEventsByPriceRange(filterRequest.getPriceFrom(), filterRequest.getPriceTo());
        }

        if (filterRequest.getEventTypeName() != null) {
            filteredEvents = filterEventsByEventType(filterRequest.getEventTypeName());
        }

        if (filterRequest.getTicketCategoryDescription() != null) {
            filteredEvents = filterEventsByTicketCategoryDesciption(filterRequest.getTicketCategoryDescription());
        }

        if (filterRequest.getTicketCategoryAccess() != null) {
            filteredEvents = filterEventsByTicketCategoryAccess(filterRequest.getTicketCategoryAccess());
        }

        if (filterRequest.isHasDiscount()) {
            filteredEvents = filterEventsByDiscountedTickets(filterRequest.isHasDiscount());
        }

        List<Event> filteredEventsFinalList = new ArrayList<>();

        for (Event event : filteredEvents) {
            List<EventTicketCategory> filteredCategories = event.getListEventTicketCategory()
                    .stream()
                    .collect(Collectors.toList());

            if(!filteredCategories.isEmpty()) {
                filteredEventsFinalList.add(event);
            }
        }

        if(filteredEventsFinalList.isEmpty()) {
            throw new NotFoundException("There are no tickets for the selected option");
        } else {
            return filteredEventsFinalList.stream().map(this::convertEventToEventDTO).toList();
        }
    }
}
