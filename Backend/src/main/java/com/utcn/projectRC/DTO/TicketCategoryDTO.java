package com.utcn.projectRC.DTO;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class TicketCategoryDTO {
    private Integer ticketCategoryId;
    private String description;
    private long price;
    private String access;
    private int avaibleQuantity;
    private Double discountPercentage;
    private Double sales;

    public TicketCategoryDTO() {

    }

    public TicketCategoryDTO(Integer ticketCategoryId, String description, long price, String access, int avaibleQuantity, Double discountPercentage) {
        this.ticketCategoryId = ticketCategoryId;
        this.description = description;
        this.price = price;
        this.access = access;
        this.avaibleQuantity = avaibleQuantity;
        this.discountPercentage = discountPercentage;
    }
}
