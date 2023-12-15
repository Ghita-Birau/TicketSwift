package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.model.Role;
import com.utcn.projectRC.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    //Role findByRoleDescription(UserRole userRole);
}
