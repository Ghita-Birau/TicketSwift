package com.utcn.projectRC.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
public class TicketCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ticketCategoryId;

    private String description;

    @Transient
    private int quantityInCart;

    public TicketCategory() {

    }
    public TicketCategory(String description) {
        this.description = description;
    }
    public TicketCategory(String description, int quantityInCart) {
        this.description = description;
        this.quantityInCart = quantityInCart;
    }
}
