package com.utcn.projectRC.Repository;

import com.utcn.projectRC.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserEmail(String userEmail);
    boolean existsByUserEmail(String userEmail);
    User findByUserId(Integer userId);
}
