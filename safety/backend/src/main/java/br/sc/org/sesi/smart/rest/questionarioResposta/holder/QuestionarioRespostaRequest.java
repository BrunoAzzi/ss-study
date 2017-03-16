package br.sc.org.sesi.smart.rest.questionarioResposta.holder;

import java.io.Serializable;

public class QuestionarioRespostaRequest implements Serializable {
	
	private static final long serialVersionUID = 2422062656439299702L;
	
	private Long id;
	private Long idUsuario;
	private Long idPergunta;
	private Long idQuestionario;
	private String resposta;
	
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
	public Long getIdPergunta() {
		return idPergunta;
	}
	public void setIdPergunta(Long idPergunta) {
		this.idPergunta = idPergunta;
	}
	public Long getIdQuestionario() {
		return idQuestionario;
	}
	public void setIdQuestionario(Long idQuestionario) {
		this.idQuestionario = idQuestionario;
	}
	public String getResposta() {
		return resposta;
	}
	public void setResposta(String resposta) {
		this.resposta = resposta;
	}
	
}
