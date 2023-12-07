package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.model.*;
import com.utcn.projectRC.repository.OrderRepository;
import com.utcn.projectRC.repository.TicketCategoryRepository;
import com.utcn.projectRC.repository.UserRepository;
import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public OrderDTO convertOrderEntityToOrderDTO(OrderEntity order) {
        return new OrderDTO(order.getOrderId(), order.getTicketCategoryId().getEventId(), order.getOrderedAt(), order.getNumberOfTickets(),
                order.getTotalPrice(), order.getTicketCategoryId());
    }

    public List<OrderDTO> getAllOrdersDTO() {
        List<OrderEntity> listOrder = orderRepository.findAll();
        return listOrder.stream().map(this::convertOrderEntityToOrderDTO).toList();
    }

    private User user;
    @Autowired
    private TicketCategoryRepository ticketCategoryRepository;
    @Autowired
    private OrderRepository orderRepo;
    @Autowired
    private UserRepository userRepository;

    public OrderDTO postOrder(NewOrder newOrder) {
        LocalDateTime localDateTime = LocalDateTime.now();
        TicketCategory ticketCategory = ticketCategoryRepository.findById(newOrder.getTicketCategoryId()).get();
        User user = userRepository.findById(1).get();

        OrderEntity orderEntity = new OrderEntity(user, ticketCategory, localDateTime, newOrder.getNumberOfTickets(),
                newOrder.getNumberOfTickets() * ticketCategory.getPrice());

        OrderEntity savedOrder = orderRepo.save(orderEntity);
        return convertOrderEntityToOrderDTO(savedOrder);
    }

}
