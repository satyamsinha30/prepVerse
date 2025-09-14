package com.prepverse.backend.controller;

import com.prepverse.backend.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<Map<String, Object>> getDashboardData(@PathVariable Long userId) {
        Map<String, Object> dashboardData = dashboardService.getDashboardData(userId);
        return ResponseEntity.ok(dashboardData);
    }
}
