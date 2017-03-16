package br.sc.org.sesi.smart.rest.questionarioPergunta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.QuestionarioPergunta;
import br.sc.org.sesi.smart.rest.questionarioPergunta.holder.QuestionarioPerguntaRequest;
import br.sc.org.sesi.smart.rest.questionarioPergunta.holder.QuestionarioPerguntaResponse;
import br.sc.org.sesi.smart.root.dao.questionarioPergunta.QuestionarioPerguntaDAO;

@RestController
public class QuestionarioPerguntaControllerImpl implements QuestionarioPerguntaController {
	
	@Autowired
	private QuestionarioPerguntaDAO questionarioPerguntaDAO;

//	GET PERGUNTAS BY QUESTIONARIO
	@Override
	@RequestMapping(value = "/getAllPerguntasComportamentalByQuestionario")
	@Transactional
	public List<QuestionarioPergunta> getAllPerguntasComportamentalByQuestionario(@RequestBody QuestionarioPerguntaRequest request) {
		QuestionarioPerguntaResponse response = new QuestionarioPerguntaResponse();
		response.setId(request.getId());
		response.setIdQuestionario(request.getIdQuestionario());
		response.setDescricao(request.getDescricao());
		response.setTipoPerfil(request.getTipoPerfil());
		response.setOrdem(request.getOrdem());
		response.setListaQuestionarioPergunta(questionarioPerguntaDAO.getAllPerguntasComportamentalByQuestionario(request.getIdQuestionario()));
		return response.getListaQuestionarioPergunta();
	}

	@Override
	@RequestMapping(value = "/getOrdemUltimaResposta")
	@Transactional
	public List<QuestionarioPergunta> getOrdemUltimaResposta() {
		QuestionarioPerguntaResponse response = new QuestionarioPerguntaResponse();
		response.setListaOrdemUltimaResposta(questionarioPerguntaDAO.getOrdemUltimaResposta());
		return response.getListaOrdemUltimaResposta();
	}

	@Override
	public List<QuestionarioPergunta> getPerguntaApartirUltimaOrder(@RequestBody QuestionarioPerguntaRequest request) {
		QuestionarioPerguntaResponse response = new QuestionarioPerguntaResponse();
		response.setId(request.getId());
		response.setIdQuestionario(request.getIdQuestionario());
		response.setDescricao(request.getDescricao());
		response.setTipoPerfil(request.getTipoPerfil());
		response.setOrdem(request.getOrdem());
		response.setListaPerguntasNaoRespondidas(questionarioPerguntaDAO.getPerguntaApartirUltimaOrder(request.getIdQuestionario()));
		return response.getListaPerguntasNaoRespondidas();
	}

}
