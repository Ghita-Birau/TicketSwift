package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data

public class EventTicketCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventTicketCategoryId;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;

    @ManyToOne
    @JoinColumn(name = "ticket_category_id")
    private TicketCategory ticketCategory;

    @OneToMany(mappedBy = "eventTicketCategory", cascade = CascadeType.ALL)
    private List<OrderEntity> ordersList;

    private String access;
    private Integer avaibleQuantity;
    private Double discountPercentage;
    private long price;

    public EventTicketCategory() {
    }
    public EventTicketCategory(TicketCategory ticketCategory, String access, Integer avaibleQuantity, Double discountPercentage, long price) {
        this.ticketCategory = ticketCategory;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
        this.price = price;
    }

    public EventTicketCategory(Event event, TicketCategory ticketCategory, List<OrderEntity> ordersList, String access, Integer avaibleQuantity, Double discountPercentage, long price) {
        this.event = event;
        this.ticketCategory = ticketCategory;
        this.ordersList = ordersList;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
        this.price = price;
    }
}
