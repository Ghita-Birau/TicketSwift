package com.utcn.projectRC.Response;

import com.utcn.projectRC.DTO.EventDTO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
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
