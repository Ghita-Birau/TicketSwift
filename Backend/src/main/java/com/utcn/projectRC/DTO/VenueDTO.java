package com.utcn.projectRC.DTO;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class VenueDTO {
    private Integer venueId;
    private String location;
    private String type;
    private long capacity;
    private Double latitude;
    private Double longitude;
    public VenueDTO(Integer venueId, String location, String type, long capacity, Double latitude, Double longitude) {
        this.venueId = venueId;
        this.location = location;
        this.type = type;
        this.capacity = capacity;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
