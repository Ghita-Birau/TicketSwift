//package com.utcn.projectRC.security.config;
//
//import lombok.AllArgsConstructor;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
//import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
//
//@Configuration
////@AllArgsConstructor
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurar {
//
////    @Override
////    protected void configure(HttpSecurity http) throws Exception {
////        http
////                .csrf().disable()
////                .authorizeHttpRequests()
////                .antMatchers("api/registration/**").permitAll()
////                .anyRequest()
////                .authenticated().and()
////                .fromLogin();
////    }
//}
