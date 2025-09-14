package com.prepverse.backend.controller;

import com.prepverse.backend.model.MockTest;
import com.prepverse.backend.model.UserMockTestResult;
import com.prepverse.backend.service.MockTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mocktests")
public class MockTestController {

    @Autowired
    private MockTestService mockTestService;

    @GetMapping
    public List<MockTest> getAllMockTests() {
        return mockTestService.getAllMockTests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MockTest> getMockTestById(@PathVariable Long id) {
        MockTest mockTest = mockTestService.getMockTestById(id).orElseThrow(() -> new RuntimeException("MockTest not found"));
        return ResponseEntity.ok(mockTest);
    }

    @PostMapping
    public MockTest createMockTest(@RequestBody MockTest mockTest) {
        return mockTestService.createMockTest(mockTest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MockTest> updateMockTest(@PathVariable Long id, @RequestBody MockTest mockTestDetails) {
        MockTest updatedMockTest = mockTestService.updateMockTest(id, mockTestDetails);
        return ResponseEntity.ok(updatedMockTest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMockTest(@PathVariable Long id) {
        mockTestService.deleteMockTest(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{mockTestId}/submit/{userId}")
    public ResponseEntity<UserMockTestResult> submitMockTest(@PathVariable Long mockTestId, @PathVariable Long userId, @RequestParam Integer score, @RequestParam Integer timeTakenInMinutes) {
        UserMockTestResult result = mockTestService.submitMockTest(mockTestId, userId, score, timeTakenInMinutes);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/results/user/{userId}")
    public ResponseEntity<List<UserMockTestResult>> getUserMockTestResults(@PathVariable Long userId) {
        List<UserMockTestResult> results = mockTestService.getUserMockTestResults(userId);
        return ResponseEntity.ok(results);
    }
}
