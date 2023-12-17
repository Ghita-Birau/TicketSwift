package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.EventTicketCategoryDTO;
import com.utcn.projectRC.DTO.VenueDTO;
import com.utcn.projectRC.Exception.EventNotFoundException;
import com.utcn.projectRC.Exception.InternalServerErrorException;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.EventTicketCategory;
import com.utcn.projectRC.model.EventType;
import com.utcn.projectRC.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    public List<EventDTO> getAllEventsDTO() {
        List<Event> eventList = eventRepository.findAll();
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

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

    public List<EventDTO> searchEventsDTOByNameOrLocation(String searchTerm) {
        List<Event> eventList = null;

        try {
            if (searchTerm != null) {
                eventList = eventRepository.findAllByEventNameContainingIgnoreCase(searchTerm);
                if (eventList.isEmpty()) {
                    eventList = eventRepository.findAllByVenueId_LocationContainingIgnoreCase(searchTerm);
                    if (eventList.isEmpty()) {
                        String errorMessage = "Nu am gasit evenimente dupa cerintele dumneavoastra";
                        System.out.println(errorMessage);
                        throw new EventNotFoundException(errorMessage);
                    }
                }
            } else {
                eventList = eventRepository.findAll();
                if (eventList.isEmpty()) {
                    String errorMessage = "Nu sunt evenimente disponibile";
                    System.out.println(errorMessage);
                    throw new EventNotFoundException(errorMessage);
                }
            }
            return eventList.stream().map(this::convertEventToEventDTO).toList();
        } catch (EventNotFoundException ex) {
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
            throw ex;
        } catch (Exception ex) {
            String errorMessage = "A apărut o eroare în timpul procesării cererii: " + ex.getMessage();
            System.err.println(errorMessage);
            throw new InternalServerErrorException(errorMessage);
        }
    }

    public List<EventDTO> getEventsDTOByStartDate(LocalDate startDate) {
        List<Event> eventList = eventRepository.findAllByStartDate(startDate);
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> filterEventsDTOByStartDateRange(LocalDate startDateFrom, LocalDate startDateTo) {
        List<Event> eventList;

        if(startDateFrom != null && startDateTo != null) {
            eventList = eventRepository.findAllByStartDateBetween(startDateFrom, startDateTo);
        } else if (startDateFrom != null) {
            eventList = eventRepository.findAllByStartDateAfter(startDateFrom);
        } else if (startDateTo !=null) {
            eventList = eventRepository.findAllByStartDateBefore(startDateTo);
        } else {
            eventList = eventRepository.findAll();
        }
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> filterEventsDTOByPriceRange(long priceFrom, long priceTo) {
        List<Event> eventList;

        if(priceFrom != 0 && priceTo != 0) {
            eventList = eventRepository.findAllByListEventTicketCategory_PriceBetween(priceFrom, priceTo);
        } else if (priceFrom != 0) {
            eventList = eventRepository.findAllByListEventTicketCategory_PriceGreaterThanEqual(priceFrom);
        } else if (priceTo != 0) {
            eventList = eventRepository.findAllByListEventTicketCategory_PriceLessThanEqual(priceTo);
        } else {
            eventList = eventRepository.findAll();
        }
        return eventList.stream().map(this::convertEventToEventDTO).toList();
    }

//    public List<EventDTO> filterEventsDTOByCategory(String category) {
//        List<Event> eventList = eventRepository.findAllByListTicketCategory_DescriptionContainingIgnoreCase(category);
//        return eventList.stream().map(this::convertEventToEventDTO).toList();
//    }

}
