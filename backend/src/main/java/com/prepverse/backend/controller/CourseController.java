package com.prepverse.backend.controller;

import com.prepverse.backend.model.Course;
import com.prepverse.backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Course course = courseService.getCourseById(id).orElseThrow(() -> new RuntimeException("Course not found"));
        return ResponseEntity.ok(course);
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseService.createCourse(course);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        Course updatedCourse = courseService.updateCourse(id, courseDetails);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{courseId}/enroll/{userId}")
    public ResponseEntity<Course> enrollUserInCourse(@PathVariable Long courseId, @PathVariable Long userId) {
        Course course = courseService.enrollUserInCourse(courseId, userId);
        return ResponseEntity.ok(course);
    }

    @DeleteMapping("/{courseId}/unenroll/{userId}")
    public ResponseEntity<Course> removeUserFromCourse(@PathVariable Long courseId, @PathVariable Long userId) {
        Course course = courseService.removeUserFromCourse(courseId, userId);
        return ResponseEntity.ok(course);
    }
}
