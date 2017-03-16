package br.sc.org.sesi.smart.rest.questionarioPergunta;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.QuestionarioPergunta;
import br.sc.org.sesi.smart.rest.questionarioPergunta.holder.QuestionarioPerguntaRequest;

public interface QuestionarioPerguntaController {
	
//	GET PERGUNTAS BY QUESTIONARIO
	@RequestMapping(value = "/getAllPerguntasComportamentalByQuestionario", method = RequestMethod.POST)
	@Transactional
	List<QuestionarioPergunta> getAllPerguntasComportamentalByQuestionario(@RequestBody QuestionarioPerguntaRequest request);
	
//	GET ORDEM DA ÚLTIMA RESPOSTA
	@RequestMapping(value = "/getOrdemUltimaResposta", method = RequestMethod.POST)
	@Transactional
	List<QuestionarioPergunta> getOrdemUltimaResposta();
	
//	GET PERGUNTAS A PARTIR DA ÚLTIMA RESPOSTA
	@RequestMapping(value = "/getPerguntaApartirUltimaOrder", method = RequestMethod.POST)
	@Transactional
	List<QuestionarioPergunta> getPerguntaApartirUltimaOrder(@RequestBody QuestionarioPerguntaRequest request);

}
