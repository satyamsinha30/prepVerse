package com.prepverse.backend.service;

import com.prepverse.backend.model.Course;
import com.prepverse.backend.model.User;
import com.prepverse.backend.model.UserMockTestResult;
import com.prepverse.backend.model.UserContestResult;
import com.prepverse.backend.model.PlannerTask;
import com.prepverse.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    

    @Autowired
    private MockTestService mockTestService;

    @Autowired
    private ContestService contestService;

    @Autowired
    private PlannerService plannerService;

    public Map<String, Object> getDashboardData(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, Object> dashboardData = new HashMap<>();

        // User details
        dashboardData.put("user", user);

        // Enrolled courses
        List<Course> enrolledCourses = user.getEnrolledCourses().stream().toList();
        dashboardData.put("enrolledCourses", enrolledCourses);

        // Mock test results
        List<UserMockTestResult> mockTestResults = mockTestService.getUserMockTestResults(userId);
        dashboardData.put("mockTestResults", mockTestResults);

        // Contest results
        List<UserContestResult> contestResults = contestService.getUserContestResults(userId);
        dashboardData.put("contestResults", contestResults);

        // Planner tasks
        List<PlannerTask> plannerTasks = plannerService.getPlannerTasksByUser(userId);
        dashboardData.put("plannerTasks", plannerTasks);

        // TODO: Add streak counter, overall progress, daily practice suggestions, etc.

        return dashboardData;
    }
}
