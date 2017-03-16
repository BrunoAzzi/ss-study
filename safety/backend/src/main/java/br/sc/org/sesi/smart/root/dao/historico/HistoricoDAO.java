package br.sc.org.sesi.smart.root.dao.historico;

import java.util.Date;
import java.util.List;

import br.sc.org.sesi.smart.model.Dica;
import br.sc.org.sesi.smart.model.Historico;

public interface HistoricoDAO {
	

	public List<Historico> getAllHistorico();
//	public void insertMeta(Long idUsuario, String meta, Long qtSemanal, Date data);
//	public void insertAnotacao(Long idUsuario,String anotacaoTitle,  String anotacao, Date data);
//	public List<Historico> compararData();

	
} 