package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.TicketCategory;

import java.time.LocalDateTime;

public class OrderDTO {
    private Integer orderId;
    private Event event;
    private LocalDateTime orderedAt;
    private long numberOfTickets;
    private long totalPrice;
    private TicketCategory ticketCategory;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public LocalDateTime getOrderedAt() {
        return orderedAt;
    }

    public void setOrderedAt(LocalDateTime orderedAt) {
        this.orderedAt = orderedAt;
    }

    public long getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(long numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public long getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(long totalPrice) {
        this.totalPrice = totalPrice;
    }

    public TicketCategory getTicketCategory() {
        return ticketCategory;
    }

    public void setTicketCategory(TicketCategory ticketCategory) {
        this.ticketCategory = ticketCategory;
    }

    public OrderDTO() {

    }

    public OrderDTO(Integer orderId, Event event, LocalDateTime orderedAt, long numberOfTickets, long totalPrice, TicketCategory ticketCategory) {
        this.orderId = orderId;
        this.event = event;
        this.orderedAt = orderedAt;
        this.numberOfTickets = numberOfTickets;
        this.totalPrice = totalPrice;
        this.ticketCategory = ticketCategory;
    }
}
