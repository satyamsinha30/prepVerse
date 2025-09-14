package com.prepverse.backend.service;

import com.prepverse.backend.model.MockTest;
import com.prepverse.backend.model.User;
import com.prepverse.backend.model.UserMockTestResult;
import com.prepverse.backend.repository.MockTestRepository;
import com.prepverse.backend.repository.UserMockTestResultRepository;
import com.prepverse.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MockTestService {

    @Autowired
    private MockTestRepository mockTestRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMockTestResultRepository userMockTestResultRepository;

    public List<MockTest> getAllMockTests() {
        return mockTestRepository.findAll();
    }

    public Optional<MockTest> getMockTestById(Long id) {
        return mockTestRepository.findById(id);
    }

    public MockTest createMockTest(MockTest mockTest) {
        return mockTestRepository.save(mockTest);
    }

    public MockTest updateMockTest(Long id, MockTest mockTestDetails) {
        MockTest mockTest = mockTestRepository.findById(id).orElseThrow(() -> new RuntimeException("MockTest not found"));
        mockTest.setName(mockTestDetails.getName());
        mockTest.setDurationInMinutes(mockTestDetails.getDurationInMinutes());
        mockTest.setQuestions(mockTestDetails.getQuestions());
        return mockTestRepository.save(mockTest);
    }

    public void deleteMockTest(Long id) {
        mockTestRepository.deleteById(id);
    }

    public UserMockTestResult submitMockTest(Long mockTestId, Long userId, Integer score, Integer timeTakenInMinutes) {
        MockTest mockTest = mockTestRepository.findById(mockTestId).orElseThrow(() -> new RuntimeException("MockTest not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        UserMockTestResult result = new UserMockTestResult();
        result.setMockTest(mockTest);
        result.setUser(user);
        result.setScore(score);
        result.setTimeTakenInMinutes(timeTakenInMinutes);
        result.setSubmissionTime(LocalDateTime.now());

        return userMockTestResultRepository.save(result);
    }

    public List<UserMockTestResult> getUserMockTestResults(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return userMockTestResultRepository.findByUser(user);
    }
}
