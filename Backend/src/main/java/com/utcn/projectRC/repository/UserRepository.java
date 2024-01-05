package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserEmail(String email);
    boolean existsByUserEmail(String userEmail);

    //Optional<User> findByUserName(String userName);
}
