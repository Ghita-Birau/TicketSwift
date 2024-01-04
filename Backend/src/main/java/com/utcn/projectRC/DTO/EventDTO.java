package com.utcn.projectRC.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor

public class EventDTO {
    private Integer eventId;
    private VenueDTO venue;
    private String eventTypeName;
    private String description;
    private String name;
    private LocalDate startDate;
    private LocalDate endDate;
    private List<EventTicketCategoryDTO> listEventTicketCategories;
    private String urlImage;

    public EventDTO(Integer eventId, VenueDTO venue, String eventTypeName, String description, String name, LocalDate startDate, LocalDate endDate, List<EventTicketCategoryDTO> listEventTicketCategories, String urlImage) {
        this.eventId = eventId;
        this.venue = venue;
        this.eventTypeName = eventTypeName;
        this.description = description;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.listEventTicketCategories = listEventTicketCategories;
        this.urlImage = urlImage;
    }
}
