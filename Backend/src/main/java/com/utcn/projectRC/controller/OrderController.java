package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.DTO.OrderUpdateDTO;
import com.utcn.projectRC.model.NewOrder;
import com.utcn.projectRC.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/order")
    public OrderDTO postOrder(@RequestBody NewOrder newOrder) {
        return orderService.postOrder(newOrder);
    }

    @PatchMapping("/order")
    public void updateOrder(@RequestBody OrderUpdateDTO orderPatchDTO) {
        orderService.updateOrder(orderPatchDTO);
    }

    @DeleteMapping("/order")
    public void deleteOrder(@RequestParam Integer orderId) {
        orderService.deleteOrder(orderId);
    }
}
