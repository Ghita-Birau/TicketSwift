package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.model.Filter.FilterRequest;
import com.utcn.projectRC.model.Filter.FilterResponse;
import com.utcn.projectRC.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")

public class EventController {
    private final EventService eventService;

    @Autowired

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    /* Nu folosesc momentan
    @GetMapping("/filterEventsByLocationAndType")
    public List<EventDTO> getEventsDTOByLocationAndType(@RequestParam String location, @RequestParam String eventTypeName) {
        return eventService.getEventsDTOByLocationAndType(location, eventTypeName);
    }

    @GetMapping("/eventByName")
    public List<EventDTO> getEventByName(@RequestParam String eventName) {
        return eventService.getEventsDTOByName(eventName);
    }

    @GetMapping("/eventsByLocation")
    public List<EventDTO> getEventByLocation(@RequestParam String location) {
        return eventService.getEventsDTOByLocation(location);
    }

    @GetMapping("filterEventsByStartDate")
    public List<EventDTO> getEventsByStartDate(@RequestParam LocalDate startDate) {
        return eventService.getEventsDTOByStartDate(startDate);
    }*/


    @GetMapping("/allEvents")
    public List<EventDTO> getEventDTOList() {
        return eventService.getAllEventsDTO();
    }

    @GetMapping("searchEventsByNameOrLocation")
    public List<EventDTO> searchEventsByNameOrLocation(@RequestParam(required = false) String searchTerm) {
        return eventService.searchEventsDTOByNameOrLocation(searchTerm);
    }

    @GetMapping("filterEventsByStartDateRange")
    public List<EventDTO> filterEventsByStartDateBetween(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDateFrom,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDateTo) {
        return eventService.filterEventsDTOByStartDateRange(startDateFrom, startDateTo);
    }

    @GetMapping("filterEventsByPriceRange")
    public List<EventDTO> filterEventsByPriceRange(@RequestParam long priceFrom, @RequestParam long priceTo) {
        return eventService.filterEventsDTOByPriceRange(priceFrom, priceTo);
    }

    @GetMapping("filterEventsByEventType")
    public List<EventDTO> filterEventsByEventType(@RequestParam String eventType) {
        return eventService.filterEventsDTOByEventType(eventType);
    }

    @GetMapping("filterEventsByTicketCategoryDescription")
    public List<EventDTO> filterEventsByTicketCategoryDescription(@RequestParam String ticketCategoryDescription) {
        return eventService.filterEventsByTicketCategoryDesciption(ticketCategoryDescription);
    }

    @GetMapping("filterEventsByTicketCategoryAccess")
    public  List<EventDTO> filterEventsByTicketCategoryAcces(@RequestParam String access) {
        return eventService.filterEventsByTicketCategoryAccess(access);
    }

    @GetMapping("filterEventsByDiscountedTickets")
    public  List<EventDTO> filterEventsByDiscountedTickets(@RequestParam boolean hasDiscount) {
        return eventService.filterEventsByDiscountedTickets(hasDiscount);
    }

    @PostMapping("/filterEvents")
    public ResponseEntity<FilterResponse> filterEvents(@RequestBody FilterRequest filterRequest) {
        List<EventDTO> filteredEvents = eventService.filterEventsDTO(filterRequest);
        FilterResponse response = new FilterResponse("Success", filteredEvents);
        return ResponseEntity.ok(response);
    }
}
