package com.utcn.projectRC.repository;

import com.utcn.projectRC.DTO.OrderDTO;
import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.model.User;
import jakarta.persistence.criteria.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
    //OrderEntity findOrderEntityByOrderId(Integer orderId);
    //List<OrderEntity> findAllByUserId_UserEmail(String userEmail);
    List<OrderEntity> findByUserId_UserEmail(String userEmail);

    OrderEntity findOrderEntityByOrderId(Integer id);

    @Query("SELECT NEW com.utcn.projectRC.DTO.OrderDTO(e.eventName, e.urlImage, et.eventTypeName, o.numberOfTickets, o.orderedAt, o.totalPrice, tc.description) " +
            "FROM OrderEntity o " +
            "JOIN o.eventTicketCategory etc " +
            "JOIN etc.event e " +
            "JOIN e.eventTypeId et " +
            "JOIN etc.ticketCategory tc " +
            "WHERE o.userId.userEmail = :userEmail")
    List<OrderDTO> findOrderDetailsByUserEmail(@Param("userEmail") String userEmail);

}
