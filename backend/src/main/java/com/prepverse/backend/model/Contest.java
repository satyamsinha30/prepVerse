package com.prepverse.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "contests")
@Data
@NoArgsConstructor
public class Contest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;
    private LocalDateTime startTime;
    private LocalDateTime endTime;

    @ManyToMany
    @JoinTable(
            name = "contest_questions",
            joinColumns = @JoinColumn(name = "contest_id"),
            inverseJoinColumns = @JoinColumn(name = "question_id")
    )
    private Set<Question> questions = new HashSet<>();
}
