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

    @NotNull(message = "Nome é um campo obrigatório")
    private String name;
    private String cep;
    private String address;

    @Column(name = "degree_id")
    private Long degreeId;
    private String birthDate;
    private String gender;

    @NotNull(message = "CPF é um campo obrigatório")
    private String cpf;

    private String nit;
    private String ctps;
    private String admissionAt;
    private String contractType;
    private String role;
    private String photoUrl;
    private String photoFilename;
    private boolean cipeiro;
    private boolean brigade;
    private boolean specialNeeds;
    private boolean status;
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

    @ManyToOne
    @JoinColumn(name = "cbo_id")
    @NotNull(message = "É necessário selecionar um CBO")
    private Cbo cbo;

    private boolean activated = true;

    public Worker() { }

    public Worker(String name, String cep, String address, Long degreeId, String birthDate, String gender, String cpf, String nit, String ctps, String admissionAt, String contractType, String role, String photoUrl, String photoFilename, boolean cipeiro, boolean brigade, boolean specialNeeds, boolean status, String mandateBegin, String mandateEnd, String allergies, String diseases, String bloodType, Set<Aso> asos, Set<Qualification> qualifications, Cbo cbo, boolean activated) {
        this.name = name;
        this.cep = cep;
        this.address = address;
        this.degreeId = degreeId;
        this.birthDate = birthDate;
        this.gender = gender;
        this.cpf = cpf;
        this.nit = nit;
        this.ctps = ctps;
        this.admissionAt = admissionAt;
        this.contractType = contractType;
        this.role = role;
        this.photoUrl = photoUrl;
        this.photoFilename = photoFilename;
        this.cipeiro = cipeiro;
        this.brigade = brigade;
        this.specialNeeds = specialNeeds;
        this.status = status;
        this.mandateBegin = mandateBegin;
        this.mandateEnd = mandateEnd;
        this.allergies = allergies;
        this.diseases = diseases;
        this.bloodType = bloodType;
        this.asos = asos;
        this.qualifications = qualifications;
        this.cbo = cbo;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
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

    public Cbo getCbo() {
        return cbo;
    }

    public void setCbo(Cbo cbo) {
        this.cbo = cbo;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }
}


