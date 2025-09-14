package com.prepverse.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "mock_tests")
@Data
@NoArgsConstructor
public class MockTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;
    private Integer durationInMinutes;

    @ManyToMany
    @JoinTable(
            name = "mock_test_questions",
            joinColumns = @JoinColumn(name = "mock_test_id"),
            inverseJoinColumns = @JoinColumn(name = "question_id")
    )
    private Set<Question> questions = new HashSet<>();
}

