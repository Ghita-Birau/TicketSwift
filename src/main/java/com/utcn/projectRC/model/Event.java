package com.utcn.projectRC.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
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

    private Date startDate;

    private Date endDate;

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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Event() {

    }

    public Event(Venue venueId, EventType eventTypeId, String eventDescription, String eventName, Date startDate, Date endDate) {
        this.venueId = venueId;
        this.eventTypeId = eventTypeId;
        this.eventDescription = eventDescription;
        this.eventName = eventName;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
