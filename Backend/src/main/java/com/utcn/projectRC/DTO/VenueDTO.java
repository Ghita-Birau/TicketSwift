package com.utcn.projectRC.DTO;

public class VenueDTO {
    private Integer venueId;
    private String location;
    private String type;
    private long capacity;

    public Integer getVenueId() {
        return venueId;
    }

    public void setVenueId(Integer venueId) {
        this.venueId = venueId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public long getCapacity() {
        return capacity;
    }

    public void setCapacity(long capacity) {
        this.capacity = capacity;
    }

    public VenueDTO() {

    }

    public VenueDTO(Integer venueId, String location, String type, long capacity) {
        this.venueId = venueId;
        this.location = location;
        this.type = type;
        this.capacity = capacity;
    }
}
