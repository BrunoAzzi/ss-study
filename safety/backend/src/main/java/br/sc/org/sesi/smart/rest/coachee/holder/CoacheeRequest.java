package br.sc.org.sesi.smart.rest.coachee.holder;

import java.io.Serializable;

import br.sc.org.sesi.smart.model.Dica;

public class CoacheeRequest implements Serializable{
	
//	O QUE O SERVIDOR ESPERA RECEBER COMO PARÂMETRO
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String nomeCoachee;
	private String empresaCoachee;
	private String funcaoCoachee;
	private String localidadeCoachee;
	private Float pesoCoachee;
	private Float alturaCoachee;
	private Float cinturaCoachee;
	private Long imcCoachee;
	private String perfilCoachee;
	private Integer focoAlimentacao;
	private Integer focoExercicio;
	private Integer focoEstresse;
	private Integer focoPrevencao;
	private Integer focoRelacionamento;
	
	private Integer minSessao;
	private Integer maxSessao;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomeCoachee() {
		return nomeCoachee;
	}
	public void setNomeCoachee(String nomeCoachee) {
		this.nomeCoachee = nomeCoachee;
	}
	public String getEmpresaCoachee() {
		return empresaCoachee;
	}
	public void setEmpresaCoachee(String empresaCoachee) {
		this.empresaCoachee = empresaCoachee;
	}
	public String getFuncaoCoachee() {
		return funcaoCoachee;
	}
	public void setFuncaoCoachee(String funcaoCoachee) {
		this.funcaoCoachee = funcaoCoachee;
	}
	public String getLocalidadeCoachee() {
		return localidadeCoachee;
	}
	public void setLocalidadeCoachee(String localidadeCoachee) {
		this.localidadeCoachee = localidadeCoachee;
	}
	public Float getPesoCoachee() {
		return pesoCoachee;
	}
	public void setPesoCoachee(Float pesoCoachee) {
		this.pesoCoachee = pesoCoachee;
	}
	public Float getAlturaCoachee() {
		return alturaCoachee;
	}
	public void setAlturaCoachee(Float alturaCoachee) {
		this.alturaCoachee = alturaCoachee;
	}
	public Float getCinturaCoachee() {
		return cinturaCoachee;
	}
	public void setCinturaCoachee(Float cinturaCoachee) {
		this.cinturaCoachee = cinturaCoachee;
	}
	public Long getImcCoachee() {
		return imcCoachee;
	}
	public void setImcCoachee(Long imcCoachee) {
		this.imcCoachee = imcCoachee;
	}
	public String getPerfilCoachee() {
		return perfilCoachee;
	}
	public void setPerfilCoachee(String perfilCoachee) {
		this.perfilCoachee = perfilCoachee;
	}
	public Integer getFocoAlimentacao() {
		return focoAlimentacao;
	}
	public void setFocoAlimentacao(Integer focoAlimentacao) {
		this.focoAlimentacao = focoAlimentacao;
	}
	public Integer getFocoExercicio() {
		return focoExercicio;
	}
	public void setFocoExercicio(Integer focoExercicio) {
		this.focoExercicio = focoExercicio;
	}
	public Integer getFocoEstresse() {
		return focoEstresse;
	}
	public void setFocoEstresse(Integer focoEstresse) {
		this.focoEstresse = focoEstresse;
	}
	public Integer getFocoPrevencao() {
		return focoPrevencao;
	}
	public void setFocoPrevencao(Integer focoPrevencao) {
		this.focoPrevencao = focoPrevencao;
	}
	public Integer getFocoRelacionamento() {
		return focoRelacionamento;
	}
	public void setFocoRelacionamento(Integer focoRelacionamento) {
		this.focoRelacionamento = focoRelacionamento;
	}
	public Integer getMinSessao() {
		return minSessao;
	}
	public void setMinSessao(Integer minSessao) {
		this.minSessao = minSessao;
	}
	public Integer getMaxSessao() {
		return maxSessao;
	}
	public void setMaxSessao(Integer maxSessao) {
		this.maxSessao = maxSessao;
	}
	
	
	
}
