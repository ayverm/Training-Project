package com.mindsprint.restappi.controllers;
import com.mindsprint.restappi.models.Student;
import com.mindsprint.restappi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService service;

    @PostMapping
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        return new ResponseEntity<>(service.addStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Student>> getAllStudent(){
        return ResponseEntity.ok(service.getAllStudents());
    }

    @GetMapping("/add/{sid}/course/{cid}")
    public ResponseEntity<Student> registerCourse(@PathVariable Long sid,@PathVariable Long cid){
        return new ResponseEntity<>(service.updateCourseById(cid,sid),HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Student>  login_page(@RequestBody Student student){
        Student student1 =service.login(student);
        if(student1!=null)
            return ResponseEntity.ok(student1);
        else
            return new ResponseEntity<>(service.login(student),HttpStatus.NOT_FOUND);
    }

    @GetMapping("{id}")
    public ResponseEntity<Object> getStudentById(@PathVariable long id)
    {
        Student found = service.getStudentById(id);
        if(found!=null)
            return ResponseEntity.ok(found);
        else
            return new ResponseEntity<>("Student not found",HttpStatus.NOT_FOUND);
    }

    @GetMapping("/makeadmin/{id}")
    public ResponseEntity<String>makeAdmin(@PathVariable Long id){
        service.makeAdmin(id);
        return new ResponseEntity<>("RoleUpdated",HttpStatus.OK);
    }
}
