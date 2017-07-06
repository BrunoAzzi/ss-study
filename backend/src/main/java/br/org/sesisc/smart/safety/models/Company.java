package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "companies")
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "responsible_company_id")
    private ResponsibleCompany responsibleCompany;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "responsible_sst_id")
    private ResponsibleSST responsibleSST;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_id")
    private Contact contact;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cnae_id")
    private Cnae cnae;

    private String cnpj;
    private String corporateName;
    private String fakeName;
    private String cep;
    private String addressStreet;
    private String addressComplement;
    private Integer addressNumber;
    private String urlDomain;
    private Integer employerNumber;
    private boolean hasSesmt;
    private boolean hasCipa;
    private boolean isDesignatedCipa;
    private String logoUrl;
    private String logoFileName;

    public Company() {}

    public Company(ResponsibleCompany responsibleCompany, ResponsibleSST responsibleSST, Contact contact, Cnae cnae, String cnpj, String corporateName,
                   String fakeName, String cep, int addressNumber, String addressComplement, String addressStreet, String urlDomain, boolean hasSesmt,
                   boolean hasCipa, boolean isDesignatedCipa, int employerNumber) {
        this.responsibleCompany = responsibleCompany;
        this.responsibleSST = responsibleSST;
        this.contact = contact;
        this.cnae = cnae;
        this.cnpj = cnpj;
        this.corporateName = corporateName;
        this.fakeName = fakeName;
        this.cep = cep;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
        this.addressStreet = addressStreet;
        this.urlDomain = urlDomain;
        this.hasSesmt = hasSesmt;
        this.hasCipa = hasCipa;
        this.isDesignatedCipa = isDesignatedCipa;
        this.employerNumber = employerNumber;
    }

    public Company(String cnpj, String corporateName, String fakeName, String cep, int addressNumber, String addressComplement,
                    String addressStreet, String urlDomain, boolean hasSesmt, boolean hasCipa, boolean isDesignedCipa, int employerNumber) {
        this.cnpj = cnpj;
        this.corporateName = corporateName;
        this.fakeName = fakeName;
        this.cep = cep;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
        this.addressStreet = addressStreet;
        this.urlDomain = urlDomain;
        this.hasSesmt = hasSesmt;
        this.hasCipa = hasCipa;
        this.isDesignatedCipa = isDesignedCipa;
        this.employerNumber = employerNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ResponsibleCompany getResponsibleCompany() {
        return responsibleCompany;
    }

    public void setResponsibleCompany(ResponsibleCompany responsibleCompany) {
        this.responsibleCompany = responsibleCompany;
    }

    public ResponsibleSST getResponsibleSST() {
        return responsibleSST;
    }

    public void setResponsibleSST(ResponsibleSST responsibleSST) {
        this.responsibleSST = responsibleSST;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    public Cnae getCnae() {
        return cnae;
    }

    public void setCnae(Cnae cnae) {
        this.cnae = cnae;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getCorporateName() {
        return corporateName;
    }

    public void setCorporateName(String corporateName) {
        this.corporateName = corporateName;
    }

    public String getFakeName() {
        return fakeName;
    }

    public void setFakeName(String fakeName) {
        this.fakeName = fakeName;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getAddressStreet() {
        return addressStreet;
    }

    public void setAddressStreet(String addressStreet) {
        this.addressStreet = addressStreet;
    }

    public String getAddressComplement() {
        return addressComplement;
    }

    public void setAddressComplement(String addressComplement) {
        this.addressComplement = addressComplement;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(Integer addressNumber) {
        this.addressNumber = addressNumber;
    }

    public String getUrlDomain() {
        return urlDomain;
    }

    public void setUrlDomain(String urlDomain) {
        this.urlDomain = urlDomain;
    }

    public Integer getEmployerNumber() {
        return employerNumber;
    }

    public void setEmployerNumber(Integer employerNumber) {
        this.employerNumber = employerNumber;
    }

    public boolean getHasSesmt() {
        return hasSesmt;
    }

    public void setHasSesmt(boolean hasSesmt) {
        this.hasSesmt = hasSesmt;
    }

    public boolean getHasCipa() {
        return hasCipa;
    }

    public void setHasCipa(boolean hasCipa) {
        this.hasCipa = hasCipa;
    }

    public boolean getIsDesignatedCipa() {
        return isDesignatedCipa;
    }

    public void setIsDesignatedCipa(boolean isDesignatedCipa) {
        this.isDesignatedCipa = isDesignatedCipa;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    public String getLogoFileName() {
        return logoFileName;
    }

    public void setLogoFileName(String logoFileName) {
        this.logoFileName = logoFileName;
    }
}
