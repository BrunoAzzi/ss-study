package br.sc.org.sesi.smart.rest.meta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.Meta;
import br.sc.org.sesi.smart.rest.meta.dias.holder.MetaDiasRequest;
import br.sc.org.sesi.smart.rest.meta.dias.holder.MetaDiasResponse;
import br.sc.org.sesi.smart.rest.meta.holder.MetaRequest;
import br.sc.org.sesi.smart.rest.meta.holder.MetaResponse;
import br.sc.org.sesi.smart.root.dao.meta.MetaDAO;

@RestController
public class MetaControllerImpl implements MetaController {

	@Autowired
	private MetaDAO metaDao;	
	
	
	
	@Override
	@RequestMapping(value = "/getAllMeta")
	@Transactional
	public List<Meta> getAllMeta() {		
		MetaResponse response = new MetaResponse();
		response.setListaMeta(metaDao.getAllMeta());
		return response.getListaMeta();
	}
	
	@Override
	@RequestMapping(value = "/getAllMetasDiasByUser")
	@Transactional
	public List<Meta> getAllMetasDiasByUser() {		
		MetaResponse response = new MetaResponse();
		response.setListaMeta(metaDao.getAllMetasDiasByUser());
		return response.getListaMeta();
	}
	
//	INSERT META	
	@Override
	@RequestMapping(value = "/insertMeta")
	@Transactional
	public MetaResponse insertMeta(@RequestBody MetaRequest request) {
		MetaResponse response = new MetaResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setProgresso(request.getProgresso());
		response.setComprometimento(request.getComprometimento());
		response.setMeta(request.getMeta());
		response.setIdCategoria(request.getIdCategoria());
		response.setData(request.getData());
		response.setSuccess(true);
		metaDao.insertMeta(request.getIdUsuario(), request.getProgresso(), request.getComprometimento(), request.getMeta(), request.getIdCategoria(), request.getData());
		return response;
	}
	
//	INSERT META	 DIAS
	@Override
	@RequestMapping(value = "/insertMetaDias")
	@Transactional
	public MetaDiasResponse insertMetaDias(@RequestBody MetaDiasRequest request) {
		MetaDiasResponse response = new MetaDiasResponse();
		response.setId(request.getId());
		response.setDia(request.getDia());
		metaDao.insertMetaDias(request.getId(),request.getDia());
		return response;
	}
	

	
	// UPDATE META
	@Override
	@RequestMapping(value = "/updateMeta")
	@Transactional
	public MetaResponse updateMeta(@RequestBody MetaRequest request) {
		MetaResponse response = new MetaResponse();
		response.setId(request.getId());
		response.setProgresso(request.getProgresso());
		response.setComprometimento(request.getComprometimento());
		response.setMeta(request.getMeta());
		response.setIdCategoria(request.getIdCategoria());
		response.setSuccess(true);
		metaDao.updateMeta(request.getId(), request.getProgresso(), request.getComprometimento(), request.getMeta(), request.getIdCategoria());
		return response;
	}
	
	//DELETE META
	@Override
	@RequestMapping(value = "/deleteMeta")
	@Transactional
	public MetaResponse deleteMeta(@RequestBody MetaRequest request) {
		MetaResponse response = new MetaResponse();		
		response.setSuccess(true);
		metaDao.deleteMeta(request.getId());
		return response;
	}
}
