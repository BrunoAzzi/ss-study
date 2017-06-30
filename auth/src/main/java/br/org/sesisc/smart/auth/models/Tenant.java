package br.org.sesisc.smart.auth.models;

import javax.persistence.*;

@Entity
@Table(name = "tenants")
public class Tenant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String frontendHost;
    private String servicesHost;
    private boolean active = true;

    public Tenant() { }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFrontendHost() {
        return frontendHost;
    }

    public void setFrontendHost(String frontendHost) {
        this.frontendHost = frontendHost;
    }

    public String getServicesHost() {
        return servicesHost;
    }

    public void setServicesHost(String servicesHost) {
        this.servicesHost = servicesHost;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
