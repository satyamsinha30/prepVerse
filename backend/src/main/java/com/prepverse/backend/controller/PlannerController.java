package com.prepverse.backend.controller;

import com.prepverse.backend.model.PlannerTask;
import com.prepverse.backend.service.PlannerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/planner")
public class PlannerController {

    @Autowired
    private PlannerService plannerService;

    @GetMapping
    public List<PlannerTask> getAllPlannerTasks() {
        return plannerService.getAllPlannerTasks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlannerTask> getPlannerTaskById(@PathVariable Long id) {
        PlannerTask plannerTask = plannerService.getPlannerTaskById(id).orElseThrow(() -> new RuntimeException("PlannerTask not found"));
        return ResponseEntity.ok(plannerTask);
    }

    @PostMapping
    public PlannerTask createPlannerTask(@RequestParam Long userId, @RequestParam String title, @RequestParam String startTime, @RequestParam String endTime) {
        return plannerService.createPlannerTask(userId, title, LocalDateTime.parse(startTime), LocalDateTime.parse(endTime));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PlannerTask> updatePlannerTask(@PathVariable Long id, @RequestParam String title, @RequestParam String startTime, @RequestParam String endTime) {
        PlannerTask updatedPlannerTask = plannerService.updatePlannerTask(id, title, LocalDateTime.parse(startTime), LocalDateTime.parse(endTime));
        return ResponseEntity.ok(updatedPlannerTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlannerTask(@PathVariable Long id) {
        plannerService.deletePlannerTask(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PlannerTask>> getPlannerTasksByUser(@PathVariable Long userId) {
        List<PlannerTask> plannerTasks = plannerService.getPlannerTasksByUser(userId);
        return ResponseEntity.ok(plannerTasks);
    }
}
