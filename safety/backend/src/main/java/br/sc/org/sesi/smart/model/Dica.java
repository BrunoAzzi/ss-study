package br.sc.org.sesi.smart.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Dica implements Serializable {

	private static final long serialVersionUID = -6743091093276336504L;
	
	private Long id;
	private Long idDicaVista;
	private Long idUsuario;
	private Long idCategoria;
	private String tituloDica;
	private String dica;
	private String dataCadastro;
	
//	Atributos para o JSON do Wordpress
	private JsonNode content;
	private JsonNode title;
	
	public Dica() {
	}
	
//	Construtor para o JSON do Wordpress
	@JsonCreator
	public Dica(@JsonProperty("id") Long id, @JsonProperty("content") JsonNode content, @JsonProperty("title") JsonNode title) {
		super();
		this.id = id;
		this.content = content;
		this.title = title;
	}

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

	public JsonNode getContent() {
		return content;
	}

	public void setContent(JsonNode content) {
		this.content = content;
	}

	public JsonNode getTitle() {
		return title;
	}

	public void setTitle(JsonNode title) {
		this.title = title;
	}

	public String getTituloDica() {
		return tituloDica;
	}

	public void setTituloDica(String tituloDica) {
		this.tituloDica = tituloDica;
	}
	
}
