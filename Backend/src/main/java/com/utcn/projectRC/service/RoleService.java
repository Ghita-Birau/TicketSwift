//package com.utcn.projectRC.service;
//
//import com.utcn.projectRC.model.Role;
//import com.utcn.projectRC.model.User;
//import com.utcn.projectRC.model.UserRole;
//import com.utcn.projectRC.repository.RoleRepository;
//import org.springframework.stereotype.Service;
//
//@Service
//public class RoleService {
//    private RoleRepository roleRepository;
//
//    public Role getRoleByDescription(UserRole userRole) {
//        return roleRepository.findByRoleDescription(userRole);
//    }
//
//    public void addRole(User user, UserRole userRole) {
//        Role role = getRoleByDescription(userRole);
//        user.getRoles().add(role);
//    }
//}
