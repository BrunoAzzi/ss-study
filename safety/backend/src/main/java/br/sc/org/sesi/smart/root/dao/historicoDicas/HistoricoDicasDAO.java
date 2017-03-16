package br.sc.org.sesi.smart.root.dao.historicoDicas;

import java.util.List;

import br.sc.org.sesi.smart.model.HistoricoDicas;

public interface HistoricoDicasDAO {
	
//	GET ALL HIST�RICO DICAS
	public List<HistoricoDicas> getAllHistoricoDicas();
	
//	GET ALL HIST�RICO DICAS BY USER
	public List<HistoricoDicas> getAllHistoricoDicasByUser(Long idUsuario);
	
//	INSERT NOVO HIST�RICO DICAS
	public void insertHistoricoDica(Long idWordpress, Long idUsuario, Long idCategoria, String dica, boolean curtida, String dataVisualizacao);
	
//	UPDATE - INSERE O LIKE NA DICA
	public void insertLikeDica(Long idWordpress, Long idUsuario, boolean curtida);
	
//	GET �LTIMA DICA DO HIST�RICO
	public List<HistoricoDicas> getLastDicaHistorico(Long idUsuario, String dataVisualizacao);

}
