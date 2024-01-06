package com.utcn.projectRC.Controller;

import com.utcn.projectRC.Request.LoginRequest;
import com.utcn.projectRC.Request.RegisterRequest;
import com.utcn.projectRC.Request.UpdateUserRequest;
import com.utcn.projectRC.Response.UserResponse;
import com.utcn.projectRC.Entity.User;
import com.utcn.projectRC.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/user")

public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest registerRequest) {
        userService.register(registerRequest);
        Integer userId = userService.findUser(registerRequest.getUserEmail()).getUserId();
        UserResponse response = new UserResponse("User registered successfully", userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest loginRequest) {
        String message = userService.login(loginRequest);
        Integer userId = userService.findUser(loginRequest.getUserEmail()).getUserId();
        UserResponse response = new UserResponse(message, userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/logout")
    public ResponseEntity<UserResponse> logout(@RequestParam String userEmail) {
        String message = userService.logout(userEmail);
        Integer userId = userService.findUser(userEmail).getUserId();
        UserResponse response = new UserResponse(message, userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/find/by/id")
    public User findUserById(@RequestParam Integer userId) {
        return userService.findUserById(userId);
    }

    @PostMapping("/delete/account")
    public ResponseEntity<UserResponse> deleteAccount(@RequestParam Integer userId) {
        String message = userService.deleteUser(userId);
        UserResponse response = new UserResponse(message, userId);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/update")
    public ResponseEntity<UserResponse> updateUser(@RequestParam Integer userId, @RequestBody UpdateUserRequest updateUserRequest) {
        String message = userService.updateUser(userId, updateUserRequest);
        UserResponse response = new UserResponse(message, userId);
        return ResponseEntity.ok(response);
    }
}
