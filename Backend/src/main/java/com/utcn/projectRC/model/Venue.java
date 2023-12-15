package com.utcn.projectRC.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer venueId;

    private String location;
    private String type;
    private Integer capacity;
    private Double latitude;
    private Double longitude;

    public Venue() {

    }
    public Venue(String location, String type, Integer capacity) {
        this.location = location;
        this.type = type;
        this.capacity = capacity;
    }
    public Venue(String location, String type, Integer capacity, Double latitude, Double longitude) {
        this.location = location;
        this.type = type;
        this.capacity = capacity;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
