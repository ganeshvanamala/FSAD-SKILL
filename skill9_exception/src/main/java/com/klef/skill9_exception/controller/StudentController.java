package com.klef.skill9_exception.controller;

import java.util.*;

import org.springframework.web.bind.annotation.*;

import com.klef.skill9_exception.exception.InvalidInputException;
import com.klef.skill9_exception.exception.StudentNotFoundException;
import com.klef.skill9_exception.model.Student;

@RestController
public class StudentController {

    private List<Student> students = List.of(
            new Student(1,"Sai","CSE"),
            new Student(2,"Rahul","ECE"),
            new Student(3,"Priya","IT")
    );

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable int id){

        if(id <= 0){
            throw new InvalidInputException("Student ID must be positive.");
        }

        return students.stream()
                .filter(s -> s.getId() == id)
                .findFirst()
                .orElseThrow(() ->
                        new StudentNotFoundException("Student with ID "+id+" not found"));
    }
}