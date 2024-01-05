package com.utcn.projectRC.Request;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class LoginRequest {
    private String userEmail;
    private String password;
}
