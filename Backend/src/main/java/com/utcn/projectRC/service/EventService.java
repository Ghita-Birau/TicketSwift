package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.TicketCategoryDTO;
import com.utcn.projectRC.DTO.VenueDTO;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.EventType;
import com.utcn.projectRC.model.TicketCategory;
import com.utcn.projectRC.repository.EventRepository;
import com.utcn.projectRC.repository.TicketCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
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

        List<TicketCategoryDTO> ticketCategories = event.getListTicketCategory()
                .stream()
                .map(this::convertTicketCategoryToDTO)
                .collect(Collectors.toList());
        eventDTO.setTicketCategories(ticketCategories);
        return eventDTO;
    }

    private TicketCategoryDTO convertTicketCategoryToDTO(TicketCategory ticketCategory) {
        TicketCategoryDTO ticketCategoryDTO = new TicketCategoryDTO();
        ticketCategoryDTO.setTicketCategoryId(ticketCategory.getTicketCategoryId());
        ticketCategoryDTO.setDescription(ticketCategory.getDescription());
        ticketCategoryDTO.setPrice(ticketCategory.getPrice());
        ticketCategoryDTO.setAccess(ticketCategory.getAccess());
        ticketCategoryDTO.setAvaibleQuantity(ticketCategory.getAvaibleQuantity());
        ticketCategoryDTO.setDiscountPercentage(ticketCategory.getDiscountPercentage());
        ticketCategoryDTO.setSales(ticketCategory.getPrice() - (ticketCategoryDTO.getDiscountPercentage() / 100 * ticketCategory.getPrice()));
        return ticketCategoryDTO;
    }
    public List<EventDTO> getAllEventsDTO() {
        List<Event> listEvent = eventRepository.findAll();
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByLocationAndType(String location, String eventTypeName) {
        List<Event> listEvent = eventRepository.findAllByVenueId_LocationAndEventTypeId_EventTypeName(location, eventTypeName);
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByName(String eventName) {
        List<Event> listEvent = eventRepository.findAllByEventName(eventName);
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByLocation(String location) {
        List<Event> listEvent = eventRepository.findAllByVenueId_Location(location);
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByNameOrLocation(String eventName, String eventLocation) {
        List<Event> listEvent = eventRepository.findAllByEventNameContainingIgnoreCaseOrVenueId_LocationContainingIgnoreCase(eventName, eventLocation);
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByStartDate(LocalDate startDate) {
        List<Event> listEvent = eventRepository.findAllByStartDate(startDate);
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }

    public List<EventDTO> getEventsDTOByStartDateBetween(LocalDate startDateFrom, LocalDate startDateTo) {
        List<Event> listEvent;

        if(startDateFrom != null && startDateTo != null) {
            listEvent = eventRepository.findAllByStartDateBetween(startDateFrom, startDateTo);
        } else if (startDateFrom != null) {
            listEvent = eventRepository.findAllByStartDateAfter(startDateFrom);
        } else if (startDateTo !=null) {
            listEvent = eventRepository.findAllByStartDateBefore(startDateTo);
        } else {
            listEvent = eventRepository.findAll();
        }
        return listEvent.stream().map(this::convertEventToEventDTO).toList();
    }


}
