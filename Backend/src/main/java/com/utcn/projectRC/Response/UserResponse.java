package com.utcn.projectRC.Response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class UserResponse {
    private String message;
    private Integer userId;
}
