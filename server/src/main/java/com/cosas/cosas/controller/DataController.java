package com.cosas.cosas.controller;

import java.util.ArrayList;
import java.util.List;

import com.cosas.cosas.model.Mentee;
import com.cosas.cosas.repository.MenteeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DataController {

    @Autowired
    MenteeRepository repository;

    @RequestMapping(value="/mentees", method=RequestMethod.GET)
    public ResponseEntity<?> getMentees(@RequestParam(required = true) String email) {
        try {
            List<Mentee> mentees = new ArrayList<Mentee>();
            repository.findByMentor(email).forEach(mentees::add);
            System.out.println("Here it is");
            System.out.println(mentees);
            return ResponseEntity.status(HttpStatus.CREATED).body(mentees);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @RequestMapping(value="/hello", method=RequestMethod.GET)
    public ResponseEntity<?> getResponse() {
        Integer inte = repository.count();
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(inte);
    }
}
