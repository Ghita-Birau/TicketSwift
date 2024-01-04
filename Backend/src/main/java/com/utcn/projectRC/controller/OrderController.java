//package com.utcn.projectRC.controller;
//
//import com.utcn.projectRC.DTO.MapEventDTO;
//import com.utcn.projectRC.model.OrderEntity;
//import com.utcn.projectRC.service.OrderService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
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
//    @GetMapping("/all/orders")
//    public List<OrderEntity> getAllOrders() {
//        return orderService.getAllOrders();
//    }
//
//}
