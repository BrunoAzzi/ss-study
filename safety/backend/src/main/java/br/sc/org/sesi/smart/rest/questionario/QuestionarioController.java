package br.sc.org.sesi.smart.rest.questionario;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.Questionario;

public interface QuestionarioController {
	
//	GET ALL QUESTIONARIO
	@RequestMapping(value = "/getAllQuestionario", method = RequestMethod.GET)
	@Transactional
	List<Questionario> getAllQuestionario();

}
