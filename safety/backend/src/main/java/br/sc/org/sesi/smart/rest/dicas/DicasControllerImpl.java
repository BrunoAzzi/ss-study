package br.sc.org.sesi.smart.rest.dicas;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.model.Dica;
import br.sc.org.sesi.smart.rest.dicas.holder.DicasRequest;
import br.sc.org.sesi.smart.rest.dicas.holder.DicasResponse;
import br.sc.org.sesi.smart.root.dao.dicas.DicasDAO;

@RestController
public class DicasControllerImpl implements DicasController {

	@Autowired
	private DicasDAO dicasDao;

	// GET ALL DICAS
	@Override
	@RequestMapping(value = "/getAllDicas")
	@Transactional
	public List<Dica> getAllDicas() {
		DicasResponse response = new DicasResponse();
		response.setListaDicas(dicasDao.getAllDicas());
		return response.getListaDicas();
	}
	
	//	GET - DICAS VISTAS JÁ CADASTRADAS BY USER E CATEGORIA
	@Override
	@RequestMapping(value = "getAllDicasByUsuarioAndCategoria")
	@Transactional
	public List<Dica> getAllDicasByUsuarioAndCategoria(@RequestBody DicasRequest request) {
		DicasResponse response = new DicasResponse();
		response.setIdUsuario(request.getIdUsuario());
		response.setIdCategoria(request.getIdCategoria());
		response.setListaDicasByUsuarioAndCategoria(dicasDao.getAllDicasByUsuarioAndCategoria(request.getIdUsuario(), request.getIdCategoria()));
		return response.getListaDicasByUsuarioAndCategoria();
	}
	
//	INSERT - SALVA ID_DICA, ID_USUARIO, DICA, CATEGORIA E DATA DE CADASTRO
	@Override
	@RequestMapping(value = "/insertDica")
	@Transactional
	public DicasResponse insertDica(@RequestBody DicasRequest request) {
		DicasResponse response = new DicasResponse();
		response.setIdDicaVista(request.getIdDicaVista());
		response.setIdUsuario(request.getIdUsuario());
		response.setIdCategoria(request.getIdCategoria());
		response.setTituloDica(request.getTituloDica());
		response.setDica(request.getDica());
		response.setDataCadastro(request.getDataCadastro());
		dicasDao.insertDica(request.getIdDicaVista(), request.getIdUsuario(), request.getIdCategoria(), request.getTituloDica(), request.getDica(), request.getDataCadastro());
		return response;
	}

	// PEGA JSON DO WORDPRESS EM STRING
	@Override
	@RequestMapping(value = "/getJsonWordpress")
	@Transactional
	public List<Dica> getJsonWordpress() {
		DicasResponse response = new DicasResponse();
		response.setListaWordpress(dicasDao.getJsonWordpress());
		return response.getListaWordpress();
	}

//	LISTA E SALVA NO BANCO LOCAL AS DICAS NÃO VISTAS PELO USUÁRIO
	@Override
	@RequestMapping(value = "/getDicaNaoLida")
	@Transactional
	public Dica getDicaNaoLida(DicasRequest request) throws ParseException {
		DicasResponse response = new DicasResponse();
		response.setDicaNaoLida(dicasDao.getDicaNaoLida());
		return response.getDicaNaoLida();
	}

}
