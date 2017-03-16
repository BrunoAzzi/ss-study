package br.sc.org.sesi.smart.root.dao.dicas;

import java.text.ParseException;
import java.util.List;

import br.sc.org.sesi.smart.model.Dica;

public interface DicasDAO {
	
//	GET - DICAS VISTAS JÁ CADASTRADAS
	public List<Dica> getAllDicas();
	
//	GET - DICAS VISTAS JÁ CADASTRADAS BY USER E CATEGORIA
	public List<Dica> getAllDicasByUsuarioAndCategoria(Long idUsuario, Long idCategoria);
	
//	GET - ID_DICA, DICA, CATEGORIA FROM WORDPRESS
	public List<Dica> getJsonWordpress();
	
//	INSERT - SALVA ID_DICA, ID_USUARIO, TITULO_DICA, DICA, CATEGORIA E DATA DE CADASTRO
	public void insertDica(Long idDicaVista, Long idUsuario, Long idCategoria, String tituloDica, String dica, String dataCadastro);
	
//	LISTA E SALVA NO BANCO LOCAL AS DICAS NÃO VISTAS PELO USUÁRIO
	public Dica getDicaNaoLida() throws ParseException;
	
}