package com.utcn.projectRC.DTO;

import com.utcn.projectRC.Entity.OrderEntity;
import com.utcn.projectRC.Entity.UserRole;
import lombok.*;


import java.time.LocalDate;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {
    private Integer userId;
    private String name;
    private String userEmail;
    private String password;
    private LocalDate dateOfBirth;
    private String adress;
    private String phoneNumber;
    private UserRole role;
    private List<OrderEntity> orders;
}
