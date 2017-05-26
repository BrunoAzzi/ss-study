package br.org.sesisc.smart.safety.models;

import javax.validation.constraints.NotNull;

public class Company {

    private Long id;

    @NotNull(message="Nome é um campo obrigatório.")
    private String name;

    public Company(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
