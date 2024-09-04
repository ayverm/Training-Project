package com.mindsprint.restappi.repo;

import com.mindsprint.restappi.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student,Long> {
    public Student findByEmail(String email);
}
