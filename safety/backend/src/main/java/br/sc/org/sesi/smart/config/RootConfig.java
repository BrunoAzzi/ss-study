package br.sc.org.sesi.smart.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.provisioning.UserDetailsManagerConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by Igor on 25/03/2015.
 */
@Configuration
@ImportResource(value={ "classpath:META-INF/resources/spring/root/*.xml" })
@ComponentScan(basePackages = { "br.sc.org.sesi.smart.root" })
@EnableWebSecurity
public class RootConfig {
    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        /*
        PANEL_ADMIN - Acesso geral ao painel com funcionalidades basicas
        INSTANCE_CONFIG_ADMIN - Permitir aplicacao de configuracoes nas instancias existentes (atualizacao,etc)
         */
        UserDetailsManagerConfigurer config = auth.inMemoryAuthentication();
        UserDetailsManagerConfigurer.UserDetailsBuilder builder = config.withUser("admin").password("admin").roles("ADMIN");

        /*
        for (int i = 0; i < AdminUserDaoImpl.DEFAULT_ADMIN_USERS.size(); i++) {
            AdminUser adminUser = AdminUserDaoImpl.DEFAULT_ADMIN_USERS.get(i);
            UserDetailsManagerConfigurer.UserDetailsBuilder builder = config.withUser(adminUser.getLogin()).password(adminUser.getPassword()).roles(adminUser.getRoles().toArray(new String[0]));
            if (i < AdminUserDaoImpl.DEFAULT_ADMIN_USERS.size() - 1) {
                config = builder.and();
            }
        } */
    }

    @Configuration
    @Order(1)
    public static class ApiWebSecurityConfigurationAdapter extends WebSecurityConfigurerAdapter {
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable();
            http
                    .authorizeRequests()
                    .antMatchers(HttpMethod.OPTIONS).permitAll()
                    .antMatchers("/admin/**").hasRole("PANEL_ADMIN")
                    .and()
                    .httpBasic();
        }
    }
}
