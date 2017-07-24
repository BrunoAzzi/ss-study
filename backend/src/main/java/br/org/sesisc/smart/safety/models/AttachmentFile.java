package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "attachment_files")
public class AttachmentFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fileName;

    private String url;

    private String fileThumbName;

    private String thumbUrl;

    private String type;

    public AttachmentFile() { }

    public AttachmentFile(String fileName, String url, String type) {
        this.fileName = fileName;
        this.url = url;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFileThumbName() {
        return fileThumbName;
    }

    public void setFileThumbName(String fileThumbName) {
        this.fileThumbName = fileThumbName;
    }

    public String getThumbUrl() {
        return thumbUrl;
    }

    public void setThumbUrl(String thumbUrl) {
        this.thumbUrl = thumbUrl;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
