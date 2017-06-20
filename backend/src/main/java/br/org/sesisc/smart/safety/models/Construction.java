package br.org.sesisc.smart.safety.models;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class Construction {

    private Long id;

    @NotNull(message="Nome é um campo obrigatório.")
    @Pattern(message="Nome é um campo obrigatório.", regexp = "^(?!\\s*$).+")
    private String name;

    private String cep;

    private String address;

    @NotNull(message="Status é um campo obrigatório.")
    @Pattern(message="Status é um campo obrigatório.", regexp = "^(?!\\s*$).+")
    private String status;

    private String description;

    private String highlightUrl;

    private String logoUrl;

    private String logoFileName;

    private String ceiCode;

    private String ceiUrl;

    private String ceiFileName;

    public Construction() {

    }

    public Construction(String name, String cep, String address, String status, String description,
    String highlightUrl, String logoUrl, String ceiUrl, String ceiCode) {
        this.name = name;
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
}
