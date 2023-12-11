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

    @OneToMany
    @JoinColumn(name = "order_id")
    private List<TicketCategory> ticketCategories;

    private LocalDateTime orderedAt;

    private Integer numberOfTickets;

    private long totalPrice;


    public OrderEntity() {

    }

    public OrderEntity(User userId, List<TicketCategory> ticketCategories, LocalDateTime orderedAt, Integer numberOfTickets, long totalPrice) {
        this.userId = userId;
        this.ticketCategories = ticketCategories;
        this.orderedAt = orderedAt;
        this.numberOfTickets = numberOfTickets;
        this.totalPrice = totalPrice;
    }
}
