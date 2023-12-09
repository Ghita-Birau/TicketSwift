package com.utcn.projectRC.DTO;

import lombok.Data;

@Data
public class VenueDTO {
    private Integer venueId;
    private String location;
    private String type;
    private long capacity;

    public VenueDTO() {

    }

    public VenueDTO(Integer venueId, String location, String type, long capacity) {
        this.venueId = venueId;
        this.location = location;
        this.type = type;
        this.capacity = capacity;
    }
}
