package com.utcn.projectRC.Request;

import lombok.Getter;

@Getter
public class OrderRequest {
    private String eventName;
    private String category;
    private Integer numberOfTickets;
}
