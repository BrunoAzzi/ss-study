package br.sc.org.sesi.smart.rest.questionario.holder;

import java.io.Serializable;
import java.util.List;

import br.sc.org.sesi.smart.model.Questionario;

public class QuestionarioResponse implements Serializable {
	
	private static final long serialVersionUID = -6668140996989026599L;
	
	private Long id;
	private String descricao;
	
	private List<Questionario> listaQuestionario;
	
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
	public List<Questionario> getListaQuestionario() {
		return listaQuestionario;
	}
	public void setListaQuestionario(List<Questionario> listaQuestionario) {
		this.listaQuestionario = listaQuestionario;
	}

}
