package com.utcn.projectRC.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String name;
    private String userEmail;
    private String password;
    private LocalDate dateOfBirth;
    private String address;
    private String phoneNumber;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
    private Boolean logged=false;
//    private Boolean enabled = false;

    @OneToMany(mappedBy = "userId", cascade = CascadeType.ALL)
    private List<OrderEntity> orders;

    public User(String name, String userEmail, String password, LocalDate dateOfBirth, String address, String phoneNumber) {
        this.name = name;
        this.userEmail = userEmail;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.userRole = UserRole.USER;
    }
}

