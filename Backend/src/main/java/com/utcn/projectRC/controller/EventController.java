package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
