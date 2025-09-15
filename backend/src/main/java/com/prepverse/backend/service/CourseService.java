package com.prepverse.backend.service;

import com.prepverse.backend.model.Course;
import com.prepverse.backend.model.UserEnrolledCourse;
import com.prepverse.backend.model.auth.User;
import com.prepverse.backend.repository.CourseRepository;
import com.prepverse.backend.repository.UserEnrolledCourseRepository;
import com.prepverse.backend.repository.auth.UserRepository;
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

    @Autowired
    private UserEnrolledCourseRepository userEnrolledCourseRepository;

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

        UserEnrolledCourse userEnrolledCourse = new UserEnrolledCourse(user, course);
        userEnrolledCourseRepository.save(userEnrolledCourse);

        return course;
    }

    public Course removeUserFromCourse(Long courseId, Long userId) {
        Course course = courseRepository.findById(courseId).orElseThrow(() -> new RuntimeException("Course not found"));
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        userEnrolledCourseRepository.deleteByUser_IdAndCourse_Id(user.getId(), course.getId());

        return course;
    }
}
