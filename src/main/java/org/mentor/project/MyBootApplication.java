package org.mentor.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@EnableAutoConfiguration
public class MyBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(MyBootApplication.class, args);
    }

}
