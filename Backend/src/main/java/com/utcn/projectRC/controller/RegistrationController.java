//package com.utcn.projectRC.controller;
//
//import com.utcn.projectRC.Request.RegistrationRequest;
//import com.utcn.projectRC.service.RegistrationService;
//import lombok.AllArgsConstructor;
//import org.springframework.web.bind.annotation.*;
//
//@CrossOrigin
//@RestController
//@RequestMapping("/api")
//
//
//public class RegistrationController {
//    private final RegistrationService registrationService;
//
//    public RegistrationController(RegistrationService registrationService) {
//        this.registrationService = registrationService;
//    }
//    @PostMapping("/r")
//    public String register(@RequestBody RegistrationRequest request) {
//        System.out.println("AM INTRAT");
//        return registrationService.register(request);
//    }
//
//    @GetMapping("/test")
//    public String test() {
//        System.out.println("TEST");
//        return "Test successful";
//    }
//}
