package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.OrderEntity;
import jakarta.persistence.criteria.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
    //OrderEntity findOrderEntityByOrderId(Integer orderId);
    //OrderEntity findByUserId(Integer userId);
}
