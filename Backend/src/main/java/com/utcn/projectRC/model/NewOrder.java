package com.utcn.projectRC.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
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
