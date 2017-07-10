package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "asos")
public class Aso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String asoType;
    private String realizationDate;
    private Boolean able;
    private String nextDate;
    private String attachmentUrl;
    private String attachmentFilename;

    public Aso() {
    }

    public Aso(String asoType, String realizationDate, Boolean able, String nextDate, String attachmentUrl, String attachmentFilename) {
        this.asoType = asoType;
        this.realizationDate = realizationDate;
        this.able = able;
        this.nextDate = nextDate;
        this.attachmentUrl = attachmentUrl;
        this.attachmentFilename = attachmentFilename;
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

    public String getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }

    public String getattachmentFilename() {
        return attachmentFilename;
    }

    public void setattachmentFilename(String attachmentFilename) {
        this.attachmentFilename = attachmentFilename;
    }
}
