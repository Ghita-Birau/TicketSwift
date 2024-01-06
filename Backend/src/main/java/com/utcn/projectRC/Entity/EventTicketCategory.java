package com.utcn.projectRC.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor


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

    public EventTicketCategory(TicketCategory ticketCategory, String access, Integer avaibleQuantity, Double discountPercentage, long price) {
        this.ticketCategory = ticketCategory;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
        this.price = price;
    }

    public EventTicketCategory(Event event, TicketCategory ticketCategory, String access, Integer avaibleQuantity, Double discountPercentage, long price) {
        this.event = event;
        this.ticketCategory = ticketCategory;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
        this.price = price;
    }
}
