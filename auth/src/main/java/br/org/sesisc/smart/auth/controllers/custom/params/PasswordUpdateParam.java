package br.org.sesisc.smart.auth.controllers.custom.params;

import javax.validation.constraints.NotNull;

public class PasswordUpdateParam {
    @NotNull(message="Senha é um campo obrigatório.")
    private String password;

    @NotNull(message="Token é um campo obrigatório.")
    private String token;

    public String getPassword() {
        return password;
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
