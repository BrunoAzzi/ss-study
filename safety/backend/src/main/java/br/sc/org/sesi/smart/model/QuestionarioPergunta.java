package br.sc.org.sesi.smart.model;

import java.io.Serializable;

public class QuestionarioPergunta implements Serializable {

	private static final long serialVersionUID = -6923735375304925747L;
	
	private Long id;
	private Long idQuestionario;
	private String descricao;
	private String tipoPerfil;
	private Long ordem;
	
	public QuestionarioPergunta() {
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdQuestionario() {
		return idQuestionario;
	}
	public void setIdQuestionario(Long idQuestionario) {
		this.idQuestionario = idQuestionario;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getTipoPerfil() {
		return tipoPerfil;
	}
	public void setTipoPerfil(String tipoPerfil) {
		this.tipoPerfil = tipoPerfil;
	}
	public Long getOrdem() {
		return ordem;
	}
	public void setOrdem(Long ordem) {
		this.ordem = ordem;
	}

}
