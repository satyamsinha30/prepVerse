package com.prepverse.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // 1. Enable CORS using the corsConfigurationSource bean
                .cors(Customizer.withDefaults())
                // 2. Disable CSRF, not needed for a stateless API
                .csrf(csrf -> csrf.disable())
                // 3. Define authorization rules
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**")).permitAll() // Allow access to H2 console
                        .requestMatchers(AntPathRequestMatcher.antMatcher("/api/questions")).permitAll() // These endpoints are public
                        .requestMatchers(AntPathRequestMatcher.antMatcher("/api/auth/**")).permitAll() // These endpoints are public
                        .anyRequest().authenticated() // All other endpoints require authentication
                )
                // 4. Set session management to stateless
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }

    // This bean defines the CORS configuration
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // 5. Specify the allowed origin (your React frontend)
        configuration.setAllowedOrigins(List.of("http://localhost:5173"));
        // 6. Specify the allowed HTTP methods
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        // 7. Specify the allowed headers
        configuration.setAllowedHeaders(List.of("*"));
        // 8. Allow credentials (like cookies, if you use them later)
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // Apply this configuration to all routes
        return source;
    }
}

