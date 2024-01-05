package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.EventDTO;
import com.utcn.projectRC.Request.FilterRequest;
import com.utcn.projectRC.Request.LoginRequest;
import com.utcn.projectRC.Request.RegisterRequest;
import com.utcn.projectRC.Response.FilterResponse;
import com.utcn.projectRC.Response.UserResponse;
import com.utcn.projectRC.model.Event;
import com.utcn.projectRC.service.UserService;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest registerRequest) {
        userService.register(registerRequest);
        Integer userId = userService.findUser(registerRequest.getUserEmail());
        UserResponse response = new UserResponse("User registered successfully", userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest loginRequest) {
        String message = userService.login(loginRequest);
        Integer userId = userService.findUser(loginRequest.getUserEmail());
        UserResponse response = new UserResponse(message, userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<UserResponse> logout(@RequestParam String userEmail) {
        String message = userService.logout(userEmail);
        Integer userId = userService.findUser(userEmail);
        UserResponse response = new UserResponse(message, userId);
        return ResponseEntity.ok(response);
    }
}
