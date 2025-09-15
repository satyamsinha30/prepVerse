package com.prepverse.backend.model;

import com.prepverse.backend.model.auth.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "planner_tasks")
@Data
@NoArgsConstructor
public class PlannerTask {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private boolean completed = false;
    private LocalDateTime completionDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
