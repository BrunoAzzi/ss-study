package br.sc.org.sesi.smart.model;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Anotacao implements Serializable {

	private static final long serialVersionUID = -6743091093276336504L;
	
	//WEB
	private Long id;
	private Long idUsuario;
	private String anotacaoTitle;
	private String anotacao;
	private Date data;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getAnotacaoTitle() {
		return anotacaoTitle;
	}
	public void setAnotacaoTitle(String anotacaoTitle) {
		this.anotacaoTitle = anotacaoTitle;
	}
	public String getAnotacao() {
		return anotacao;
	}
	public void setAnotacao(String anotacao) {
		this.anotacao = anotacao;
	}
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	
	
	
	

}