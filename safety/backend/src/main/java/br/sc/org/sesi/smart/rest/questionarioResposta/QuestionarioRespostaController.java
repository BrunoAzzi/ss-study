package br.sc.org.sesi.smart.rest.questionarioResposta;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.rest.questionarioResposta.holder.QuestionarioRespostaRequest;
import br.sc.org.sesi.smart.rest.questionarioResposta.holder.QuestionarioRespostaResponse;

public interface QuestionarioRespostaController {	
	
//	INSERT RESPOSTA COMPORTAMENTAL
	@RequestMapping(value = "/insertRespostaComportamental", method = RequestMethod.POST)
	@Transactional
	QuestionarioRespostaResponse insertRespostaComportamental(@RequestBody QuestionarioRespostaRequest request);

}
