package br.sc.org.sesi.smart.rest.login.holder;

import java.io.Serializable;

/**
 * Request de Login padrao
 */public class LoginRequest implements Serializable {

    private String login;
    private String password;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
