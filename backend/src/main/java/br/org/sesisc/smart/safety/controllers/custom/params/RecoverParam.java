package br.org.sesisc.smart.safety.controllers.custom.params;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

/**
 * Created by fpileggi on 5/26/17.
 */
public class RecoverParam {
    @NotNull(message="Email é um campo obrigatório.")
    @Pattern(message="Email não está no formato correto.",
            regexp="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$")
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
