
package com.example.deploy.controller;

import org.springframework.web.bind.annotation.*;

import jakarta.persistence.Table;

import java.util.*;

@RestController
@RequestMapping("/students")
@CrossOrigin
public class StudentController {

 private List<Map<String,String>> students=new ArrayList<>();

 @GetMapping
 public List<Map<String,String>> getStudents(){
  return students;
 }

 @PostMapping
 public Map<String,String> addStudent(@RequestBody Map<String,String> student){
  students.add(student);
  return student;
 }

 @DeleteMapping("/{index}")
 public void delete(@PathVariable int index){
  students.remove(index);
 }
}
