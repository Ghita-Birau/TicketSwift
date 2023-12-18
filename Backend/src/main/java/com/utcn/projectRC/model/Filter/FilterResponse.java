package com.utcn.projectRC.model.Filter;

import com.utcn.projectRC.DTO.EventDTO;
import lombok.Data;

import java.util.List;

@Data
public class FilterResponse {
    private String message;
    private List<EventDTO> filteredEvents;

    public FilterResponse(String message, List<EventDTO> filteredEvents) {
        this.message = message;
        this.filteredEvents = filteredEvents;
    }
}
