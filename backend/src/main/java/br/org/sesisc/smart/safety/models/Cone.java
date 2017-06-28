package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Entity
@Table(name = "cones")
public class Cone {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull(message = "Titulo é um campo obrigatório")
    private String title;

    @NotNull(message = "Identificação é um campo obrigatório")
    private String identification;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "risk_id")
    private Set<Risk> risks;

    public Cone() { }

    public Cone(String title, String identification) {
        this.title = title;
        this.identification = identification;
    }

    public Cone(String title, String identification, Set<Risk> risks) {
        this.title = title;
        this.identification = identification;
        this.risks = risks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public Set<Risk> getRisks() {
        return risks;
    }

    public void setRisks(Set<Risk> risks) {
        this.risks = risks;
    }
}
