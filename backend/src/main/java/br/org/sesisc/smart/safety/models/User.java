package br.org.sesisc.smart.safety.models;


import org.mindrot.jbcrypt.BCrypt;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class User {

    /**
     * Properties
     */

    private Long id;

    @NotNull(message="Email é um campo obrigatório.")
    @Pattern(message="Email não está no formato correto.",
            regexp="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    private String email;

    @NotNull(message="Senha é um campo obrigatório.")
    private String password;

    private boolean active;
    private String token;
    private String recoverPassToken;

    /**
     * Getters & Setters
     */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getRecoverPassToken() {
        return recoverPassToken;
    }

    public void setRecoverPassToken(String recoverPassToken) {
        this.recoverPassToken = recoverPassToken;
    }

    /**
     * Actions
     */

    public void digestPassword(String password) {
        final String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        this.password = hashedPassword;
    }

    public boolean authenticate(final String password) {
        return BCrypt.checkpw(password, this.password) && this.active;
    }

}
