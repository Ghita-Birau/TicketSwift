package com.utcn.projectRC.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

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
