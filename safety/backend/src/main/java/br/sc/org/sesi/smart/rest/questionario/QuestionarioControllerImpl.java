package br.sc.org.sesi.smart.rest.questionario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.Questionario;
import br.sc.org.sesi.smart.rest.questionario.holder.QuestionarioResponse;
import br.sc.org.sesi.smart.root.dao.questionario.QuestionarioDAO;

@RestController
public class QuestionarioControllerImpl implements QuestionarioController {
	
	@Autowired
	private QuestionarioDAO questionarioDAO;

	@Override
	@RequestMapping(value = "/getAllQuestionario")
	@Transactional
	public List<Questionario> getAllQuestionario() {
		QuestionarioResponse response = new QuestionarioResponse();
		response.setListaQuestionario(questionarioDAO.getAllQuestionario());
		return response.getListaQuestionario();
	}

}
