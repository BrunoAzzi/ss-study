package br.org.sesisc.smart.auth.models;

import org.mindrot.jbcrypt.BCrypt;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Email é um campo obrigatório.")
    @Pattern(message = "Email não está no formato correto.",
            regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    private String email;

    @NotNull(message = "Senha é um campo obrigatório.")
    private String password;
    private String token;
    private String recoverPassToken;
    private boolean active = true;

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
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
