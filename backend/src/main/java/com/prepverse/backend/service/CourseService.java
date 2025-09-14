package com.prepverse.backend.service;

import com.prepverse.backend.model.Course;
import com.prepverse.backend.model.User;
import com.prepverse.backend.repository.CourseRepository;
import com.prepverse.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(Long id, Course courseDetails) {
        Course course = courseRepository.findById(id).orElseThrow(() -> new RuntimeException("Course not found"));
        course.setName(courseDetails.getName());
        course.setDescription(courseDetails.getDescription());
        course.setExam(courseDetails.getExam());
        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

    public Course enrollUserInCourse(Long courseId, Long userId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        course.getEnrolledUsers().add(user);
        user.getEnrolledCourses().add(course);

        userRepository.save(user); // Save user to update enrolledCourses
        return courseRepository.save(course); // Save course to update enrolledUsers
    }

    public Course removeUserFromCourse(Long courseId, Long userId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        course.getEnrolledUsers().remove(user);
        user.getEnrolledCourses().remove(course);

        userRepository.save(user); // Save user to update enrolledCourses
        return courseRepository.save(course); // Save course to update enrolledUsers
    }
}
