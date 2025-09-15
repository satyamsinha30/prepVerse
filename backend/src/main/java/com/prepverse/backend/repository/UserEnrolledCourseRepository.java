package com.prepverse.backend.repository;

import com.prepverse.backend.model.UserEnrolledCourse;
import com.prepverse.backend.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserEnrolledCourseRepository extends JpaRepository<UserEnrolledCourse, Long> {
    void deleteByUser_IdAndCourse_Id(Long userId, Long courseId);
    List<UserEnrolledCourse> findByUser(User user);
}
