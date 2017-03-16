package br.sc.org.sesi.smart.rest.historico.holder;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import br.sc.org.sesi.smart.model.Dica;
import br.sc.org.sesi.smart.model.Historico;

// ME DIZ O QUE O SERVIDOR VAI RESPONDER PARA O CLIENT

public class HistoricoResponse implements Serializable {
	
	private static final long serialVersionUID = 633001240232722558L;
	
	
	private Long id;
	private Long idUsuario;
	private Long idAnotacao;
	private String anotacaoTitle;
	private String anotacao;	
	private List<Historico> listaHistorico;
	
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
	public List<Historico> getListaHistorico() {
		return listaHistorico;
	}
	public void setListaHistorico(List<Historico> listaHistorico) {
		this.listaHistorico = listaHistorico;
	}
	
	

}
