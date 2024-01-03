package com.utcn.projectRC.controller;

import com.utcn.projectRC.DTO.UserDTO;
import com.utcn.projectRC.model.User;
import com.utcn.projectRC.service.JwtService;
import com.utcn.projectRC.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    public final JwtService jwtService;
    public final UserService userService;

    @GetMapping("/by/token")
    public UserDTO getUserByToken(@RequestParam String token) {
        return userService.getUserByToken(token);
    }
}