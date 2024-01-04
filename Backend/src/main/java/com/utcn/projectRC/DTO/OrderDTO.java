package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.TicketCategory;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor

public class OrderDTO {
    private Integer orderId;
    private Event event;
    private LocalDateTime orderedAt;
    private long numberOfTickets;
    private long totalPrice;
    private List<TicketCategory> ticketCategories;

    public OrderDTO(Integer orderId, Event event, LocalDateTime orderedAt, long numberOfTickets, long totalPrice, List<TicketCategory> ticketCategories) {
        this.orderId = orderId;
        this.event = event;
        this.orderedAt = orderedAt;
        this.numberOfTickets = numberOfTickets;
        this.totalPrice = totalPrice;
        this.ticketCategories = ticketCategories;
    }
}
