package com.mindsprint.restappi.controllers;
import com.mindsprint.restappi.models.Course;
import com.mindsprint.restappi.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course")
@CrossOrigin
public class CourseController {
    @Autowired
    private CourseService service;

    @PostMapping
    public ResponseEntity<Course> addCategory(@RequestBody Course course){
        return new ResponseEntity<>(service.addCourse(course), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCategories(){
        return ResponseEntity.ok(service.getAllCourses());
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getCourseById(@PathVariable long id){
        Course course = service.getCourseById(id);
        if(course!=null)
            return ResponseEntity.ok(course);
        else
            return new ResponseEntity<>("Student not found",HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteCourseById(@PathVariable long id){
        if(service.deleteCourseById(id)){
            return ResponseEntity.ok("Course Successfully deleted");
        }
        return new ResponseEntity<>("Course not found",HttpStatus.NOT_FOUND);
    }

    @PutMapping("{id}")
    public ResponseEntity<Object> updateCourseById(@PathVariable long id,@RequestBody Course course){
        Course found = service.updateCourseById(course,id);
        if(found != null){
            return ResponseEntity.ok(found);
        }
        return new ResponseEntity<>("Course not found",HttpStatus.NOT_FOUND);
    }
}
