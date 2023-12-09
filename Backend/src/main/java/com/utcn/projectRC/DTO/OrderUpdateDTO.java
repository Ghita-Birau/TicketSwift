package com.utcn.projectRC.DTO;

import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.Data;

@Data
public class OrderUpdateDTO {
    private Integer orderId;

    private Integer numberOfTickets;

    private String description;

    private Integer ticketCategoryId;
    public OrderUpdateDTO() {

    }

    public OrderUpdateDTO(Integer orderId, Integer numberOfTickets, String description, Integer ticketCategoryId) {
        this.orderId = orderId;
        this.numberOfTickets = numberOfTickets;
        this.description = description;
        this.ticketCategoryId = ticketCategoryId;
    }
}
