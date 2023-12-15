package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data

public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;

    @ManyToOne
    @JoinColumn(name = "event_ticket_category_id")
    private EventTicketCategory eventTicketCategory;

    private LocalDateTime orderedAt;
    private Integer numberOfTickets;
    private long totalPrice;

    public OrderEntity() {

    }
    public OrderEntity(User userId, EventTicketCategory eventTicketCategory, LocalDateTime orderedAt, Integer numberOfTickets, long totalPrice) {
        this.userId = userId;
        this.eventTicketCategory = eventTicketCategory;
        this.orderedAt = orderedAt;
        this.numberOfTickets = numberOfTickets;
        this.totalPrice = totalPrice;
    }
}
