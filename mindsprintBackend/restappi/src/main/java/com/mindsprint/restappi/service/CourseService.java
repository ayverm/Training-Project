package com.mindsprint.restappi.service;

import com.mindsprint.restappi.models.Course;
import com.mindsprint.restappi.models.Student;
import com.mindsprint.restappi.repo.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepo repo;

    public Course addCourse(Course course){
        return repo.save(course);
    }

    public List<Course> getAllCourses(){
        return repo.findAll();
    }

    public Course getCourseById(long id){
        return repo.findById(id).orElse(null);
    }

    public boolean deleteCourseById(long id){
        if(getCourseById(id)!=null){
            repo.deleteById(id);
            return true;
        }
        return false;
    }

    public Course updateCourseById(Course course,long id){
        Course oldcourse = getCourseById(id);
        if(oldcourse!=null){
            oldcourse.setTitle(course.getTitle());
            oldcourse.setDescription(course.getDescription());
            oldcourse.setPrice(course.getPrice());
            oldcourse.setImgUrl(course.getImgUrl());
            oldcourse.setDuration(course.getDuration());
            oldcourse.setInstructor(course.getInstructor());
            repo.save(oldcourse);
        }
        return null;

    }

}
