package br.sc.org.sesi.smart.root.dao.anotacao;

import java.util.Date;
import java.util.List;

import br.sc.org.sesi.smart.model.Anotacao;

public interface AnotacaoDAO {	
	//Meta
	public List<Anotacao> getAllAnotacao();
	public void insertAnotacao(Long idUsuario, String anotacaoTitle, String anotacao, Date data);
	public void updateAnotacao(Long idUsuario, String anotacaoTitle, String anotacao);
	public void deleteAnotacao(Long id);
	
} 