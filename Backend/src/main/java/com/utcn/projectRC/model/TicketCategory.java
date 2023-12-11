package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
public class TicketCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ticketCategoryId;

    private String description;

    private String access;

    private int avaibleQuantity;

    private Double discountPercentage;

    private long price;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event eventId;

    @Transient
    private int quantityInCart;

    public TicketCategory() {

    }

    public TicketCategory(String description, long price, Event eventId, int quantityInCart) {
        this.description = description;
        this.price = price;
        this.eventId = eventId;
        this.quantityInCart = quantityInCart;
    }

    public TicketCategory(String description, String access, int avaibleQuantity, Double discountPercentage, long price, Event eventId, int quantityInCart) {
        this.description = description;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
        this.price = price;
        this.eventId = eventId;
        this.quantityInCart = quantityInCart;
    }
}
