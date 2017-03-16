package br.sc.org.sesi.smart.rest.historicoDicas.holder;

import java.io.Serializable;

public class HistoricoDicasRequest implements Serializable {

	private static final long serialVersionUID = 3915137958366425309L;
	
	private Long id;
	private Long idWordpress;
	private Long idUsuario;
	private Long idCategoria;
	private String dica;
	private String dataVisualizacao;
	private boolean curtida;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdWordpress() {
		return idWordpress;
	}
	public void setIdWordpress(Long idWordpress) {
		this.idWordpress = idWordpress;
	}
	public Long getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}
	public Long getIdCategoria() {
		return idCategoria;
	}
	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}
	public String getDica() {
		return dica;
	}
	public void setDica(String dica) {
		this.dica = dica;
	}
	public String getDataVisualizacao() {
		return dataVisualizacao;
	}
	public void setDataVisualizacao(String dataVisualizacao) {
		this.dataVisualizacao = dataVisualizacao;
	}
	public boolean isCurtida() {
		return curtida;
	}
	public void setCurtida(boolean curtida) {
		this.curtida = curtida;
	}
	
}
