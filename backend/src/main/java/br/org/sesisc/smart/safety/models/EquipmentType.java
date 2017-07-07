package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "equipment_types")
public class EquipmentType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message="Nome é um campo obrigatório.")
    private String name;

    @Column(name="equipment_category_id", updatable=false, insertable=false)
    private long equipmentCategoryId;

    public EquipmentType() { }

    public EquipmentType(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getEquipmentCategoryId() {
        return equipmentCategoryId;
    }

    public void setEquipmentCategoryId(long equipmentCategoryId) {
        this.equipmentCategoryId = equipmentCategoryId;
    }
}
