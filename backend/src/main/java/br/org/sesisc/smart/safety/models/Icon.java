package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "icons")
public class Icon {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;

    public Icon() { }

    public Icon(String name) {
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
