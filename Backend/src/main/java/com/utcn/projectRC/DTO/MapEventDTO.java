package com.utcn.projectRC.DTO;

import lombok.*;

import java.time.LocalDate;
import java.util.List;
@Getter
@Setter
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
