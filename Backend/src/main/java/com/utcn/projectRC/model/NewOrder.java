package com.utcn.projectRC.model;

import lombok.Data;

@Data
public class NewOrder {
    private Integer eventId;
    private Integer ticketCategoryId;
    private Integer numberOfTickets;
    public NewOrder(Integer eventId, Integer ticketCategoryId, Integer numberOfTickets) {
        this.eventId = eventId;
        this.ticketCategoryId = ticketCategoryId;
        this.numberOfTickets = numberOfTickets;
    }
}
