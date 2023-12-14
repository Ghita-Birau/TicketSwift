package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

    @GetMapping("/allEvents")
    public List<EventDTO> getEventDTOList() {
        return eventService.getAllEventsDTO();
    }

    @GetMapping("/eventsByLocationAndType")
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

    @GetMapping("searchEventByNameOrLocation")
    public List<EventDTO> getEventsByNameOrLocation(@RequestParam String eventName, @RequestParam String eventLocation) {
        return eventService.getEventsDTOByNameOrLocation(eventName, eventLocation);
    }

    @GetMapping("filterEventsByStartDate")
    public List<EventDTO> getEventsByStartDate(@RequestParam LocalDate startDate) {
        return eventService.getEventsDTOByStartDate(startDate);
    }

    @GetMapping("filterEventsByStartDateBetween")
    public List<EventDTO> getEventsByStartDateBetween(
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDateFrom,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDateTo) {
        return eventService.getEventsDTOByStartDateBetween(startDateFrom, startDateTo);
    }
}
