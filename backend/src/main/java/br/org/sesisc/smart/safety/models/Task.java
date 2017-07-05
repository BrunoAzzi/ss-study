package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinColumn(name = "responsible_id")
    private User responsible;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;

    private Date deadline;

    private String title;

    private String description;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private Set<AttachmentFile> attachmentFiles = new HashSet<AttachmentFile>();

    public Task() {}

    public Task(Date deadline, String title, String description) {
        this.deadline = deadline;
        this.title = title;
        this.description = description;
    }

    public User getResponsible() {
        return responsible;
    }

    public void setResponsible(User responsible) {
        this.responsible = responsible;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<AttachmentFile> getAttachmentFiles() {
        return attachmentFiles;
    }

    public void setAttachmentFiles(Set<AttachmentFile> attachmentFiles) {
        this.attachmentFiles = attachmentFiles;
    }
}
