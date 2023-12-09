package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class TicketCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ticketCategoryId;

    private String description;

    private long price;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event eventId;


    public TicketCategory() {

    }

    public TicketCategory(String description, long price, Event eventId) {
        description = description;
        this.price = price;
        this.eventId = eventId;
    }
}
