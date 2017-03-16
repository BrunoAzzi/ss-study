package br.sc.org.sesi.smart.rest.meta.holder;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import br.sc.org.sesi.smart.model.Meta;

// ME DIZ O QUE O SERVIDOR VAI RESPONDER PARA O CLIENT

public class MetaResponse implements Serializable {
	
	private static final long serialVersionUID = 633001240232722558L;
	
	private Long id;
	private Long idUsuario;
	private Long progresso;
	private Long trocarData;
	private Long comprometimento;
	private String meta;
	private Long idCategoria;	
	private Date data;
	private Date check;
	private boolean success;
	private List<Long> dias; 
	private List<Meta> listaMeta;
	private List<Meta> datasIguais;	

	public Date getCheck() {
		return check;
	}
	public void setCheck(Date check) {
		this.check = check;
	}
	public List<Long> getDias() {
		return dias;
	}
	public void setDias(List<Long> dias) {
		this.dias = dias;
	}
	public Long getTrocarData() {
		return trocarData;
	}
	public void setTrocarData(Long trocarData) {
		this.trocarData = trocarData;
	}
	public Long getComprometimento() {
		return comprometimento;
	}
	public void setComprometimento(Long comprometimento) {
		this.comprometimento = comprometimento;
	}		
	public Long getIdCategoria() {
		return idCategoria;
	}
	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}
	public List<Meta> getDatasIguais() {
		return datasIguais;
	}
	public void setDatasIguais(List<Meta> datasIguais) {
		this.datasIguais = datasIguais;
	}
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
	
	public String getMeta() {
		return meta;
	}
	public void setMeta(String meta) {
		this.meta = meta;
	}
	
	public Date getData() {
		return data;
	}
	public void setData(Date data) {
		this.data = data;
	}
	
	public Long getProgresso() {
		return progresso;
	}
	public void setProgresso(Long progresso) {
		this.progresso = progresso;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Meta> getListaMeta() {
		return listaMeta;
	}
	public void setListaMeta(List<Meta> listaMeta) {
		this.listaMeta = listaMeta;
	}

}
