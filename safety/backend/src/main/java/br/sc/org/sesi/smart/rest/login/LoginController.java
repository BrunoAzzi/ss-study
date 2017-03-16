package br.sc.org.sesi.smart.rest.login;

import javax.servlet.ServletException;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.rest.login.holder.LoginRequest;
import br.sc.org.sesi.smart.rest.login.holder.LoginResponse;

/**
 * Login da plataforma, retorna um token JWT
 */
public interface LoginController {

    /**
     * Metodo principal de login da plataforma
     * @param login
     * @return
     * @throws ServletException
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public LoginResponse login(@RequestBody final LoginRequest login) throws ServletException;

}
