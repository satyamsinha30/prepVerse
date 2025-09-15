package com.prepverse.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty("question_id")
    private String questionId;

    @JsonProperty("question_text")
    @Column(columnDefinition = "TEXT")
    private String title;

    @ElementCollection
    @CollectionTable(name = "question_options", joinColumns = @JoinColumn(name = "question_id"))
    @MapKeyColumn(name = "option_key")
    @Column(name = "option_value")
    private Map<String, String> options;

    @JsonProperty("correct_options")
    @ElementCollection
    @CollectionTable(name = "question_correct_options", joinColumns = @JoinColumn(name = "question_id"))
    @Column(name = "correct_option")
    private List<String> correctOptions;

    @JsonProperty("solution_text")
    @Column(columnDefinition = "TEXT")
    private String description;

    private String exam;
    private String subject;
    private String chapter;
    private String topic;
    private String difficulty;

    @JsonProperty("question_type")
    private String type;
}