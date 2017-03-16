package br.sc.org.sesi.smart.rest.questionarioResposta.holder;

import java.io.Serializable;
import java.util.List;

import br.sc.org.sesi.smart.model.QuestionarioResposta;

public class QuestionarioRespostaResponse implements Serializable {
	
	private static final long serialVersionUID = 6977540621330363792L;
	
	private Long id;
	private Long idUsuario;
	private Long idPergunta;
	private Long idQuestionario;
	private String resposta;
	
	private List<QuestionarioResposta> listaUltimaOrdem;
	private List<QuestionarioResposta> listaPerguntasApartirUltimaOrdem;
	
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
	public List<QuestionarioResposta> getListaUltimaOrdem() {
		return listaUltimaOrdem;
	}
	public void setListaUltimaOrdem(List<QuestionarioResposta> listaUltimaOrdem) {
		this.listaUltimaOrdem = listaUltimaOrdem;
	}
	public List<QuestionarioResposta> getListaPerguntasApartirUltimaOrdem() {
		return listaPerguntasApartirUltimaOrdem;
	}
	public void setListaPerguntasApartirUltimaOrdem(List<QuestionarioResposta> listaPerguntasApartirUltimaOrdem) {
		this.listaPerguntasApartirUltimaOrdem = listaPerguntasApartirUltimaOrdem;
	}

}
