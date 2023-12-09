package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.TicketCategory;
import com.utcn.projectRC.model.Venue;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class EventDTO {
    private Integer eventId;
    private VenueDTO venue;
    private String eventTypeName;
    private String description;
    private String name;
    private LocalDate startDate;
    private LocalDate endDate;
    private List<TicketCategoryDTO> ticketCategories;
    private String urlImage;
    public EventDTO() {

    }
    public EventDTO(Integer eventId, VenueDTO venue, String eventTypeName, String description, String name, LocalDate startDate, LocalDate endDate, List<TicketCategoryDTO> ticketCategories, String urlImage) {
        this.eventId = eventId;
        this.venue = venue;
        this.eventTypeName = eventTypeName;
        this.description = description;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.ticketCategories = ticketCategories;
        this.urlImage = urlImage;
    }
}
