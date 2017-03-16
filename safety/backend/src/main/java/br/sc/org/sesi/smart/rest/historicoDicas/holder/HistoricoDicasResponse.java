package br.sc.org.sesi.smart.rest.historicoDicas.holder;

import java.io.Serializable;
import java.util.List;

import br.sc.org.sesi.smart.model.HistoricoDicas;

public class HistoricoDicasResponse implements Serializable {

	private static final long serialVersionUID = -6268534469662496914L;
	
	private Long id;
	private Long idWordpress;
	private Long idUsuario;
	private Long idCategoria;
	private String dica;
	private String dataVisualizacao;
	private boolean curtida;
	
	private boolean success;
	private List<HistoricoDicas> listaHistoricoDicas;
	private List<HistoricoDicas> listaHistoricoDicasByUser;
	private List<HistoricoDicas> listaLastDicasHistorico;
	
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
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<HistoricoDicas> getListaHistoricoDicas() {
		return listaHistoricoDicas;
	}
	public void setListaHistoricoDicas(List<HistoricoDicas> listaHistoricoDicas) {
		this.listaHistoricoDicas = listaHistoricoDicas;
	}
	public List<HistoricoDicas> getListaHistoricoDicasByUser() {
		return listaHistoricoDicasByUser;
	}
	public void setListaHistoricoDicasByUser(List<HistoricoDicas> listaHistoricoDicasByUser) {
		this.listaHistoricoDicasByUser = listaHistoricoDicasByUser;
	}
	public List<HistoricoDicas> getListaLastDicasHistorico() {
		return listaLastDicasHistorico;
	}
	public void setListaLastDicasHistorico(List<HistoricoDicas> listaLastDicasHistorico) {
		this.listaLastDicasHistorico = listaLastDicasHistorico;
	}

}
