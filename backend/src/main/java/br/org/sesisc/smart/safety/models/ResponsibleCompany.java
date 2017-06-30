package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "responsible_companies")
public class ResponsibleCompany {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String role;

    private String nit;

    private String phone;

    private String fax;

    private String email;

    ResponsibleCompany() { }

    ResponsibleCompany(String name, String role, String nit, String phone, String fax, String email) {
        this.name = name;
        this.role = role;
        this.nit = nit;
        this.phone = phone;
        this.fax = fax;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
