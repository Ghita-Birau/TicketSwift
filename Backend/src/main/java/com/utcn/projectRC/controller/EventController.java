package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.model.Event;
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


    @PostMapping("/filterAndSortEvents")
    public ResponseEntity<FilterResponse> filterAndSortEvents(@RequestBody FilterRequest filterRequest) {
        List<EventDTO> filteredAndSortedEvents = eventService.filterAndSortEvents(filterRequest);
        FilterResponse response = new FilterResponse("Success", filteredAndSortedEvents);
        return ResponseEntity.ok(response);
    }

        @GetMapping("/filterByEventTypeName")
    public List<Event> filterEventsByEventType(@RequestParam String eventTypeName) {
        return eventService.filterEventsByEventType(eventTypeName).stream().toList();
    }
}
