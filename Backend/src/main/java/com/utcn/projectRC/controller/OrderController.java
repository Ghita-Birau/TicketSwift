package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.MapEventDTO;
import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.DTO.UserDTO;
import com.utcn.projectRC.Request.FilterRequest;
import com.utcn.projectRC.Request.OrderRequest;
import com.utcn.projectRC.Request.RegisterRequest;
import com.utcn.projectRC.Response.FilterResponse;
import com.utcn.projectRC.Response.OrdersResponse;
import com.utcn.projectRC.Response.UserResponse;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.service.OrderService;
import com.utcn.projectRC.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
@RequiredArgsConstructor

public class OrderController {

    private final OrderService orderService;
    private final UserService userService;

    @GetMapping("/all/orders/by/user")
    public ResponseEntity<OrdersResponse> getOrderDetailsByUserEmail(@RequestParam String userEmail) {
        List<OrderDTO> allOrdersByUser = orderService.findOrderDetailsByUserEmail(userEmail);
        Integer userId = userService.findUser(userEmail).getUserId();
        OrdersResponse response = new OrdersResponse("Success", userId, allOrdersByUser);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/place/order")
    public ResponseEntity <UserResponse> placeTheOrder(@RequestBody List<OrderRequest> orderRequests, @RequestParam String userEmail) {
        orderService.placeTheOrder(orderRequests, userEmail);
        Integer userId = userService.findUser(userEmail).getUserId();
        UserResponse response = new UserResponse("Orders placed successfully", userId);
        return ResponseEntity.ok(response);
    }
}