package br.org.sesisc.smart.safety.models;


import br.org.sesisc.smart.safety.models.enums.ResponsibleType;

import javax.validation.constraints.NotNull;

public class Responsible {

    private long id;

    @NotNull(message="Responsável desconhecido.")
    private ResponsibleType responsibleType;

    private String name;

    private String email;

    private String phone;

    public Responsible(String responsibleType, String name, String email, String phone) {
        this.responsibleType = ResponsibleType.fromText(responsibleType);
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ResponsibleType getResponsibleType() {
        return responsibleType;
    }

    public void setResponsibleType(ResponsibleType responsibleType) {
        this.responsibleType = responsibleType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
