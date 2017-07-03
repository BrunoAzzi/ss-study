package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "qualities")
public class Quality {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String realizationDate;
    private Integer expiresIn;
    private Boolean able;
    private String attachment;

    @ManyToOne
    @JoinColumn(name = "worker_id")
    private Worker worker;

    public Quality() {
    }

    public Quality(Long id, String title, String realizationDate, Integer expiresIn, Boolean able, String attachment, Worker worker) {
        this.id = id;
        this.title = title;
        this.realizationDate = realizationDate;
        this.expiresIn = expiresIn;
        this.able = able;
        this.attachment = attachment;
        this.worker = worker;
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

    public String getRealizationDate() {
        return realizationDate;
    }

    public void setRealizationDate(String realizationDate) {
        this.realizationDate = realizationDate;
    }

    public Integer getExpiresIn() {
        return expiresIn;
    }

    public void setExpiresIn(Integer expiresIn) {
        this.expiresIn = expiresIn;
    }

    public Boolean getAble() {
        return able;
    }

    public void setAble(Boolean able) {
        this.able = able;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }
}
