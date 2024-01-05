//package com.utcn.projectRC.service;
//
//import com.utcn.projectRC.Request.RegisterRequest;
//import com.utcn.projectRC.model.User;
//import com.utcn.projectRC.model.UserRole;
//import com.utcn.projectRC.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//
//public class AuthenticationService {
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//
//    public AuthenticationResponse register(RegisterRequest request) {
//        var user = User.builder()
//                .name(request.getName())
//                .userEmail(request.getUserEmail())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .address(request.getAddress())
//                .dateOfBirth(request.getDateOfBirth())
//                .phoneNumber(request.getPhoneNumber())
//                .userRole(UserRole.USER)
//                .build();
//        userRepository.save(user);
//
//        return AuthenticationResponse.builder()
//                .build();
//    }
//
//}
