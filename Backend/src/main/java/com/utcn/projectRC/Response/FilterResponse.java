package com.utcn.projectRC.Response;

import com.utcn.projectRC.DTO.EventDTO;
import lombok.Data;

import java.util.List;

@Data
public class FilterResponse {
    private String message;
    private Integer numberOfEvents;
    private List<EventDTO> filteredEvents;

    public FilterResponse(String message, List<EventDTO> filteredEvents, Integer numberOfEvents) {
        this.message = message;
        this.filteredEvents = filteredEvents;
        this.numberOfEvents = numberOfEvents;
    }
}
