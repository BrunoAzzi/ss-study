package br.sc.org.sesi.smart.rest.questionarioResposta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.rest.questionarioResposta.holder.QuestionarioRespostaRequest;
import br.sc.org.sesi.smart.rest.questionarioResposta.holder.QuestionarioRespostaResponse;
import br.sc.org.sesi.smart.root.dao.questionarioResposta.QuestionarioRespostaDAO;

@RestController
public class QuestionarioRespostaControllerImpl implements QuestionarioRespostaController {
	
	@Autowired
	private QuestionarioRespostaDAO questionarioRespostaDAO;

	@Override
	@RequestMapping(value = "/insertRespostaComportamental")
	@Transactional
	public QuestionarioRespostaResponse insertRespostaComportamental(@RequestBody QuestionarioRespostaRequest request) {
		QuestionarioRespostaResponse response = new QuestionarioRespostaResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setIdPergunta(request.getIdPergunta());
		response.setIdQuestionario(request.getIdQuestionario());
		response.setResposta(request.getResposta());
		questionarioRespostaDAO.insertRespostaComportamental(request.getIdUsuario(), request.getIdPergunta(), request.getIdQuestionario(), request.getResposta());
		return response;
	}

}
