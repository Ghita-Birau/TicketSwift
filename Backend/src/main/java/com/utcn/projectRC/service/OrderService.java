//package com.utcn.projectRC.service;
//
//import com.utcn.projectRC.model.Event;
//import com.utcn.projectRC.model.OrderEntity;
//import com.utcn.projectRC.repository.OrderRepository;
//import lombok.AllArgsConstructor;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//
//public class OrderService {
//
//    private final OrderRepository orderRepository;
//
//    public List<OrderEntity> getAllOrders() {
//        List<OrderEntity> orderEntityList = orderRepository.findAll();
//        return orderEntityList.stream().toList();
//    }
//
//}
