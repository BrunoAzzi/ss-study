package br.sc.org.sesi.smart.rest.anotacao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.Anotacao;
import br.sc.org.sesi.smart.rest.anotacao.holder.AnotacaoRequest;
import br.sc.org.sesi.smart.rest.anotacao.holder.AnotacaoResponse;
import br.sc.org.sesi.smart.root.dao.anotacao.AnotacaoDAO;

@RestController
public class AnotacaoControllerImpl implements AnotacaoController {

	@Autowired
	private AnotacaoDAO anotacaoDao;	
	
	@Override
	@RequestMapping(value = "/getAllAnotacao")
	@Transactional
	public List<Anotacao> getAllAnotacao() {
		AnotacaoResponse response = new AnotacaoResponse();
		response.setListaAnotacao(anotacaoDao.getAllAnotacao());		
		return response.getListaAnotacao();
	}
	
//	INSERT ANOTAÇÃO	
	@Override
	@RequestMapping(value = "/insertAnotacao")
	@Transactional
	public AnotacaoResponse insertAnotacao(@RequestBody AnotacaoRequest request) {
		AnotacaoResponse response = new AnotacaoResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setAnotacaoTitle(request.getAnotacaoTitle());
		response.setAnotacao(request.getAnotacao());
		response.setData(request.getData());
		response.setSuccess(true);
		anotacaoDao.insertAnotacao(request.getIdUsuario(), request.getAnotacaoTitle(), request.getAnotacao(),  request.getData());
		return response;
	}
	
	
	// UPDATE ANOTAÇÃO
	@Override
	@RequestMapping(value = "/updateAnotacao")
	@Transactional
	public AnotacaoResponse updateAnotacao(@RequestBody AnotacaoRequest request) {
		AnotacaoResponse response = new AnotacaoResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setAnotacao(request.getAnotacao());
		response.setAnotacaoTitle(request.getAnotacaoTitle());
		response.setSuccess(true);
		anotacaoDao.updateAnotacao(request.getIdUsuario(), request.getAnotacaoTitle(), request.getAnotacao());
		return response;
	}
	
	//DELETE ANOTAÇÃO
	@Override
	@RequestMapping(value = "/deleteAnotacao")
	@Transactional
	public AnotacaoResponse deleteAnotacao(@RequestBody AnotacaoRequest request) {
		AnotacaoResponse response = new AnotacaoResponse();		
		response.setSuccess(true);
		anotacaoDao.deleteAnotacao(request.getId());
		return response;
	}
}
