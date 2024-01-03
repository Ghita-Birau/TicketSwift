package com.utcn.projectRC.DTO;

import com.utcn.projectRC.model.OrderEntity;
import com.utcn.projectRC.model.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.time.LocalDate;
import java.util.List;
@Data
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
