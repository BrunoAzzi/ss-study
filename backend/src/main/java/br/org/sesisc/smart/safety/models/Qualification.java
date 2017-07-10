package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "qualifications")
public class Qualification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private boolean recycling;
    private String realizationDate;
    private int periodicity;
    private boolean able;
    private String attachmentUrl;
    private String attachmentFileName;

    @ManyToOne
    @JoinColumn(name = "quality_id")
    private Quality quality;

    public Qualification() { }

    public Qualification(String realizationDate, int periodicity, boolean able, boolean recycling, String attachmentUrl, String attachmentFileName, Quality quality) {
        this.realizationDate = realizationDate;
        this.periodicity = periodicity;
        this.able = able;
        this.recycling = recycling;
        this.attachmentUrl = attachmentUrl;
        this.attachmentFileName = attachmentFileName;
        this.quality = quality;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRealizationDate() {
        return realizationDate;
    }

    public void setRealizationDate(String realizationDate) {
        this.realizationDate = realizationDate;
    }

    public int getPeriodicity() {
        return periodicity;
    }

    public void setPeriodicity(int periodicity) {
        this.periodicity = periodicity;
    }

    public boolean isAble() {
        return able;
    }

    public void setAble(boolean able) {
        this.able = able;
    }

    public boolean isRecycling() {
        return recycling;
    }

    public void setRecycling(boolean recycling) {
        this.recycling = recycling;
    }

    public String getAttachmentUrl() {
        return attachmentUrl;
    }

    public void setAttachmentUrl(String attachmentUrl) {
        this.attachmentUrl = attachmentUrl;
    }

    public String getAttachmentFileName() {
        return attachmentFileName;
    }

    public void setAttachmentFileName(String attachmentFileName) {
        this.attachmentFileName = attachmentFileName;
    }

    public Quality getQuality() {
        return quality;
    }

    public void setQuality(Quality quality) {
        this.quality = quality;
    }
}
