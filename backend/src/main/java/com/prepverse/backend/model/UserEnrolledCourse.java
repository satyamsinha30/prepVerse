package com.prepverse.backend.model;

import com.prepverse.backend.model.auth.User;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_enrolled_courses")
@Data
@NoArgsConstructor
public class UserEnrolledCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public UserEnrolledCourse(User user, Course course) {
        this.user = user;
        this.course = course;
    }
}
