package com.prepverse.backend.service;

import com.prepverse.backend.model.Course;
import com.prepverse.backend.model.UserMockTestResult;
import com.prepverse.backend.model.UserContestResult;
import com.prepverse.backend.model.PlannerTask;
import com.prepverse.backend.model.UserEnrolledCourse;
import com.prepverse.backend.model.auth.User;
import com.prepverse.backend.repository.CourseRepository;
import com.prepverse.backend.repository.MockTestRepository;
import com.prepverse.backend.repository.UserEnrolledCourseRepository;
import com.prepverse.backend.repository.auth.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeSet;
import java.util.stream.Collectors;

@Service
public class DashboardService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserEnrolledCourseRepository userEnrolledCourseRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private MockTestRepository mockTestRepository;

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
        List<Course> enrolledCourses = userEnrolledCourseRepository.findByUser(user).stream()
                .map(UserEnrolledCourse::getCourse)
                .collect(Collectors.toList());
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

        // Streak Counter
        TreeSet<LocalDate> activityDates = new TreeSet<>();
        mockTestResults.forEach(result -> activityDates.add(result.getSubmissionTime().toLocalDate()));
        contestResults.forEach(result -> activityDates.add(result.getSubmissionTime().toLocalDate()));
        plannerTasks.stream()
                .filter(PlannerTask::isCompleted)
                .map(PlannerTask::getCompletionDate)
                .filter(java.util.Objects::nonNull)
                .forEach(date -> activityDates.add(date.toLocalDate()));

        int currentStreak = 0;
        if (!activityDates.isEmpty()) {
            LocalDate today = LocalDate.now();
            LocalDate lastActivityDate = activityDates.last();

            if (lastActivityDate.isEqual(today) || lastActivityDate.isEqual(today.minusDays(1))) {
                currentStreak = 1;
                LocalDate dateToCheck = lastActivityDate.minusDays(1);
                while (activityDates.contains(dateToCheck)) {
                    currentStreak++;
                    dateToCheck = dateToCheck.minusDays(1);
                }
            }
        }
        dashboardData.put("streakCounter", currentStreak);

        // Overall Progress
        long totalCourses = courseRepository.count();
        long completedCourses = enrolledCourses.size();
        long totalMockTests = mockTestRepository.count();
        long completedMockTests = mockTestResults.size();

        double overallProgress = 0.0;
        if (totalCourses > 0 || totalMockTests > 0) {
            double courseProgress = (totalCourses > 0) ? (double) completedCourses / totalCourses : 0.0;
            double mockTestProgress = (totalMockTests > 0) ? (double) completedMockTests / totalMockTests : 0.0;
            overallProgress = (courseProgress + mockTestProgress) / 2.0 * 100;
        }
        dashboardData.put("overallProgress", String.format("%.2f%%", overallProgress));

        // Daily Practice Suggestions
        List<PlannerTask> uncompletedPlannerTasks = plannerTasks.stream()
                .filter(task -> !task.isCompleted())
                .limit(5)
                .collect(Collectors.toList());
        dashboardData.put("dailyPlannerSuggestions", uncompletedPlannerTasks);

        List<Long> attemptedMockTestIds = mockTestResults.stream()
                .map(UserMockTestResult::getMockTest)
                .map(com.prepverse.backend.model.MockTest::getId)
                .collect(Collectors.toList());

        List<com.prepverse.backend.model.MockTest> unattemptedMockTests = mockTestRepository.findAll().stream()
                .filter(mockTest -> !attemptedMockTestIds.contains(mockTest.getId()))
                .limit(3)
                .collect(Collectors.toList());
        dashboardData.put("dailyMockTestSuggestions", unattemptedMockTests);

        return dashboardData;
    }
}

