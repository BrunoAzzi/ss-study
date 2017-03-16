package br.sc.org.sesi.smart.rest.historicoDicas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.HistoricoDicas;
import br.sc.org.sesi.smart.rest.historicoDicas.holder.HistoricoDicasRequest;
import br.sc.org.sesi.smart.rest.historicoDicas.holder.HistoricoDicasResponse;
import br.sc.org.sesi.smart.root.dao.historicoDicas.HistoricoDicasDAO;

@RestController
public class HistoricoDicasControllerImpl implements HistoricoDicasController {
	
	@Autowired
	private HistoricoDicasDAO historicoDicasDAO;

	@Override
	@RequestMapping(value = "/getAllHistoricoDicas")
	@Transactional
	public List<HistoricoDicas> getAllHistoricoDicas() {
		HistoricoDicasResponse response = new HistoricoDicasResponse();
		response.setListaHistoricoDicas(historicoDicasDAO.getAllHistoricoDicas());
		return response.getListaHistoricoDicas();
	}

	@Override
	@RequestMapping(value = "/getAllHistoricoDicasByUser")
	@Transactional
	public List<HistoricoDicas> getAllHistoricoDicasByUser(@RequestBody HistoricoDicasRequest request) {
		HistoricoDicasResponse response = new HistoricoDicasResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setListaHistoricoDicasByUser(historicoDicasDAO.getAllHistoricoDicasByUser(request.getIdUsuario()));
		return response.getListaHistoricoDicasByUser();
	}

//	INSERT NOVO HISTÓRICO DICAS
	@Override
	@RequestMapping(value = "/insertHistoricoDica")
	@Transactional
	public HistoricoDicasResponse insertHistoricoDica(@RequestBody HistoricoDicasRequest request) {
		HistoricoDicasResponse response = new HistoricoDicasResponse();
		response.setIdWordpress(request.getIdWordpress());
		response.setIdUsuario(request.getIdUsuario());
		response.setIdCategoria(request.getIdCategoria());
		response.setDica(request.getDica());
		response.setCurtida(request.isCurtida());
		response.setDataVisualizacao(request.getDataVisualizacao());
		historicoDicasDAO.insertHistoricoDica(request.getIdWordpress(), request.getIdUsuario(), request.getIdCategoria(), request.getDica(), request.isCurtida(), request.getDataVisualizacao());
		return response;
	}
	
	// INSERE O LIKE NA DICA (NÃO ESTA EM USO)
	@Override
	@RequestMapping(value = "/insertLikeDica")
	@Transactional
	public HistoricoDicasResponse insertLikeDica(@RequestBody HistoricoDicasRequest request) {
		HistoricoDicasResponse response = new HistoricoDicasResponse();
		response.setIdWordpress(request.getIdWordpress());
		response.setIdUsuario(request.getIdUsuario());
		response.setCurtida(request.isCurtida());
		historicoDicasDAO.insertLikeDica(request.getIdWordpress(), request.getIdUsuario(), request.isCurtida());
		return response;
	}
	
//	GET ÚLTIMA DICA DO HISTÓRICO
	@Override
	@RequestMapping(value = "/getLastDicaHistorico")
	@Transactional
	public List<HistoricoDicas> getLastDicaHistorico(@RequestBody HistoricoDicasRequest request) {
		HistoricoDicasResponse response = new HistoricoDicasResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setDataVisualizacao(request.getDataVisualizacao());
		response.setListaLastDicasHistorico(historicoDicasDAO.getLastDicaHistorico(request.getIdUsuario(), request.getDataVisualizacao()));
		return response.getListaLastDicasHistorico();
	}

}
