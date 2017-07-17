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
    private String attachmentFilename;

    @Column(name = "quality_id")
    private Long qualityId;

    public Qualification() { }

    public Qualification(boolean recycling, String realizationDate, int periodicity, boolean able, String attachmentUrl, String attachmentFilename, Long qualityId) {
        this.recycling = recycling;
        this.realizationDate = realizationDate;
        this.periodicity = periodicity;
        this.able = able;
        this.attachmentUrl = attachmentUrl;
        this.attachmentFilename = attachmentFilename;
        this.qualityId = qualityId;
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

    public String getAttachmentFilename() {
        return attachmentFilename;
    }

    public void setAttachmentFilename(String attachmentFilename) {
        this.attachmentFilename = attachmentFilename;
    }

    public Long getQualityId() {
        return qualityId;
    }

    public void setQualityId(Long qualityId) {
        this.qualityId = qualityId;
    }
}
