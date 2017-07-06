package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "certifications")
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String nextRecycleDate;
    private int periodicity;
    private boolean able;
    private String attachmentUrl;
    private String attachmentFileName;

    @ManyToOne
    @JoinColumn(name = "worker_id")
    private Worker worker;

    @ManyToOne
    @JoinColumn(name = "certificate_id")
    private Certificate certificate;

    public Certification() { }

    public Certification(String nextRecycleDate, int periodicity, boolean able, String attachmentUrl, String attachmentFileName, Worker worker, Certificate certificate) {
        this.nextRecycleDate = nextRecycleDate;
        this.periodicity = periodicity;
        this.able = able;
        this.attachmentUrl = attachmentUrl;
        this.attachmentFileName = attachmentFileName;
        this.worker = worker;
        this.certificate = certificate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNextRecycleDate() {
        return nextRecycleDate;
    }

    public void setNextRecycleDate(String nextRecycleDate) {
        this.nextRecycleDate = nextRecycleDate;
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

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public Certificate getCertificate() {
        return certificate;
    }

    public void setCertificate(Certificate certificate) {
        this.certificate = certificate;
    }
}
