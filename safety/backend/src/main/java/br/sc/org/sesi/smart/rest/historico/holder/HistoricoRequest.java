
package br.sc.org.sesi.smart.rest.historico.holder;

import java.io.Serializable;

// O QUE O SERVIDOR ESPERA RECEBER COMO PARÂMETRO

public class HistoricoRequest implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Long idUsuario;
	private Long idAnotacao;
	private String anotacaoTitle;
	private String anotacao;
	
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
	public Long getIdAnotacao() {
		return idAnotacao;
	}
	public void setIdAnotacao(Long idAnotacao) {
		this.idAnotacao = idAnotacao;
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
	
	
}
