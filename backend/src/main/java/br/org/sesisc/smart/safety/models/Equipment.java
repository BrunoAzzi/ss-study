package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "equipments")
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String identification;
    private boolean maintenance;
    private Date lastMaintenance;

    @Column(name="equipment_type_id")
    private long equipmentTypeId;

    @Column(name="construction_id")
    private long constructionId;

    public Equipment() { }

    public Equipment(String identification, boolean maintenance, Date lastMaintenance, long equipmentTypeId) {
        this.identification = identification;
        this.maintenance = maintenance;
        this.lastMaintenance = lastMaintenance;
        this.equipmentTypeId = equipmentTypeId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public boolean isMaintenance() {
        return maintenance;
    }

    public void setMaintenance(boolean maintenance) {
        this.maintenance = maintenance;
    }

    public Date getLastMaintenance() {
        return lastMaintenance;
    }

    public void setLastMaintenance(Date lastMaintenance) {
        this.lastMaintenance = lastMaintenance;
    }

    public long getEquipmentTypeId() {
        return equipmentTypeId;
    }

    public void setEquipmentTypeId(long equipmentTypeId) {
        this.equipmentTypeId = equipmentTypeId;
    }

    public long getConstructionId() {
        return constructionId;
    }

    public void setConstructionId(long constructionId) {
        this.constructionId = constructionId;
    }
}
