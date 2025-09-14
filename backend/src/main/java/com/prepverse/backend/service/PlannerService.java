package com.prepverse.backend.service;

import com.prepverse.backend.model.PlannerTask;
import com.prepverse.backend.model.User;
import com.prepverse.backend.repository.PlannerTaskRepository;
import com.prepverse.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PlannerService {

    @Autowired
    private PlannerTaskRepository plannerTaskRepository;

    @Autowired
    private UserRepository userRepository;

    public List<PlannerTask> getAllPlannerTasks() {
        return plannerTaskRepository.findAll();
    }

    public Optional<PlannerTask> getPlannerTaskById(Long id) {
        return plannerTaskRepository.findById(id);
    }

    public PlannerTask createPlannerTask(Long userId, String title, LocalDateTime startTime, LocalDateTime endTime) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        PlannerTask plannerTask = new PlannerTask();
        plannerTask.setUser(user);
        plannerTask.setTitle(title);
        plannerTask.setStartTime(startTime);
        plannerTask.setEndTime(endTime);
        return plannerTaskRepository.save(plannerTask);
    }

    public PlannerTask updatePlannerTask(Long id, String title, LocalDateTime startTime, LocalDateTime endTime) {
        PlannerTask plannerTask = plannerTaskRepository.findById(id).orElseThrow(() -> new RuntimeException("PlannerTask not found"));
        plannerTask.setTitle(title);
        plannerTask.setStartTime(startTime);
        plannerTask.setEndTime(endTime);
        return plannerTaskRepository.save(plannerTask);
    }

    public void deletePlannerTask(Long id) {
        plannerTaskRepository.deleteById(id);
    }

    public List<PlannerTask> getPlannerTasksByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return plannerTaskRepository.findByUser(user);
    }
}
