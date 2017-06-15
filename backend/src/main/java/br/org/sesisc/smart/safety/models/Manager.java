package br.org.sesisc.smart.safety.models;

import br.org.sesisc.smart.safety.common.ManagerType;

import javax.validation.constraints.NotNull;

import static br.org.sesisc.smart.safety.common.ManagerType.CIVIL_ENGINEER;
import static br.org.sesisc.smart.safety.common.ManagerType.WORK_SAFETY;

public class Manager {

    private long id;

    @NotNull(message="Responsável desconhecido.")
    private ManagerType managerType;

    private String email;

    private String phone;

    public Manager(ManagerType managerType, String email, String phone) {
        this.managerType = managerType;
        this.email = email;
        this.phone = phone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public ManagerType getManagerType() {
        return managerType;
    }

    public void setManagerType(String managerTypeText) {
        if("civil_engineer".equals(managerTypeText)) {
            this.managerType = CIVIL_ENGINEER;
        } else if ("work_safety".equals(managerTypeText)) {
            this.managerType = WORK_SAFETY;
        }
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
}
