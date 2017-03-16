package br.sc.org.sesi.smart.rest.anotacao;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.Anotacao;
import br.sc.org.sesi.smart.rest.anotacao.holder.AnotacaoRequest;
import br.sc.org.sesi.smart.rest.anotacao.holder.AnotacaoResponse;

public interface AnotacaoController {
	
//	GET ANOTA플O
	@RequestMapping(value = "/getAllAnotacao", method = RequestMethod.GET)
	@Transactional
	List<Anotacao> getAllAnotacao();
	
//	INSERT ANOTA플O
	@RequestMapping(value = "/insertAnotacao", method = RequestMethod.POST)
	@Transactional
	AnotacaoResponse insertAnotacao(@RequestBody AnotacaoRequest request);

	//UPDATE ANOTA플O
	@RequestMapping(value = "/updateAnotacao", method = RequestMethod.POST)
	@Transactional
	AnotacaoResponse updateAnotacao(@RequestBody AnotacaoRequest request);
	
	//DELETE ANOTA플O
	@RequestMapping(value = "/deleteAnotacao", method = RequestMethod.POST)
	@Transactional
	AnotacaoResponse deleteAnotacao(@RequestBody AnotacaoRequest request);
}
