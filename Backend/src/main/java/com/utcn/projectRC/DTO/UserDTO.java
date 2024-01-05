package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.model.UserRole;
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
    private LocalDate dateOfBirth;
    private String adress;
    private UserRole role;
    private List<OrderEntity> orders;
}
