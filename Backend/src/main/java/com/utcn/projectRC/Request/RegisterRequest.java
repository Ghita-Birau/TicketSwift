package com.utcn.projectRC.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
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
