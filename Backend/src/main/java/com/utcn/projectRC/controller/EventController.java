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


    @PostMapping("/filterEvents")
    public ResponseEntity<FilterResponse> filterEvents(@RequestBody FilterRequest filterRequest) {
        List<EventDTO> filteredEvents = eventService.filterEvents(filterRequest);
        FilterResponse response = new FilterResponse("Success", filteredEvents);
        return ResponseEntity.ok(response);
    }
}
