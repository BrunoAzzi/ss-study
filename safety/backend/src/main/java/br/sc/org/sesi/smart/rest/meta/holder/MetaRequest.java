
package br.sc.org.sesi.smart.rest.meta.holder;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

// O QUE O SERVIDOR ESPERA RECEBER COMO PARÂMETRO

public class MetaRequest implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Long idUsuario;
	private Long progresso;
	private Long trocarData;
	private Long comprometimento;
	private Long idCategoria;	
	private String meta;
	private Date data;
	private Date check;
	private List<Long> dias; 
			
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
}
