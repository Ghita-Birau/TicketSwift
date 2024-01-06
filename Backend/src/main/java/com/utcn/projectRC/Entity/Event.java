package com.utcn.projectRC.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventId;

    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venueId;

    @OneToMany(mappedBy = "event", orphanRemoval = true, cascade = CascadeType.ALL)
    List<EventTicketCategory> listEventTicketCategory;

    @ManyToOne
    @JoinColumn(name = "event_type_id")
    private EventType eventTypeId;

    private String eventDescription;
    private String eventName;
    private LocalDate startDate;
    private LocalDate endDate;
    private String urlImage;

    public Event(Venue venueId, List<EventTicketCategory> listEventTicketCategory, EventType eventTypeId, String eventDescription, String eventName, LocalDate startDate, LocalDate endDate, String urlImage) {
        this.venueId = venueId;
        this.listEventTicketCategory = listEventTicketCategory;
        this.eventTypeId = eventTypeId;
        this.eventDescription = eventDescription;
        this.eventName = eventName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.urlImage = urlImage;
    }
}
