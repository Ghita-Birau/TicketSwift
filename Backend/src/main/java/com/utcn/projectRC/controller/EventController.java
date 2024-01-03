package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.Request.FilterRequest;
import com.utcn.projectRC.Response.FilterResponse;
import com.utcn.projectRC.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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


    @PostMapping("/filter/Sort/And/Paginate/Events")
    public ResponseEntity<FilterResponse> filterSortAndPaginateEvents(@RequestBody FilterRequest filterRequest) {
        List<EventDTO> filteredSortedAndPaginatedEvents = eventService.filtrateSortAndPaginateEvents(filterRequest);
        List<Event> filteredEvens = eventService.filterEvents(filterRequest);
        FilterResponse response = new FilterResponse("Success", filteredSortedAndPaginatedEvents, filteredEvens.size());
        return ResponseEntity.ok(response);
    }
}
