package com.utcn.projectRC.DTO;

import lombok.Data;

@Data
public class EventTicketCategoryDTO {
    private Integer eventTicketCategoryId;
    private String description;
    private long price;
    private String access;
    private int avaibleQuantity;
    private Double discountPercentage;
    private Double sales;
    public EventTicketCategoryDTO() {

    }

    public EventTicketCategoryDTO(Integer eventTicketCategoryId, String description, long price, String access, int avaibleQuantity, Double discountPercentage) {
        this.eventTicketCategoryId = eventTicketCategoryId;
        this.description = description;
        this.price = price;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
    }
}
