package com.utcn.projectRC.Request;

import lombok.Getter;

@Getter
public class OrderRequest {
    private String eventName;
    private String category;
    //private String eventTypeName;
    private Integer numberOfTickets;
    //private long price;
}
