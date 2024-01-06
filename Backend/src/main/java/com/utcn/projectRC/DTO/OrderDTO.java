package com.utcn.projectRC.DTO;

import lombok.*;

import java.time.LocalDateTime;

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
    private Integer orderId;
    private String ticketCategoryDescription;
}
