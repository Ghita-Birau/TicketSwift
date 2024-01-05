package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.MapEventDTO;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.Request.FilterRequest;
import com.utcn.projectRC.Response.FilterResponse;
import com.utcn.projectRC.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor

@RequestMapping("/api")

public class EventController {
    private final EventService eventService;


    @PostMapping("/filter/Sort/And/Paginate/Events")
        public ResponseEntity<FilterResponse> filterSortAndPaginateEvents(@RequestBody FilterRequest filterRequest) {
        List<EventDTO> filteredSortedAndPaginatedEvents = eventService.filtrateSortAndPaginateEvents(filterRequest);
        List<Event> filteredEvens = eventService.filterEvents(filterRequest);
        FilterResponse response = new FilterResponse("Success", filteredEvens.size(), filteredSortedAndPaginatedEvents);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all/events/for/map")
    public List<MapEventDTO> getAllMapEvents() {
        return eventService.getAllMapEvents();
    }
}
