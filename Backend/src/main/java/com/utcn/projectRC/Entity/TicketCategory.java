package com.utcn.projectRC.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor


public class TicketCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ticketCategoryId;

    private String description;
    public TicketCategory(String description) {
        this.description = description;
    }
}
