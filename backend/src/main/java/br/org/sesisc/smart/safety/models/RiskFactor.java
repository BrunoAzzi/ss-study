package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "risks")
public class RiskFactor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Nome é um campo obrigatório")
    private String name;

    public RiskFactor() { }

    public RiskFactor(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
