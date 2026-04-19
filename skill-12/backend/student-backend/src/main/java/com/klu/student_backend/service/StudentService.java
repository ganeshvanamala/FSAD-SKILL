package com.klu.student_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.student_backend.entity.Student;
import com.klu.student_backend.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student addStudent(Student student){
        return repo.save(student);
    }

    public List<Student> getAllStudents(){
        return repo.findAll();
    }

    public Student updateStudent(Long id, Student student){

        Student existing = repo.findById(id).orElse(null);

        if(existing != null){
            existing.setName(student.getName());
            existing.setEmail(student.getEmail());
            existing.setCourse(student.getCourse());
            return repo.save(existing);
        }

        return null;
    }

    public void deleteStudent(Long id){
        repo.deleteById(id);
    }

}