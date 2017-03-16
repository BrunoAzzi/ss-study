package br.sc.org.sesi.smart.root.dao.questionarioPergunta;

import java.util.List;

import br.sc.org.sesi.smart.model.QuestionarioPergunta;

public interface QuestionarioPerguntaDAO {
	
//	GET PERGUNTAS BY QUESTIONARIO
	public List<QuestionarioPergunta> getAllPerguntasComportamentalByQuestionario(Long idQuestionario);
	
//	GET ORDEM DA ÚLTIMA RESPOSTA
	public List<QuestionarioPergunta> getOrdemUltimaResposta();
	
//	GET PERGUNTAS A PARTIR DA ÚLTIMA RESPOSTA
	public List<QuestionarioPergunta> getPerguntaApartirUltimaOrder(Long idQuestionario);

}
