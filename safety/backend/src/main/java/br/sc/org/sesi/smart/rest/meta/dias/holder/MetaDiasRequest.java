
package br.sc.org.sesi.smart.rest.meta.dias.holder;

import java.io.Serializable;

// O QUE O SERVIDOR ESPERA RECEBER COMO PARÂMETRO

public class MetaDiasRequest implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Long idMeta;
	private Long dia;
	private Long check;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdMeta() {
		return idMeta;
	}
	public void setIdMeta(Long idMeta) {
		this.idMeta = idMeta;
	}
	public Long getDia() {
		return dia;
	}
	public void setDia(Long dia) {
		this.dia = dia;
	}
	public Long getCheck() {
		return check;
	}
	public void setCheck(Long check) {
		this.check = check;
	}
	
}
