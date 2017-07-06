package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "asos")
public class Aso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String realizationDate;
    private String nextDate;
    private String asoType;
    private Boolean able;
    private String attachment;

    public Aso() {
    }

    public Aso(Long id, String realizationDate, String nextDate, String asoType, Boolean able, String attachment, Worker worker) {
        this.id = id;
        this.realizationDate = realizationDate;
        this.nextDate = nextDate;
        this.asoType = asoType;
        this.able = able;
        this.attachment = attachment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRealizationDate() {
        return realizationDate;
    }

    public void setRealizationDate(String realizationDate) {
        this.realizationDate = realizationDate;
    }

    public String getNextDate() {
        return nextDate;
    }

    public void setNextDate(String nextDate) {
        this.nextDate = nextDate;
    }

    public String getAsoType() {
        return asoType;
    }

    public void setAsoType(String asoType) {
        this.asoType = asoType;
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

}
