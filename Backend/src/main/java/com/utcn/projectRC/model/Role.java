//package com.utcn.projectRC.model;
//
//import jakarta.persistence.*;
//import jakarta.persistence.criteria.CriteriaBuilder;
//import lombok.Data;
//
//import java.util.Set;
//
//@Entity
//@Data
//
//public class Role {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer roleId;
//
//    @Enumerated(EnumType.STRING)
//    private UserRole roleDescription;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id")
//    private User user;
//
//    public Role() {
//
//    }
//    public Role(UserRole roleDescription) {
//        this.roleDescription = roleDescription;
//    }
//}
