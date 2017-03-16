package br.sc.org.sesi.smart.rest.historico;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.Historico;
import br.sc.org.sesi.smart.rest.historico.holder.HistoricoResponse;
import br.sc.org.sesi.smart.root.dao.historico.HistoricoDAO;

@RestController
public class HistoricoControllerImpl implements HistoricoController {

	@Autowired
	private HistoricoDAO historicoDao;
	
	
	
	@Override
	@RequestMapping(value = "/getAllHistorico")
	@Transactional
	public List<Historico> getAllHistorico() {		
		HistoricoResponse response = new HistoricoResponse();
		response.setListaHistorico(historicoDao.getAllHistorico());
		return response.getListaHistorico();
	}
	
//	insertAnotacao
//	@Override
//	@RequestMapping(value = "/insertAnotacao")
//	@Transactional
//	public HistoricoResponse insertAnotacao(@RequestBody HistoricoRequest request) {
//		HistoricoResponse response = new HistoricoResponse();
//		response.setIdUsuario(request.getIdUsuario());
//		response.setAnotacaoTitle(request.getAnotacaoTitle());
//		response.setAnotacao(request.getAnotacao());
//		response.setData(request.getData());
//		response.setSuccess(true);
//		historicoDao.insertAnotacao(request.getIdUsuario(),request.getAnotacaoTitle(), request.getAnotacao(), request.getData());
//		return response;
//	}
}
