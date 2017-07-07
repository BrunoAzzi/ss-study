package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "cbos")
public class Cbo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String code;
    private String title;

    public Cbo() { }

    public Cbo(String code, String title) {
        this.code = code;
        this.title = title;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
