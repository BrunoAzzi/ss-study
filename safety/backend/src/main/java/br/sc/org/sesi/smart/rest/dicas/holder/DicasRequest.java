
package br.sc.org.sesi.smart.rest.dicas.holder;

import java.io.Serializable;

// O QUE O SERVIDOR ESPERA RECEBER COMO PARÂMETRO

public class DicasRequest implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Long idDicaVista;
	private Long idUsuario;
	private Long idCategoria;
	private String tituloDica;
	private String dica;
	private String dataCadastro;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdDicaVista() {
		return idDicaVista;
	}
	public void setIdDicaVista(Long idDicaVista) {
		this.idDicaVista = idDicaVista;
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
	public String getDataCadastro() {
		return dataCadastro;
	}
	public void setDataCadastro(String dataCadastro) {
		this.dataCadastro = dataCadastro;
	}
	public String getTituloDica() {
		return tituloDica;
	}
	public void setTituloDica(String tituloDica) {
		this.tituloDica = tituloDica;
	}

}
