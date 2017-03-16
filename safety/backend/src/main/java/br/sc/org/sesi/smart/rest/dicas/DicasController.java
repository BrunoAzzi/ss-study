package br.sc.org.sesi.smart.rest.dicas;

import java.text.ParseException;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.model.Dica;
import br.sc.org.sesi.smart.rest.dicas.holder.DicasRequest;
import br.sc.org.sesi.smart.rest.dicas.holder.DicasResponse;

public interface DicasController {
	
//	GET ALL DICAS
	@RequestMapping(value = "/getAllDicas", method = RequestMethod.GET)
	@Transactional
	List<Dica> getAllDicas();
	
//	GET - DICAS VISTAS JÁ CADASTRADAS BY USER E CATEGORIA
	@RequestMapping(value = "/getAllDicasByUsuarioAndCategoria", method = RequestMethod.POST)
	@Transactional
	List<Dica> getAllDicasByUsuarioAndCategoria(@RequestBody DicasRequest request);
	
//	INSERT - SALVA ID_DICA, ID_USUARIO, DICA, CATEGORIA E DATA DE CADASTRO	  
	@RequestMapping(value = "/insertDica", method = RequestMethod.POST)
	@Transactional
	DicasResponse insertDica(@RequestBody DicasRequest request);
	
//	PEGA JSON DO WORDPRESS EM STRING
	@RequestMapping(value = "/getJsonWordpress", method = RequestMethod.GET)
	@Transactional
	List<Dica>  getJsonWordpress();
	
//	INSERE O LIKE NA DICA (NÃO ESTA EM USO)
//	@RequestMapping(value = "/insertLikeDica", method = RequestMethod.POST)
//	@Transactional
//	DicasResponse insertLikeDica(@RequestBody DicasRequest request);
	
//	LISTA E SALVA NO BANCO LOCAL AS DICAS NÃO VISTAS PELO USUÁRIO
	@RequestMapping(value = "/getDicasNaoLidas", method = RequestMethod.GET)
	@Transactional
	Dica getDicaNaoLida(@RequestBody DicasRequest request) throws ParseException;

}
