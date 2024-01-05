package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.MapEventDTO;
import com.utcn.projectRC.DTO.UserDTO;
import com.utcn.projectRC.Request.OrderRequest;
import com.utcn.projectRC.Request.RegisterRequest;
import com.utcn.projectRC.Response.UserResponse;
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
    public List<OrderEntity> getAllOrdersByUser(@RequestParam String userEmail) {
        return orderService.getAllOrdersForUser(userEmail);
    }

    @PostMapping("/place/order")
    public ResponseEntity <UserResponse> placeTheOrder(@RequestBody OrderRequest orderRequest, @RequestParam String userEmail) {
        orderService.placeTheOrder(orderRequest, userEmail);
        Integer userId = userService.findUser(userEmail).getUserId();
        UserResponse response = new UserResponse("Order placed successfully", userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/all/orders")
    public OrderEntity getAllOrders(@RequestParam Integer id) {
        OrderEntity orderEntity = orderService.findAllOrders(id);
        return orderEntity;
    }
}