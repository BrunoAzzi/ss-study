package br.org.sesisc.smart.safety.models;


import javax.validation.constraints.NotNull;

public class Manager {

    private long id;

    @NotNull(message="Responsável desconhecido.")
    private String managerType;

    private String email;

    private String phone;

    private long constructionId;

    public Manager(String managerType, String email, String phone) {
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

    public String getManagerType() {
        return managerType;
    }

    public void setManagerType(String managerTypeText) {
        if("civil_engineer".equals(managerTypeText)) {
            this.managerType = "";
        } else if ("work_safety".equals(managerTypeText)) {
            this.managerType = "";
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

    public long getConstructionId() {
        return constructionId;
    }

    public void setConstructionId(long constructionId) {
        this.constructionId = constructionId;
    }
}
