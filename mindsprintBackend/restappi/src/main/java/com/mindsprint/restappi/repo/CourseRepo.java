package com.mindsprint.restappi.repo;

import com.mindsprint.restappi.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course,Long> {

}
