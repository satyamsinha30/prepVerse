package com.prepverse.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "user_contest_results")
@Data
@NoArgsConstructor
public class UserContestResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "contest_id")
    private Contest contest;

    private Integer score;
    private LocalDateTime submissionTime;
    // Potentially add more fields for detailed analysis, e.g., rank, time taken
}
