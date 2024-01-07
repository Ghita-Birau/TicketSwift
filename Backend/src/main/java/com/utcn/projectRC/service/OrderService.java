package com.utcn.projectRC.Service;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.Exception.NotFoundException;
import com.utcn.projectRC.Request.OrderRequest;
import com.utcn.projectRC.Entity.EventTicketCategory;
import com.utcn.projectRC.Entity.OrderEntity;
import com.utcn.projectRC.Entity.User;
import com.utcn.projectRC.Repository.OrderRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor

public class OrderService {

    private final OrderRepository orderRepository;
    private final UserService userService;
    private final EventService eventService;
    private final TicketCategoryService ticketCategoryService;
    private final EventTicketCategoryService eventTicketCategoryService;

    public List<OrderDTO> findOrderDetailsByUserEmail(String userEmail) {
        return orderRepository.findOrderDetailsByUserEmail(userEmail);
    }

    public void placeTheOrder(List<OrderRequest> orderRequests, String userEmail) {
        User user = userService.findUser(userEmail);
        if(user.getLogged()) {
            for (OrderRequest orderRequest : orderRequests) {
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
            }
        } else {
            throw new IllegalStateException("Please login first");
        }
    }
}
