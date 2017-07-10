package br.org.sesisc.smart.safety.models;

import br.org.sesisc.smart.safety.models.enums.ConstructionStatus;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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
    private String addressStreet;
    private Integer addressNumber;
    private String addressComplement;

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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "responsible_engineer_id")
    private ResponsibleEngineer responsibleEngineer;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "responsible_safety_id")
    private ResponsibleSafety responsibleSafety;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "construction_id")
    @OrderBy("equipment_category_id, equipment_type_id")
    private Set<Equipment> equipments = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "construction_id")
    private Set<Employee> employees = new HashSet<>();

    private boolean activated = true;

    public Construction() { }

    public Construction(String name, String cep, String addressStreet, Integer addressNumber, String addressComplement, ConstructionStatus status, String description, String ceiCode) {
        this.name = name;
        this.cep = cep;
        this.addressStreet = addressStreet;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
        this.status = status;
        this.description = description;
        this.ceiCode = ceiCode;
    }

    public Construction(String name, String cep, String addressStreet, Integer addressNumber, String addressComplement, int status, String description, String ceiCode) {
        this.name = name;
        this.cep = cep;
        this.addressStreet = addressStreet;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
        this.status = ConstructionStatus.fromInt(status);
        this.description = description;
        this.ceiCode = ceiCode;
    }

    public Construction(ResponsibleEngineer responsibleEngineer, ResponsibleSafety responsibleSafety) {
        this.responsibleEngineer = responsibleEngineer;
        this.responsibleSafety = responsibleSafety;
    }

    public Construction(String name, String cep, String addressStreet, Integer addressNumber, String addressComplement, ConstructionStatus status, String description, String logoUrl, String logoFileName, String ceiCode, String ceiUrl, String ceiFileName, Set<Sector> sectors, ResponsibleEngineer responsibleEngineer, ResponsibleSafety responsibleSafety) {
        this.name = name;
        this.cep = cep;
        this.addressStreet = addressStreet;
        this.addressNumber = addressNumber;
        this.addressComplement = addressComplement;
        this.status = status;
        this.description = description;
        this.logoUrl = logoUrl;
        this.logoFileName = logoFileName;
        this.ceiCode = ceiCode;
        this.ceiUrl = ceiUrl;
        this.ceiFileName = ceiFileName;
        this.sectors = sectors;
        this.responsibleEngineer = responsibleEngineer;
        this.responsibleSafety = responsibleSafety;
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

    public String getAddressStreet() {
        return addressStreet;
    }

    public void setAddressStreet(String addressStreet) {
        this.addressStreet = addressStreet;
    }

    public Integer getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(Integer addressNumber) {
        this.addressNumber = addressNumber;
    }

    public String getAddressComplement() {
        return addressComplement;
    }

    public void setAddressComplement(String addressComplement) {
        this.addressComplement = addressComplement;
    }

    public int getStatus() {
        return status.getValue();
    }

    public void setStatus(int status) {
        this.status = ConstructionStatus.fromInt(status);
    }

    public void setStatus(ConstructionStatus status) {
        this.status = status;
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

    public String getLogoFileName() {
        return logoFileName;
    }

    public void setLogoFileName(String logoFileName) {
        this.logoFileName = logoFileName;
    }

    public String getCeiCode() {
        return ceiCode;
    }

    public void setCeiCode(String ceiCode) {
        this.ceiCode = ceiCode;
    }

    public String getCeiUrl() {
        return ceiUrl;
    }

    public void setCeiUrl(String ceiUrl) {
        this.ceiUrl = ceiUrl;
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

    public void addSector(Sector sector) {
        this.sectors.add(sector);
    }

    public ResponsibleEngineer getResponsibleEngineer() {
        return responsibleEngineer;
    }

    public void setResponsibleEngineer(ResponsibleEngineer responsibleEngineer) {
        this.responsibleEngineer = responsibleEngineer;
    }

    public ResponsibleSafety getResponsibleSafety() {
        return responsibleSafety;
    }

    public void setResponsibleSafety(ResponsibleSafety responsibleSafety) {
        this.responsibleSafety = responsibleSafety;
    }

    public Set<Equipment> getEquipments() {
        return equipments;
    }

    public void setEquipments(Set<Equipment> equipments) {
        this.equipments = equipments;
    }

    public void addEquipment(Equipment equipment) {
        this.equipments.add(equipment);
    }

    public List<Long> getWorkerIds() {
        return this.employees.stream().map(Employee::getWorkerId).collect(Collectors.toList());
    }

    public void setWorkerIds(List<Long> workerIds) {
        this.employees = new HashSet<>();
        for (long workerId : workerIds) {
            this.employees.add(new Employee(this.id, workerId));
        }
    }

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

}
