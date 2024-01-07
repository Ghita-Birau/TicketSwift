package com.utcn.projectRC.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class HomeEventDTO {
    private Integer eventId;
    private String eventName;
    private String eventDescription;
    private String urlImage;

}
