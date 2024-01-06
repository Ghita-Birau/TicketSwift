package com.utcn.projectRC.Request;

import lombok.Getter;

@Getter
public class UpdateUserRequest {
    private String name;
    private String address;
    private String phoneNumber;
    private String password;
}
