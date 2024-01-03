package com.utcn.projectRC.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor

public class MapEventDTO {
    private Integer eventId;
    private VenueDTO venue;
    private String eventTypeName;
    private String description;
    private String name;
    private LocalDate startDate;
    private LocalDate endDate;
    private String urlImage;
}
