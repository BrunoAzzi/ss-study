package br.sc.org.sesi.smart.rest.meta;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.Meta;
import br.sc.org.sesi.smart.rest.meta.dias.holder.MetaDiasRequest;
import br.sc.org.sesi.smart.rest.meta.dias.holder.MetaDiasResponse;
import br.sc.org.sesi.smart.rest.meta.holder.MetaRequest;
import br.sc.org.sesi.smart.rest.meta.holder.MetaResponse;

public interface MetaController {
	
//	GET META
	@RequestMapping(value = "/getAllMeta", method = RequestMethod.GET)
	@Transactional
	List<Meta> getAllMeta();
	
	@RequestMapping(value = "/getAllMetasDiasByUser", method = RequestMethod.GET)
	@Transactional
	List<Meta> getAllMetasDiasByUser();	
	
//	INSERT META
	@RequestMapping(value = "/insertMeta", method = RequestMethod.POST)
	@Transactional
	MetaResponse insertMeta(@RequestBody MetaRequest request);

//	INSERT META DIAS
	@RequestMapping(value = "/insertMetaDias", method = RequestMethod.POST)
	@Transactional
	MetaDiasResponse insertMetaDias(@RequestBody MetaDiasRequest request);
	
	//UPDATE META
	@RequestMapping(value = "/updateMeta", method = RequestMethod.POST)
	@Transactional
	MetaResponse updateMeta(@RequestBody MetaRequest request);
	
	//DELETE META
	@RequestMapping(value = "/deleteMeta", method = RequestMethod.POST)
	@Transactional
	MetaResponse deleteMeta(@RequestBody MetaRequest request);
}
