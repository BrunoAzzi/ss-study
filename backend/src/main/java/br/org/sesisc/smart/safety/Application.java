package br.org.sesisc.smart.safety;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    private static Class<Application> applicationClass= Application.class;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}