package com.utcn.projectRC.Request;

import lombok.*;

import java.time.LocalDate;
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class RegisterRequest {
    private String name;
    private String userEmail;
    private String password;
    private LocalDate dateOfBirth;
    private String address;
    private String phoneNumber;
}
