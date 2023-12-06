package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin

public class OrderController {
    private final OrderService orderService;

    @Autowired

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/allOrders")
    public List<OrderDTO> getAllOrdersDTO() {
        return orderService.getAllOrdersDTO();
    }
}
