package br.org.sesisc.smart.safety.models;

import javax.persistence.*;

@Entity
@Table(name = "workers")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String cep;
    private String adress;
    private String status;
    private String birth_date;
    private String gender;
    private Integer cbo_id;
    private String cpf;
    private String nit;
    private String degree;
    private String ctps;
    private String admission_date;
    private String contract_type;
    private String special_needs;
    private String photo_url;
    private Boolean is_cipeiro;
    private Boolean is_brigade;
    private String role;
    private String mandate_begin_date;
    private String mandate_end_date;

    public Worker() {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(String birth_date) {
        this.birth_date = birth_date;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getCbo_id() {
        return cbo_id;
    }

    public void setCbo_id(Integer cbo_id) {
        this.cbo_id = cbo_id;
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

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getCtps() {
        return ctps;
    }

    public void setCtps(String ctps) {
        this.ctps = ctps;
    }

    public String getAdmission_date() {
        return admission_date;
    }

    public void setAdmission_date(String admission_date) {
        this.admission_date = admission_date;
    }

    public String getContract_type() {
        return contract_type;
    }

    public void setContract_type(String contract_type) {
        this.contract_type = contract_type;
    }

    public String getSpecial_needs() {
        return special_needs;
    }

    public void setSpecial_needs(String special_needs) {
        this.special_needs = special_needs;
    }

    public String getPhoto_url() {
        return photo_url;
    }

    public void setPhoto_url(String photo_url) {
        this.photo_url = photo_url;
    }

    public Boolean getIs_cipeiro() {
        return is_cipeiro;
    }

    public void setIs_cipeiro(Boolean is_cipeiro) {
        this.is_cipeiro = is_cipeiro;
    }

    public Boolean getIs_brigade() {
        return is_brigade;
    }

    public void setIs_brigade(Boolean is_brigade) {
        this.is_brigade = is_brigade;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getMandate_begin_date() {
        return mandate_begin_date;
    }

    public void setMandate_begin_date(String mandate_begin_date) {
        this.mandate_begin_date = mandate_begin_date;
    }

    public String getMandate_end_date() {
        return mandate_end_date;
    }

    public void setMandate_end_date(String mandate_end_date) {
        this.mandate_end_date = mandate_end_date;
    }
}
