package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.TicketCategory;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class OrderDTO {
    private String eventName;
    private String urlImage;
    private String eventTypeName;
    private Integer numberOfTickets;
    private LocalDateTime orderedAt;
    private long totalPrice;
    private String ticketCategoryDescription;
}
