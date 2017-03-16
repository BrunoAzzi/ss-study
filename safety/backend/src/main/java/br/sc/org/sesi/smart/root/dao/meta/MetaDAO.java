package br.sc.org.sesi.smart.root.dao.meta;

import java.util.Date;
import java.util.List;

import br.sc.org.sesi.smart.model.Meta;

public interface MetaDAO {	
	//Meta
	public List<Meta> getAllMeta();
	public List<Meta> getAllMetasDiasByUser();
	public void insertMeta(Long idUsuario, Long progresso, Long comprometimento, String meta, Long idCategoria, Date data);
	public void insertMetaDias(Long idMeta, Long dia);
	public void updateMeta(Long id, Long progresso, Long comprometimento, String meta, Long categoria);
	public void deleteMeta(Long id);	
} 