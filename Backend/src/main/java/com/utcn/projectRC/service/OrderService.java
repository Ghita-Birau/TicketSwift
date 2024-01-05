package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.Exception.NotFoundException;
import com.utcn.projectRC.Request.OrderRequest;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.model.EventTicketCategory;
import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.model.User;
import com.utcn.projectRC.repository.OrderRepository;
import com.utcn.projectRC.repository.TicketCategoryRepository;
import jakarta.servlet.http.HttpServletRequest;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor

public class OrderService {

    private final OrderRepository orderRepository;
    private final UserService userService;
    private final EventService eventService;
    private final TicketCategoryService ticketCategoryService;
    private final EventTicketCategoryService eventTicketCategoryService;

    public List<OrderDTO> findOrderDetailsByUserEmail(String userEmail) {
        List<OrderDTO> orderDTOList = orderRepository.findOrderDetailsByUserEmail(userEmail);
        if(orderDTOList.isEmpty()) {
            throw new NotFoundException("There are no orders for this user");
        } else {
            return orderDTOList;
        }
    }

    public void placeTheOrder(OrderRequest orderRequest, String userEmail) {
        User user = userService.findUser(userEmail);
        if(user.getLogged()) {
            OrderEntity orderEntity = new OrderEntity();
            Integer eventId = eventService.findEventByName(orderRequest.getEventName());

            Integer ticketCategoryId = ticketCategoryService.findTicketCategoryByDescription(orderRequest.getCategory());
            EventTicketCategory eventTicketCategory = eventTicketCategoryService.findByEventIdAndTicketCategoryId(eventId, ticketCategoryId);

            orderEntity.setEventTicketCategory(eventTicketCategory);
            orderEntity.setOrderedAt(LocalDateTime.now());
            orderEntity.setNumberOfTickets(orderRequest.getNumberOfTickets());
            orderEntity.setTotalPrice(orderRequest.getNumberOfTickets() * eventTicketCategory.getPrice());
            orderEntity.setUserId(userService.findUser(userEmail));

            orderRepository.save(orderEntity);
        } else {
            throw new IllegalStateException("Please login first");
        }
    }
}
