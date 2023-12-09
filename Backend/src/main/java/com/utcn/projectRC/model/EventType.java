package com.utcn.projectRC.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data

public class EventType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventTypeId;

    private String eventTypeName;


    public EventType() {

    }

    public EventType(String eventTypeName) {
        this.eventTypeName = eventTypeName;
    }
}
