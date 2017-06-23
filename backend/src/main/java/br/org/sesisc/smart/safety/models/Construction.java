package br.org.sesisc.smart.safety.models;

import br.org.sesisc.smart.safety.models.enums.ConstructionStatus;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "constructions")
public class Construction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull(message="Nome é um campo obrigatório.")
    @Pattern(message="Nome é um campo obrigatório.", regexp = "^(?!\\s*$).+")
    private String name;
    private String cep;
    private String address;

    @NotNull(message="Status é um campo obrigatório.")
    private ConstructionStatus status;
    private String description;
    private String logoUrl;
    private String logoFileName;
    private String ceiCode;
    private String ceiUrl;
    private String ceiFileName;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "construction_id")
    private Set<Sector> sectors = new HashSet<Sector>();

    public Construction() { }

    public Construction(
            String name,
            String cep,
            String address,
            ConstructionStatus status,
            String description,
            String logoUrl,
            String ceiUrl,
            String ceiCode
    ) {
        this.name = name;
        this.cep = cep;
        this.address = address;
        this.status = status;
        this.description = description;
        this.logoUrl = logoUrl;
        this.ceiUrl = ceiUrl;
        this.ceiCode = ceiCode;
    }

    public Construction(
            String name,
            String cep,
            String address,
            int status,
            String description,
            String logoUrl,
            String ceiUrl,
            String ceiCode
    ) {
        this.name = name;
        this.cep = cep;
        this.address = address;
        this.status = ConstructionStatus.fromInt(status);
        this.description = description;
        this.logoUrl = logoUrl;
        this.ceiUrl = ceiUrl;
        this.ceiCode = ceiCode;
    }

    public Construction(Set<Sector> sectors) {
        this.sectors = sectors;
    }

    /**
     * Getters & Setters
     */
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

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public ConstructionStatus getStatus() {
        return status;
    }

    public int _getStatus() {
        return status.getValue();
    }

    public void setStatus(ConstructionStatus status) {
        this.status = status;
    }

    public void setStatus(int status) {
        this.status = ConstructionStatus.fromInt(status);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public String getCeiUrl() {
        return ceiUrl;
    }

    public void setCeiUrl(String ceiUrl) {
        this.ceiUrl = ceiUrl;
    }

    public String getCeiCode() {
        return ceiCode;
    }

    public void setCeiCode(String ceiCode) {
        this.ceiCode = ceiCode;
    }

    public String getLogoFileName() {
        return logoFileName;
    }

    public void setLogoFileName(String logoFileName) {
        this.logoFileName = logoFileName;
    }

    public String getCeiFileName() {
        return ceiFileName;
    }

    public void setCeiFileName(String ceiFileName) {
        this.ceiFileName = ceiFileName;
    }

    public Set<Sector> getSectors() {
        return sectors;
    }

    public void setSectors(Set<Sector> sectors) {
        this.sectors = sectors;
    }

    /*
     * Actions
     */
}
