package com.prepverse.backend.service.auth;

import com.prepverse.backend.dto.auth.LoginRequest;
import com.prepverse.backend.dto.auth.SignupRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> authenticateUser(LoginRequest loginRequest);
    ResponseEntity<?> registerUser(SignupRequest signupRequest);
}