package br.sc.org.sesi.smart.rest.admin.holder;

import java.io.Serializable;

/**
 * Created by Igor on 4/6/2016.
 */
public class LoginAdminRequest implements Serializable {
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
