//package com.utcn.projectRC.service;
//
//import com.utcn.projectRC.DTO.EventDTO;
//import com.utcn.projectRC.DTO.EventTicketCategoryDTO;
//import com.utcn.projectRC.DTO.UserDTO;
//import com.utcn.projectRC.model.Event;
//import com.utcn.projectRC.model.EventType;
//import com.utcn.projectRC.model.OrderEntity;
//import com.utcn.projectRC.model.User;
//import com.utcn.projectRC.repository.UserRepository;
//import jakarta.persistence.criteria.CriteriaBuilder;
//import jakarta.servlet.http.HttpServletRequest;
//import lombok.AllArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//import java.util.stream.Collectors;
//
//@Service
//@AllArgsConstructor
//public class UserService {
//
//    private final static String USER_NOT_FOUND_MSG = "user with username %s not found";
//
//    private final UserRepository userRepository;
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;
//
//    @Bean
//    public BCryptPasswordEncoder bCryptPasswordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//
//
//    public UserDTO convertUserToUserDTO(User user) {
//        UserDTO userDTO = new UserDTO();
//        userDTO.setUserId(user.getUserId());
//        userDTO.setName(user.getName());
//        userDTO.setUserEmail(user.getUserEmail());
//        userDTO.setAdress(user.getAddress());
//        userDTO.setDateOfBirth(user.getDateOfBirth());
//        userDTO.setRole(user.getUserRole());
//        userDTO.setOrders(user.getOrders());
//        return userDTO;
//    }
//
//
//
//}
//
