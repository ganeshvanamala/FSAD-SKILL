package com.klu.student_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.student_backend.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
