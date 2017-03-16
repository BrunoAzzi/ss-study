package br.sc.org.sesi.smart.model;

import java.io.Serializable;

public class Questionario implements Serializable {

	private static final long serialVersionUID = 8345974425786991565L;
	
	private Long id;
	private String descricao;
	
	public Questionario() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
