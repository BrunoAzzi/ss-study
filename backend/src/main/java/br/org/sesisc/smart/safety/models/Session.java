package br.org.sesisc.smart.safety.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Session {

    private String email;
    private String password;
    private String token;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
