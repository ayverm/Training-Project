package com.mindsprint.restappi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String price;
    @Column(columnDefinition = "TEXT")
    private String imgUrl;
    private String instructor;
    private String duration;

    @JsonIgnore
    @ManyToMany(mappedBy = "courses")
    private Set<Student> students = new HashSet<>();
}
