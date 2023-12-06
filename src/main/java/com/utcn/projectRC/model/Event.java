package com.utcn.projectRC.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data

public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventId;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venueId;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "eventId", orphanRemoval = true)
    @JsonIgnoreProperties("eventId")
    List<TicketCategory> listTicketCategory;

    @ManyToOne
    @JoinColumn(name = "event_type_id")
    private EventType eventTypeId;

    private String eventDescription;

    private String eventName;

    private LocalDate startDate;

    private LocalDate endDate;

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

    public Venue getVenueId() {
        return venueId;
    }

    public void setVenueId(Venue venueId) {
        this.venueId = venueId;
    }

    public List<TicketCategory> getListTicketCategory() {
        return listTicketCategory;
    }

    public void setListTicketCategory(List<TicketCategory> listTicketCategory) {
        this.listTicketCategory = listTicketCategory;
    }

    public EventType getEventTypeId() {
        return eventTypeId;
    }

    public void setEventTypeId(EventType eventTypeId) {
        this.eventTypeId = eventTypeId;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
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

    public Event() {

    }

    public Event(Venue venueId, EventType eventTypeId, String eventDescription, String eventName, LocalDate startDate, LocalDate endDate) {
        this.venueId = venueId;
        this.eventTypeId = eventTypeId;
        this.eventDescription = eventDescription;
        this.eventName = eventName;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Event(Venue venueId, EventType eventTypeId, String eventDescription, String eventName, LocalDate startDate, LocalDate endDate, String urlImage) {
        this.venueId = venueId;
        this.eventTypeId = eventTypeId;
        this.eventDescription = eventDescription;
        this.eventName = eventName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.urlImage = urlImage;
    }
}
