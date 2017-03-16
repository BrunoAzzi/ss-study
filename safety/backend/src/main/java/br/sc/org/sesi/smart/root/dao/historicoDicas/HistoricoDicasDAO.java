package br.sc.org.sesi.smart.root.dao.historicoDicas;

import java.util.List;

import br.sc.org.sesi.smart.model.HistoricoDicas;

public interface HistoricoDicasDAO {
	
//	GET ALL HISTÓRICO DICAS
	public List<HistoricoDicas> getAllHistoricoDicas();
	
//	GET ALL HISTÓRICO DICAS BY USER
	public List<HistoricoDicas> getAllHistoricoDicasByUser(Long idUsuario);
	
//	INSERT NOVO HISTÓRICO DICAS
	public void insertHistoricoDica(Long idWordpress, Long idUsuario, Long idCategoria, String dica, boolean curtida, String dataVisualizacao);
	
//	UPDATE - INSERE O LIKE NA DICA
	public void insertLikeDica(Long idWordpress, Long idUsuario, boolean curtida);
	
//	GET ÚLTIMA DICA DO HISTÓRICO
	public List<HistoricoDicas> getLastDicaHistorico(Long idUsuario, String dataVisualizacao);

}
