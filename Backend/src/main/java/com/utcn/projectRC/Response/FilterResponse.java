package com.utcn.projectRC.Response;

import com.utcn.projectRC.DTO.EventDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor

public class FilterResponse {
    private String message;
    private Integer numberOfEvents;
    private List<EventDTO> filteredEvents;
}
