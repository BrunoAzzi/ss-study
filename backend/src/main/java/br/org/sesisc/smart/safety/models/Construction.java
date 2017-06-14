package br.org.sesisc.smart.safety.models;

import javax.validation.constraints.NotNull;

public class Construction {

    private Long id;

    @NotNull(message="Nome é um campo obrigatório.")
    private String name;

    private Long cityId; //TODO : Create object

    private String cep;

    private String address;

    private String status;

    private String description;

    private String highlightUrl;

    private String logoUrl;

    private String ceiUrl;

    private String ceiCode;

    public Construction() {

    }

    public Construction(String name, Long cityId, String cep, String address, String status, String description,
    String highlightUrl, String logoUrl, String ceiUrl, String ceiCode) {
        this.name = name;
        this.cityId = cityId;
        this.cep = cep;
        this.address = address;
        this.status = status;
        this.description = description;
        this.highlightUrl = highlightUrl;
        this.logoUrl = logoUrl;
        this.ceiUrl = ceiUrl;
        this.ceiCode = ceiCode;
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

    public Long getCityId() {
        return cityId;
    }

    public void setCityId(Long cityId) {
        this.cityId = cityId;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHighlightUrl() {
        return highlightUrl;
    }

    public void setHighlightUrl(String highlightUrl) {
        this.highlightUrl = highlightUrl;
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
}
