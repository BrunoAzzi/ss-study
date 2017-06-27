package br.org.sesisc.smart.safety.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "risks")
public class Risk {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotNull(message = "Nivel é um campo obrigatório")
    private int level;

    @NotNull(message = "Tipo é um campo obrigatório")
    private int type;

    @NotNull(message = "Fator de risco é um campo obrigatório")
    @ManyToOne
    @JoinColumn(name = "risk_factor_id")
    private RiskFactor riskFactor;

    public Risk() { }

    public Risk(int level, int type, RiskFactor riskFactor) {
        this.level = level;
        this.type = type;
        this.riskFactor = riskFactor;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public RiskFactor getRiskFactor() {
        return riskFactor;
    }

    public void setRiskFactor(RiskFactor riskFactor) {
        this.riskFactor = riskFactor;
    }
}
