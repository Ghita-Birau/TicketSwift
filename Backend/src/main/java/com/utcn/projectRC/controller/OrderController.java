//package com.utcn.projectRC.controller;
//
//import com.utcn.projectRC.DTO.MapEventDTO;
//import com.utcn.projectRC.DTO.UserDTO;
//import com.utcn.projectRC.Request.OrderRequest;
//import com.utcn.projectRC.model.OrderEntity;
//import com.utcn.projectRC.service.OrderService;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin
//@RequiredArgsConstructor
//
//public class OrderController {
//
//    private final OrderService orderService;
//    @GetMapping("/all/orders/by/user")
//    public List<OrderEntity> getAllOrdersByUser(HttpServletRequest request) {
//        return orderService.getAllOrdersByUser(request);
//    }
//
//    @PostMapping("/place/the/order")
//    public OrderEntity placeTheOrder(HttpServletRequest request, @RequestBody OrderRequest orderRequest) {
//        System.out.println(orderRequest.getEventName());
//        System.out.println(orderRequest.getCategory());
//        System.out.println(orderRequest.getNumberOfTickets());
//        return orderService.placeTheOrder(request, orderRequest);
//    }
//}
