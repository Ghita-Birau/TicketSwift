package com.utcn.projectRC.repository;

import com.utcn.projectRC.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserEmail(String email);

    //Optional<User> findByUserName(String userName);
}
