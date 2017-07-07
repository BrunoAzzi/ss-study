package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="construction_id")
    private long constructionId;

    @Column(name="worker_id")
    private long workerId;

    public Employee() { }

    public Employee(long constructionId, long workerId) {
        this.constructionId = constructionId;
        this.workerId = workerId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getConstructionId() {
        return constructionId;
    }

    public void setConstructionId(long constructionId) {
        this.constructionId = constructionId;
    }

    public long getWorkerId() {
        return workerId;
    }

    public void setWorkerId(long workerId) {
        this.workerId = workerId;
    }
}
