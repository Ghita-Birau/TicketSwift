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
