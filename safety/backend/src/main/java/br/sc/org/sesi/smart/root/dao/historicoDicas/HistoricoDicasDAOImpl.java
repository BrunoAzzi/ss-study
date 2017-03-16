package br.sc.org.sesi.smart.root.dao.historicoDicas;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TreeMap;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.sc.org.sesi.smart.model.HistoricoDicas;

@Repository
@Transactional
public class HistoricoDicasDAOImpl implements HistoricoDicasDAO {
	
	@Autowired
	private DataSource dataSource;
	
	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

//	GET ALL HISTÓRICO DICAS
	@Override
	@Transactional
	@Secured(value = "ROLE_EXEMPLO")
	public List<HistoricoDicas> getAllHistoricoDicas() {
		String sql = "SELECT * FROM historico_dicas;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		
		List<HistoricoDicas> listaHistoricoDicasResult = template.query(sql, mapParam, new RowMapper<HistoricoDicas>() {
			public HistoricoDicas mapRow(ResultSet rs, int rowNum) throws SQLException {
				HistoricoDicas historicoDicas = new HistoricoDicas();
				historicoDicas.setId(rs.getLong("id"));
				historicoDicas.setIdWordpress(rs.getLong("id_wordpress"));
				historicoDicas.setIdUsuario(rs.getLong("id_usuario"));
				historicoDicas.setIdCategoria(rs.getLong("id_categoria"));
				historicoDicas.setDica(rs.getString("dica"));
				historicoDicas.setCurtida(rs.getBoolean("curtida"));
				historicoDicas.setDataVisualizacao(rs.getString("data_visualizacao"));
				return historicoDicas;
			}
		});
		return listaHistoricoDicasResult;
	}

//	GET ALL HISTÓRICO DICAS BY USER
	@Override
	@Transactional
	public List<HistoricoDicas> getAllHistoricoDicasByUser(Long idUsuario) {
		String sql = "SELECT * FROM historico_dicas WHERE id_usuario = :idUsuario;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		
		List<HistoricoDicas> listaHistoricoDicasByUserResult = template.query(sql, mapParam, new RowMapper<HistoricoDicas>() {
			public HistoricoDicas mapRow(ResultSet rs, int rowNum) throws SQLException {
				HistoricoDicas historicoDicas = new HistoricoDicas();
				historicoDicas.setId(rs.getLong("id"));
				historicoDicas.setIdWordpress(rs.getLong("id_wordpress"));
				historicoDicas.setIdUsuario(rs.getLong("id_usuario"));
				historicoDicas.setIdCategoria(rs.getLong("id_categoria"));
				historicoDicas.setDica(rs.getString("dica"));
				historicoDicas.setCurtida(rs.getBoolean("curtida"));
				historicoDicas.setDataVisualizacao(rs.getString("data_visualizacao"));
				return historicoDicas;
			}
		});
		
		return listaHistoricoDicasByUserResult;
	}

//	INSERT NOVO HISTÓRICO DICAS
	@Override
	@Transactional
	public void insertHistoricoDica(Long idWordpress, Long idUsuario, Long idCategoria, String dica, boolean curtida, String dataVisualizacao) {
		String sql = "INSERT INTO historico_dicas (id_wordpress, id_usuario, id_categoria, dica, curtida, data_visualizacao) VALUES (:idWordpress, :idUsuario, :idCategoria, :dica, :curtida, :dataVisualizacao);";
		Date dataAtual = new Date();
		dataVisualizacao = simpleDateFormat.format(dataAtual);
		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idWordpress", idWordpress);
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("idCategoria", idCategoria);
		mapParam.addValue("dica", dica);
		mapParam.addValue("curtida", curtida);
		mapParam.addValue("dataVisualizacao", dataVisualizacao);	
		
		// Obtem todas as dicas do wordpress
		Long idUsuarioParametro = (long) 1;
        List<HistoricoDicas> listaHistoricoDicasUsuario = getAllHistoricoDicasByUser(idUsuarioParametro);
        
        if (listaHistoricoDicasUsuario.isEmpty()) {
        	template.update(sql, mapParam);	
		} else {
	        // Popula TreeMap com todas as dicas do banco conforme usuário utilizando o id da dica do wordpress
	        // como chave (key) para realizar uma consulta ápida pela chave posteriormente
	        //Complexidade: (n log n) operações
	        TreeMap<Long, HistoricoDicas> banco_map = new TreeMap<>();
	        listaHistoricoDicasUsuario.stream().forEach((y) -> {
	            banco_map.put(y.getIdWordpress(), y);
	        });
	        
	        //Procura nas dicas do banco se existe uma dica x que não está
	        //no banco local, caso encontre insere no banco e retorne a dica imediatamente
	        //Complexidade: (n log n) operações no pior caso
	        for(HistoricoDicas x : listaHistoricoDicasUsuario){
	            if(!banco_map.containsKey(idWordpress)){
	            	template.update(sql, mapParam);	
	            	break;
	            }
	        }
		}
	}

//	INSERE O LIKE NA DICA
	@Override
	@Transactional
	@Secured(value = "ROLE_EXEMPLO")
	public void insertLikeDica(Long idWordpress, Long idUsuario, boolean curtida) {
		String sql = "UPDATE historico_dicas SET curtida = :curtida WHERE id_wordpress = :idWordpress AND id_usuario = :idUsuario;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idWordpress", idWordpress);
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("curtida", curtida);
		template.update(sql, mapParam);
	}

//	GET ÚLTIMA DICA DO HISTÓRICO
	@Override
	@Transactional
	@Secured(value = "ROLE_EXEMPLO")
	public List<HistoricoDicas> getLastDicaHistorico(Long idUsuario, String dataVisualizacao) {
		String sql = "SELECT * FROM historico_dicas WHERE id_usuario = :idUsuario AND data_visualizacao = :dataVisualizacao ORDER BY id DESC LIMIT 1;";
		Date dataAtual = new Date();
		dataVisualizacao = simpleDateFormat.format(dataAtual);
		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("dataVisualizacao", dataVisualizacao);
		
		List<HistoricoDicas> lastHistoricoDicasResult = template.query(sql, mapParam, new RowMapper<HistoricoDicas>() {
			@Override
			public HistoricoDicas mapRow(ResultSet rs, int rowNum) throws SQLException {
				HistoricoDicas historicoDicas = new HistoricoDicas();
				historicoDicas.setId(rs.getLong("id"));
				historicoDicas.setIdWordpress(rs.getLong("id_wordpress"));
				historicoDicas.setIdUsuario(rs.getLong("id_usuario"));
				historicoDicas.setIdCategoria(rs.getLong("id_categoria"));
				historicoDicas.setDica(rs.getString("dica"));
				historicoDicas.setCurtida(rs.getBoolean("curtida"));
				historicoDicas.setDataVisualizacao(rs.getString("data_visualizacao"));
				return historicoDicas;
			}
		});
		
		return lastHistoricoDicasResult;
	}
	
}
