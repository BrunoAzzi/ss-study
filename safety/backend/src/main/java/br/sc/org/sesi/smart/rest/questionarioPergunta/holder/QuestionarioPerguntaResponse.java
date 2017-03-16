package br.sc.org.sesi.smart.rest.questionarioPergunta.holder;

import java.io.Serializable;
import java.util.List;

import br.sc.org.sesi.smart.model.QuestionarioPergunta;

public class QuestionarioPerguntaResponse implements Serializable{

	private static final long serialVersionUID = 5292202236036942831L;
	
	private Long id;
	private Long idQuestionario;
	private String descricao;
	private String tipoPerfil;
	private Long ordem;
	
	private List<QuestionarioPergunta> listaQuestionarioPergunta;
	private List<QuestionarioPergunta> listaOrdemUltimaResposta;
	private List<QuestionarioPergunta> listaPerguntasNaoRespondidas;
	
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
	public List<QuestionarioPergunta> getListaQuestionarioPergunta() {
		return listaQuestionarioPergunta;
	}
	public void setListaQuestionarioPergunta(List<QuestionarioPergunta> listaQuestionarioPergunta) {
		this.listaQuestionarioPergunta = listaQuestionarioPergunta;
	}
	public List<QuestionarioPergunta> getListaOrdemUltimaResposta() {
		return listaOrdemUltimaResposta;
	}
	public void setListaOrdemUltimaResposta(List<QuestionarioPergunta> listaOrdemUltimaResposta) {
		this.listaOrdemUltimaResposta = listaOrdemUltimaResposta;
	}
	public List<QuestionarioPergunta> getListaPerguntasNaoRespondidas() {
		return listaPerguntasNaoRespondidas;
	}
	public void setListaPerguntasNaoRespondidas(List<QuestionarioPergunta> listaPerguntasNaoRespondidas) {
		this.listaPerguntasNaoRespondidas = listaPerguntasNaoRespondidas;
	}

}
