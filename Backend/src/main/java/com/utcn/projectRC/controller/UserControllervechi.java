//package com.utcn.projectRC.controller;
//
//import com.utcn.projectRC.DTO.UserDTO;
//import com.utcn.projectRC.service.UserService;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/user")
//@RequiredArgsConstructor
//public class UserController {
//
//    //public final JwtService jwtService;
//    public final UserService userService;
//
////    @GetMapping("/by/token")
////    public UserDTO getUserByToken(@RequestParam String token) {
////        return userService.getUserByToken(token);
////    }
//
//    private String extractTokenFromHeader(HttpServletRequest request) {
//        String authHeader = request.getHeader("Authorization");
//
//        if (authHeader != null && authHeader.startsWith("Bearer ")) {
//            return authHeader.substring(7);
//        }
//
//        throw new RuntimeException("Token not found in the Authorization header");
//    }
//
//    @GetMapping("/by/token")
//    public UserDTO getUserByToken(HttpServletRequest request) {
//        return userService.getUserDTOFromRequest(request);
//    }
//}
