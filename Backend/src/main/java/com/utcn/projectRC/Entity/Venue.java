package com.utcn.projectRC.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer venueId;

    private String location;
    private String type;
    private Integer capacity;
    private Double latitude;
    private Double longitude;

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
