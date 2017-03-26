package br.sc.org.sesi.smart.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = "br.sc.org.sesi.smart.model")
@EnableJpaRepositories(basePackages = "br.sc.org.sesi.smart.repository")
public class MvcApiApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(MvcApiApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(MvcApiApplication.class, args);
    }
}
