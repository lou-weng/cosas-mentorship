package com.cosas.cosas;

import com.cosas.cosas.repository.MenteeRepository;

import org.springframework.context.annotation.Bean;

public class Config {

    @Bean
    public MenteeRepository menteeRepository() {
        return new MenteeRepository();
    }
    
}
