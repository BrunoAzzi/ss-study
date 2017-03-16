package br.sc.org.sesi.smart.rest.historico;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.Historico;


public interface HistoricoController {
	
//	GET HISTORICO
	@RequestMapping(value = "/getAllHistorico", method = RequestMethod.GET)
	@Transactional
	List<Historico> getAllHistorico();
	
//	INSERT ANOTAÇÃO
//	@RequestMapping(value = "/insertAnotacao", method = RequestMethod.POST)
//	@Transactional
//	HistoricoResponse insertAnotacao(@RequestBody HistoricoRequest request);	

}
