package br.sc.org.sesi.smart.rest.historicoDicas;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.HistoricoDicas;
import br.sc.org.sesi.smart.rest.historicoDicas.holder.HistoricoDicasRequest;
import br.sc.org.sesi.smart.rest.historicoDicas.holder.HistoricoDicasResponse;

public interface HistoricoDicasController {
	
//	GET ALL HIST�RICO DICAS
	@RequestMapping(value = "/getAllHistoricoDicas", method = RequestMethod.GET)
	@Transactional
	List<HistoricoDicas> getAllHistoricoDicas();
	
//	GET ALL HIST�RICO DICAS BY USER
	@RequestMapping(value = "/getAllHistoricoDicasByUser", method = RequestMethod.POST)
	@Transactional
	List<HistoricoDicas> getAllHistoricoDicasByUser(@RequestBody HistoricoDicasRequest request);
	
//	INSERT NOVO HIST�RICO DICAS
	@RequestMapping(value = "/insertHistoricoDica", method = RequestMethod.POST)
	@Transactional
	HistoricoDicasResponse insertHistoricoDica(@RequestBody HistoricoDicasRequest request);
	
//	INSERE O LIKE NA DICA
	@RequestMapping(value = "/insertLikeDica", method = RequestMethod.POST)
	@Transactional
	HistoricoDicasResponse insertLikeDica(@RequestBody HistoricoDicasRequest request);
	
//	GET �LTIMA DICA DO HIST�RICO
	@RequestMapping(value = "/getLastDicaHistorico", method = RequestMethod.POST)
	@Transactional
	List<HistoricoDicas> getLastDicaHistorico(@RequestBody HistoricoDicasRequest request);

}
