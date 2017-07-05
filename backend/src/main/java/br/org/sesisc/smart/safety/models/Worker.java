package br.org.sesisc.smart.safety.models;


import javax.persistence.*;

import static br.org.sesisc.smart.safety.helpers.FileHelper.JPEG_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.PDF_TYPE;
import static br.org.sesisc.smart.safety.helpers.FileHelper.PNG_TYPE;

@Entity
@Table(name = "workers")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    private String name;
    private String cep;
    private String adress;
    private Boolean status;
    private String birthDate;
    private String gender;
    private String cpf;
    private String nit;
    private String ctps;
    private String admissionAt;
    private String contractType;
    private String specialNeeds;
    private String photoUrl;
    private String photoFilename;
    private Boolean isCipeiro;
    private Boolean isBrigade;
    private String role;
    private String mandateBegin;
    private String mandateEnd;
    private String alergies;
    private String diseases;


    @ManyToOne
    @JoinColumn(name = "cbo_id")
    private Cbo cbo;

    @ManyToOne
    @JoinColumn(name = "degree_id")
    private Degree degree;
    private Boolean activated = true;

    public Worker() { }

    public Worker(String name, String cep, String adress, Boolean status, String birthDate, String gender, String cpf, String nit, String ctps, String admissionAt, String contractType, String specialNeeds, String photoUrl, String photoFilename, Boolean isCipeiro, Boolean isBrigade, String role, String mandateBegin, String mandateEnd, String alergies, String diseases, Boolean activated, Cbo cbo, Degree degree) {
        this.name = name;
        this.cep = cep;
        this.adress = adress;
        this.status = status;
        this.birthDate = birthDate;
        this.gender = gender;
        this.cpf = cpf;
        this.nit = nit;
        this.ctps = ctps;
        this.admissionAt = admissionAt;
        this.contractType = contractType;
        this.specialNeeds = specialNeeds;
        this.photoUrl = photoUrl;
        this.photoFilename = photoFilename;
        this.isCipeiro = isCipeiro;
        this.isBrigade = isBrigade;
        this.role = role;
        this.mandateBegin = mandateBegin;
        this.mandateEnd = mandateEnd;
        this.alergies = alergies;
        this.diseases = diseases;
        this.activated = activated;
        this.cbo = cbo;
        this.degree = degree;
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

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
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

    public String getSpecialNeeds() {
        return specialNeeds;
    }

    public void setSpecialNeeds(String specialNeeds) {
        this.specialNeeds = specialNeeds;
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

    public Boolean getCipeiro() {
        return isCipeiro;
    }

    public void setCipeiro(Boolean cipeiro) {
        isCipeiro = cipeiro;
    }

    public Boolean getBrigade() {
        return isBrigade;
    }

    public void setBrigade(Boolean brigade) {
        isBrigade = brigade;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    public String getAlergies() {
        return alergies;
    }

    public void setAlergies(String alergies) {
        this.alergies = alergies;
    }

    public String getDiseases() {
        return diseases;
    }

    public void setDiseases(String diseases) {
        this.diseases = diseases;
    }

    public Boolean getActivated() {
        return activated;
    }

    public void setActivated(Boolean activated) {
        this.activated = activated;
    }

    public Cbo getCbo() {
        return cbo;
    }

    public void setCbo(Cbo cbo) {
        this.cbo = cbo;
    }

    public Degree getDegree() {
        return degree;
    }

    public void setDegree(Degree degree) {
        this.degree = degree;
    }
}


