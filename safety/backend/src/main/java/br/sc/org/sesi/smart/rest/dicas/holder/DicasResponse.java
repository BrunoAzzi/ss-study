package br.sc.org.sesi.smart.rest.dicas.holder;

import java.io.Serializable;
import java.util.List;

import br.sc.org.sesi.smart.model.Dica;

// ME DIZ O QUE O SERVIDOR VAI RESPONDER PARA O CLIENT

public class DicasResponse implements Serializable {
	
	private static final long serialVersionUID = 633001240232722558L;
	
	private Long id;
	private Long idDicaVista;
	private Long idUsuario;
	private Long idCategoria;
	private String tituloDica;
	private String dica;
	private String dataCadastro;
	
	private boolean success;
	private List<Dica> listaDicas;
	private List<Dica> listaWordpress;	
	private List<Dica> listaNaoVistas;
	private List<Dica> listaDicasByUsuarioAndCategoria;
	private Dica dicaNaoLida;
	
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
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Dica> getListaDicas() {
		return listaDicas;
	}
	public void setListaDicas(List<Dica> listaDicas) {
		this.listaDicas = listaDicas;
	}
	public List<Dica> getListaWordpress() {
		return listaWordpress;
	}
	public void setListaWordpress(List<Dica> listaWordpress) {
		this.listaWordpress = listaWordpress;
	}
	public List<Dica> getListaNaoVistas() {
		return listaNaoVistas;
	}
	public void setListaNaoVistas(List<Dica> listaNaoVistas) {
		this.listaNaoVistas = listaNaoVistas;
	}
	public List<Dica> getListaDicasByUsuarioAndCategoria() {
		return listaDicasByUsuarioAndCategoria;
	}
	public void setListaDicasByUsuarioAndCategoria(List<Dica> listaDicasByUsuarioAndCategoria) {
		this.listaDicasByUsuarioAndCategoria = listaDicasByUsuarioAndCategoria;
	}
	public Dica getDicaNaoLida() {
		return dicaNaoLida;
	}
	public void setDicaNaoLida(Dica dicaNaoLida) {
		this.dicaNaoLida = dicaNaoLida;
	}
	public String getTituloDica() {
		return tituloDica;
	}
	public void setTituloDica(String tituloDica) {
		this.tituloDica = tituloDica;
	}

}
