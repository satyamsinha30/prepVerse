package com.prepverse.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "user_mock_test_results")
@Data
@NoArgsConstructor
public class UserMockTestResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "mock_test_id")
    private MockTest mockTest;

    private Integer score;
    private Integer timeTakenInMinutes;
    private LocalDateTime submissionTime;
    // Potentially add more fields for detailed analysis, e.g., Map<Long, String> questionAnswers;
}
