package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.model.User;
import jakarta.persistence.criteria.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
    //OrderEntity findOrderEntityByOrderId(Integer orderId);
    //List<OrderEntity> findAllByUserId_UserEmail(String userEmail);
    List<OrderEntity> findByUserId_UserEmail(String userEmail);

    OrderEntity findOrderEntityByOrderId(Integer id);

}
