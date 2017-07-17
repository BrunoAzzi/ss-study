package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "workers")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String photoUrl;
    private String photoFilename;
    private String contractType;
    private String company;
    private String gender;

    @NotNull(message = "CPF é um campo obrigatório")
    private String cpf;
    @NotNull(message = "Nome é um campo obrigatório")
    private String name;
    private String nit;
    private String ctps;
    private String birthDate;
    @Column(name = "degree_id")
    private Long degreeId;
    private String complement;
    private String contact;
    private String cep;
    private String address;
    private String functionDescription;
    private boolean specialNeeds;
    private String admissionAt;
    private boolean status;


    private boolean cipeiro;
    private String laborCipa;
    private boolean brigade;
    private String mandateBegin;
    private String mandateEnd;

    private String allergies;
    private String diseases;
    private String bloodType;


    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "worker_id")
    private Set<Aso> asos = new HashSet<Aso>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "worker_id")
    private Set<Qualification> qualifications = new HashSet<Qualification>();

    @Column(name = "cbo_code")
    private String cboCode;

    @Column(name = "cbo_id")
    private Long cboId;

    private boolean activated = true;

    public Worker() { }

    public Worker(String photoUrl, String photoFilename, String contractType, String company, String gender, String cpf, String name,
                  String nit, String ctps, String birthDate, Long degreeId, String complement,String contact, String cep,
                  String address, String functionDescription, boolean specialNeeds, String admissionAt, boolean status, boolean cipeiro,
                  String laborCipa, boolean brigade, String mandateBegin, String mandateEnd, String allergies, String diseases,
                  String bloodType, Set<Aso> asos, Set<Qualification> qualifications, Long cboId, boolean activated) {
        this.cboId = cboId;
        this.photoUrl = photoUrl;
        this.photoFilename = photoFilename;
        this.contractType = contractType;
        this.company = company;
        this.gender = gender;
        this.cpf = cpf;
        this.name = name;
        this.nit = nit;
        this.ctps = ctps;
        this.birthDate = birthDate;
        this.degreeId = degreeId;
        this.complement = complement;
        this.contact = contact;
        this.cep = cep;
        this.address = address;
        this.functionDescription = functionDescription;
        this.specialNeeds = specialNeeds;
        this.admissionAt = admissionAt;
        this.status = status;
        this.cipeiro = cipeiro;
        this.laborCipa = laborCipa;
        this.brigade = brigade;
        this.mandateBegin = mandateBegin;
        this.mandateEnd = mandateEnd;
        this.allergies = allergies;
        this.diseases = diseases;
        this.bloodType = bloodType;
        this.asos = asos;
        this.qualifications = qualifications;
        this.activated = activated;
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

    public Long getDegreeId() {
        return this.degreeId;
    }

    public void setDegreeId(Long degreeId) {
        this.degreeId = degreeId;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getCtps() {
        return ctps;
    }

    public void setCtps(String ctps) {
        this.ctps = ctps;
    }

    public String getAdmissionAt() {
        return admissionAt;
    }

    public void setAdmissionAt(String admissionAt) {
        this.admissionAt = admissionAt;
    }

    public String getContractType() {
        return contractType;
    }

    public void setContractType(String contractType) {
        this.contractType = contractType;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }


    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getFunctionDescription() {
        return functionDescription;
    }

    public void setFunctionDescription(String functionDescription) {
        this.functionDescription = functionDescription;
    }

    public String getLaborCipa() {
        return laborCipa;
    }

    public void setLaborCipa(String laborCipa) {
        this.laborCipa = laborCipa;
    }

    public Set<Aso> getAsos() {
        return asos;
    }

    public void setAsos(Set<Aso> asos) {
        this.asos = asos;
    }

    public Set<Qualification> getQualifications() {
        return qualifications;
    }

    public void setQualifications(Set<Qualification> qualifications) {
        this.qualifications = qualifications;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public void setPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
    }

    public String getPhotoFilename() {
        return photoFilename;
    }

    public void setPhotoFilename(String photoFilename) {
        this.photoFilename = photoFilename;
    }

    public boolean isCipeiro() {
        return cipeiro;
    }

    public void setCipeiro(boolean cipeiro) {
        this.cipeiro = cipeiro;
    }

    public boolean isBrigade() {
        return brigade;
    }

    public void setBrigade(boolean brigade) {
        this.brigade = brigade;
    }

    public boolean isSpecialNeeds() {
        return specialNeeds;
    }

    public void setSpecialNeeds(boolean specialNeeds) {
        this.specialNeeds = specialNeeds;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMandateBegin() {
        return mandateBegin;
    }

    public void setMandateBegin(String mandateBegin) {
        this.mandateBegin = mandateBegin;
    }

    public String getMandateEnd() {
        return mandateEnd;
    }


    public void setMandateEnd(String mandateEnd) {
        this.mandateEnd = mandateEnd;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public String getDiseases() {
        return diseases;
    }

    public void setDiseases(String diseases) {
        this.diseases = diseases;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getCboCode() {    return cboCode; }

    public void setCboCode(String cboCode) {    this.cboCode = cboCode; }

    public Long getCboId() {   return cboId;  }

    public void setCboId(Long cboId) {    this.cboId = cboId;  }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }
}


