package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "qualities")
public class Quality {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    public Quality() { }

    public Quality(String name) {
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