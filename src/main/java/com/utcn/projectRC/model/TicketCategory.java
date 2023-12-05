package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class TicketCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ticketCategoryId;

    private String Description;

    private long price;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event eventId;

    public Integer getTicketCategoryId() {
        return ticketCategoryId;
    }

    public void setTicketCategoryId(Integer ticketCategoryId) {
        this.ticketCategoryId = ticketCategoryId;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public Event getEventId() {
        return eventId;
    }

    public void setEventId(Event eventId) {
        this.eventId = eventId;
    }

    public TicketCategory() {

    }

    public TicketCategory(String description, long price, Event eventId) {
        Description = description;
        this.price = price;
        this.eventId = eventId;
    }
}
