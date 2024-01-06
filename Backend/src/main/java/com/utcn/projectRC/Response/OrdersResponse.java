package com.utcn.projectRC.Response;

import com.utcn.projectRC.DTO.OrderDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor

public class OrdersResponse {
    private String message;
    private Integer userId;
    private List<OrderDTO> orders;
}
