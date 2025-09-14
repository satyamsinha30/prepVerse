package com.prepverse.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "courses")
@Data
@NoArgsConstructor
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String exam;

    @ManyToMany(mappedBy = "enrolledCourses")
    private Set<User> enrolledUsers = new HashSet<>();
}
