package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.TicketCategory;
import com.utcn.projectRC.model.Venue;

import java.time.LocalDate;
import java.util.List;

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

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public VenueDTO getVenue() {
        return venue;
    }

    public void setVenue(VenueDTO venue) {
        this.venue = venue;
    }

    public String getEventTypeName() {
        return eventTypeName;
    }

    public void setEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public List<TicketCategoryDTO> getTicketCategories() {
        return ticketCategories;
    }

    public void setTicketCategories(List<TicketCategoryDTO> ticketCategories) {
        this.ticketCategories = ticketCategories;
    }

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
