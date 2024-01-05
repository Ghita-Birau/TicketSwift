//package com.utcn.projectRC.service;
//
//import com.utcn.projectRC.Request.OrderRequest;
//import com.utcn.projectRC.model.Event;
//import com.utcn.projectRC.model.EventTicketCategory;
//import com.utcn.projectRC.model.OrderEntity;
//import com.utcn.projectRC.model.User;
//import com.utcn.projectRC.repository.OrderRepository;
//import com.utcn.projectRC.repository.TicketCategoryRepository;
//import jakarta.servlet.http.HttpServletRequest;
//
//import lombok.AllArgsConstructor;
//import lombok.RequiredArgsConstructor;
//import org.hibernate.Hibernate;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//
//public class OrderService {
//
//    private final OrderRepository orderRepository;
//    private final UserService userService;
//    private final EventService eventService;
//    private final TicketCategoryService ticketCategoryService;
//    private final EventTicketCategoryService eventTicketCategoryService;
//
//    public List<OrderEntity> getAllOrdersByUser(HttpServletRequest request) {
//        List<OrderEntity> orderEntityList = new ArrayList<>();
//        orderEntityList.addAll(orderRepository.findAllByUserId_UserId(userService.getUserFromRequest(request).getUserId()));
//        return orderEntityList.stream().toList();
//
////        User user = userService.getUserFromRequest(request);
////        Hibernate.initialize(user.getOrders());
////        List<OrderEntity> orders = user.getOrders();
////        return orders != null ? orders : Collections.emptyList();
//    }
//
//    public OrderEntity placeTheOrder(HttpServletRequest request, OrderRequest orderRequest) {
//        OrderEntity orderEntity = new OrderEntity();
//
//        Integer eventId = eventService.findEventByName(orderRequest.getEventName());
//
//        Integer ticketCategoryId = ticketCategoryService.findTicketCategoryByDescription(orderRequest.getCategory());
//        EventTicketCategory eventTicketCategory = eventTicketCategoryService.findByEventIdAndTicketCategoryId(eventId, ticketCategoryId);
//
//        orderEntity.setEventTicketCategory(eventTicketCategory);
//        orderEntity.setOrderedAt(LocalDateTime.now());
//        orderEntity.setNumberOfTickets(orderRequest.getNumberOfTickets());
//        orderEntity.setTotalPrice(orderRequest.getNumberOfTickets() * eventTicketCategory.getPrice());
//
//        orderEntity.setUserId(userService.getUserFromRequest(request));
//
//        return orderEntity;
//    }
//}
