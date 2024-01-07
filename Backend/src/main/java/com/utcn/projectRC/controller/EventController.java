package com.utcn.projectRC.Controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.HomeEventDTO;
import com.utcn.projectRC.DTO.MapEventDTO;
import com.utcn.projectRC.Entity.Event;
import com.utcn.projectRC.Request.FilterRequest;
import com.utcn.projectRC.Response.FilterResponse;
import com.utcn.projectRC.Service.EventService;
import lombok.RequiredArgsConstructor;
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

    @GetMapping("/all/events/for/home")
    public List<HomeEventDTO> getAllHomeEvents() {
        return eventService.getAllHomeEvents();
    }
}
