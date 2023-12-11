package com.utcn.projectRC.service;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.DTO.OrderUpdateDTO;
import com.utcn.projectRC.model.*;
import com.utcn.projectRC.repository.OrderRepository;
import com.utcn.projectRC.repository.TicketCategoryRepository;
import com.utcn.projectRC.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final TicketCategoryRepository ticketCategoryRepository;
    private final UserRepository userRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, TicketCategoryRepository ticketCategoryRepository, UserRepository userRepository) {
        this.orderRepository = orderRepository;
        this.ticketCategoryRepository = ticketCategoryRepository;
        this.userRepository = userRepository;
    }

    public OrderDTO convertOrderEntityToOrderDTO(OrderEntity order) {
        return new OrderDTO(order.getOrderId(), order.getTicketCategories().stream()
                .map(TicketCategory::getEventId)
                .findFirst()
                .orElse(null), // Modificare aici pentru a obține primul EventId din lista de TicketCategories
                order.getOrderedAt(), order.getNumberOfTickets(), order.getTotalPrice(), order.getTicketCategories());
    }

    public List<OrderDTO> getAllOrdersDTO() {
        List<OrderEntity> listOrder = orderRepository.findAll();
        return listOrder.stream().map(this::convertOrderEntityToOrderDTO).toList();
    }

    public OrderDTO postOrder(NewOrder newOrder) {
        LocalDateTime localDateTime = LocalDateTime.now();
        TicketCategory ticketCategory = ticketCategoryRepository.findById(newOrder.getTicketCategoryId()).orElse(null);
        User user = userRepository.findById(1).orElse(null);

        if (ticketCategory != null && user != null) {

            OrderEntity orderEntity = new OrderEntity(user, List.of(ticketCategory), localDateTime, newOrder.getNumberOfTickets(),
                    newOrder.getNumberOfTickets() * ticketCategory.getPrice());

            OrderEntity savedOrder = orderRepository.save(orderEntity);
            return convertOrderEntityToOrderDTO(savedOrder);
        } else {
            // Tratează cazul în care TicketCategory sau User nu au fost găsite
            return null;
        }
    }

    public void updateOrder(OrderUpdateDTO orderUpdateDTO) {
        OrderEntity orderEntity = orderRepository.findOrderEntityByOrderId(orderUpdateDTO.getOrderId());

        if (orderEntity != null) {
            TicketCategory ticketCategory = ticketCategoryRepository.findTicketCategoryByTicketCategoryId(orderUpdateDTO.getTicketCategoryId());

            if (ticketCategory != null) {
                orderEntity.setNumberOfTickets(orderUpdateDTO.getNumberOfTickets());
                orderEntity.setTotalPrice(orderUpdateDTO.getNumberOfTickets() * ticketCategory.getPrice());

                // Elimină linia care setează descrierea direct pe TicketCategory
                // orderEntity.getTicketCategories().get(0).setDescription(orderUpdateDTO.getDescription());

                orderRepository.save(orderEntity);
            } else {
                // Tratează cazul în care TicketCategory nu a fost găsit
            }
        } else {
            // Tratează cazul în care OrderEntity nu a fost găsit
        }
    }

    public void deleteOrder(Integer orderId) {
        OrderEntity orderEntity = orderRepository.findOrderEntityByOrderId(orderId);
        if (orderEntity != null) {
            orderRepository.delete(orderEntity);
        } else {
            // Tratează cazul în care OrderEntity nu a fost găsit
        }
    }
}
