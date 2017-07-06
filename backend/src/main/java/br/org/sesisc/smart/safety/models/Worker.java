package br.org.sesisc.smart.safety.models;


import javax.persistence.*;

@Entity
@Table(name = "workers")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    private String cep;
    private String address;
    private boolean status;
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
    private boolean isCipeiro;
    private boolean isBrigade;
    private String role;
    private String mandateBegin;
    private String mandateEnd;
    private String allergies;
    private String diseases;
    private String bloodType;

    @ManyToOne
    @JoinColumn(name = "cbo_id")
    private Cbo cbo;

    @ManyToOne
    @JoinColumn(name = "degree_id")
    private Degree degree;

    private boolean activated = true;

    public Worker() { }

    public Worker(String name, String cep, String address, boolean status, String birthDate, String gender, String cpf, String nit, String ctps, String admissionAt, String contractType, String specialNeeds, String photoUrl, String photoFilename, boolean isCipeiro, boolean isBrigade, String role, String mandateBegin, String mandateEnd, String allergies, String diseases, String bloodType, Cbo cbo, Degree degree, boolean activated) {
        this.name = name;
        this.cep = cep;
        this.address = address;
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
        this.allergies = allergies;
        this.diseases = diseases;
        this.bloodType = bloodType;
        this.cbo = cbo;
        this.degree = degree;
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

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
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

    public boolean isCipeiro() {
        return isCipeiro;
    }

    public void setCipeiro(boolean cipeiro) {
        isCipeiro = cipeiro;
    }

    public boolean isBrigade() {
        return isBrigade;
    }

    public void setBrigade(boolean brigade) {
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

    public Degree getDegree() {
        return degree;
    }

    public void setDegree(Degree degree) {
        this.degree = degree;
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }
}


