package com.prepverse.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Entity
@Table(name = "questions")
@Data
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String question_text;

    @ElementCollection
    @CollectionTable(name = "question_options", joinColumns = @JoinColumn(name = "question_id"))
    @MapKeyColumn(name = "option_key")
    @Column(name = "option_value")
    private Map<String, String> options;

    @ElementCollection
    @CollectionTable(name = "question_correct_options", joinColumns = @JoinColumn(name = "question_id"))
    @Column(name = "correct_option")
    private List<String> correct_options;

    @Column(columnDefinition = "TEXT")
    private String solution_text;

    private String exam;
    private String subject;
    private String chapter;
    private String topic;
    private String difficulty;
    private String question_type;
}