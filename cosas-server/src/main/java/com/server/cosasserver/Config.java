package com.server.cosasserver;

import com.server.cosasserver.repository.MenteeRepository;

import org.springframework.context.annotation.Bean;

public class Config {

    @Bean
    public MenteeRepository menteeRepository() {
        return new MenteeRepository();
    }
    
}
