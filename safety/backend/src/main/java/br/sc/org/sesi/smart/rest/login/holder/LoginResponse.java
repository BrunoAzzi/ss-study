package br.sc.org.sesi.smart.rest.login.holder;

import java.io.Serializable;

/**
 * Define um token JWT
 */
public class LoginResponse implements Serializable {
    public String token;

    public LoginResponse() {
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
