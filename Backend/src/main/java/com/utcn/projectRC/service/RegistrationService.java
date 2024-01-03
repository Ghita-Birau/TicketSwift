//package com.utcn.projectRC.service;
//
//
//import com.utcn.projectRC.Request.RegistrationRequest;
//import com.utcn.projectRC.model.User;
//import com.utcn.projectRC.model.UserRole;
//import lombok.AllArgsConstructor;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class RegistrationService {
//
//    private final UserService userService;
//    private final EmailValidator emailValidator;
//    public String register(RegistrationRequest request) {
//        boolean isValidEmail = emailValidator.test(request.getUserEmail());
//        if(!isValidEmail) {
//            throw new IllegalStateException("Email not valid");
//        }
//        return userService.signUpUser(new User(request.getUserName(), request.getUserEmail(), request.getPassword(), request.getDateOfBirth(), request.getAddress(), request.getPhoneNumber(), UserRole.USER));
//    }
//}
