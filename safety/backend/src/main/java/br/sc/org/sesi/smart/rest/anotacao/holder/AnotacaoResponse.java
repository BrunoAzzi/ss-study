package br.sc.org.sesi.smart.rest.anotacao.holder;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import br.sc.org.sesi.smart.model.Anotacao;
import br.sc.org.sesi.smart.model.Meta;

// ME DIZ O QUE O SERVIDOR VAI RESPONDER PARA O CLIENT

public class AnotacaoResponse implements Serializable {
	
	private static final long serialVersionUID = 633001240232722558L;
	
	private Long id;
	private Long idUsuario;
	private String anotacaoTitle;
	private String anotacao;
	private Date data;
	
	private boolean success;
	private List<Anotacao> listaAnotacao;
	
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
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Anotacao> getListaAnotacao() {
		return listaAnotacao;
	}
	public void setListaAnotacao(List<Anotacao> listaAnotacao) {
		this.listaAnotacao = listaAnotacao;
	}



}
