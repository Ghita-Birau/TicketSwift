package com.utcn.projectRC.DTO;

import lombok.Data;

@Data
public class TicketCategoryDTO {
    private Integer ticketCategoryId;
    private String description;
    private long price;

    public TicketCategoryDTO() {

    }
    public TicketCategoryDTO(Integer ticketCategoryId, String description, long price) {
        ticketCategoryId = ticketCategoryId;
        this.description = description;
        this.price = price;
    }
}
