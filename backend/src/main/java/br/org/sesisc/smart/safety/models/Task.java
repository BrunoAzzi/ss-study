package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    @NotNull(message = "Responsável é um campo obrigatório")
    private User responsible;

    @ManyToOne
    @JoinColumn(name = "author_id")
    @NotNull(message = "Autor é um campo obrigatório")
    private User author;

    @NotNull(message = "Prazo é um campo obrigatório")
    private String deadline;

    @NotNull(message = "Titulo é um campo obrigatório")
    private String title;

    @NotNull(message = "Descrição é um campo obrigatório")
    private String description;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "task_id")
    private Set<AttachmentFile> attachmentFiles = new HashSet<>();

    private Boolean checked;

    public Task() {}

    public Task(User author, User responsible, String deadline, String title, String description) {
        this.author = author;
        this.responsible = responsible;
        this.deadline = deadline;
        this.title = title;
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline + " 23:59:59";
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

    public Boolean isChecked() {
        return checked == null ? false : checked;
    }

    public void setChecked(Boolean checked) {
        this.checked = checked;
    }
}
