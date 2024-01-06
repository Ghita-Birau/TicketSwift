package com.utcn.projectRC.Repository;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.Entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
    @Query("SELECT NEW com.utcn.projectRC.DTO.OrderDTO(e.eventName, e.urlImage, et.eventTypeName, o.numberOfTickets, o.orderedAt, o.totalPrice, o.orderId, tc.description) " +
            "FROM OrderEntity o " +
            "JOIN o.eventTicketCategory etc " +
            "JOIN etc.event e " +
            "JOIN e.eventTypeId et " +
            "JOIN etc.ticketCategory tc " +
            "WHERE o.userId.userEmail = :userEmail")
    List<OrderDTO> findOrderDetailsByUserEmail(@Param("userEmail") String userEmail);
    @Query("SELECT o.id FROM OrderEntity o WHERE o.userId.id = :userId")
    List<Integer> findOrderIdsByUserId(@Param("userId") Integer userId);
}
