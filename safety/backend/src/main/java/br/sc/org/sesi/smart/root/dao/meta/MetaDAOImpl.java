package br.sc.org.sesi.smart.root.dao.meta;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.sc.org.sesi.smart.model.Meta;

@Repository
@Transactional
public class MetaDAOImpl implements MetaDAO {

	@Autowired
	private DataSource dataSource;

	String data;
	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");

	// GET ALL METAS
	@Override
	@Transactional
	public List<Meta> getAllMeta() {
		String sql = "SELECT * FROM meta ORDER BY data_criacao DESC;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		List<Meta> listaMeta = template.query(sql, mapParam, new RowMapper<Meta>() {
			public Meta mapRow(ResultSet rs, int rowNum) throws SQLException {
				Meta meta = new Meta();
				meta.setId(rs.getLong("id"));
				meta.setIdUsuario(rs.getLong("usuario_id"));
				meta.setProgresso(rs.getLong("progresso"));
				meta.setComprometimento(rs.getLong("comprometimento"));
				meta.setTrocarData(rs.getLong("troca_data"));
				meta.setMeta(rs.getString("meta"));
				meta.setIdCategoria(rs.getLong("categoria_id"));
				meta.setData(rs.getDate("data_criacao"));
				return meta;
			}
		});		
		return compararData(listaMeta);
	}
	
	// GET ALL METAS_Dias By USER
	//TODO Pegar ID do usuário logado e passar por parâmetro
	//TODO Fazer FOR para percorrer cada objeto da lista e fazer as comparações
		@Override
		@Transactional
		public List<Meta> getAllMetasDiasByUser() {
			List<Long> dias = new ArrayList<Long>();
			String sql = "SELECT * FROM meta JOIN meta_dias WHERE meta.id = meta_dias.meta_id;";
			NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
			MapSqlParameterSource mapParam = new MapSqlParameterSource();
			List<Meta> listaMeta = template.query(sql, mapParam, new RowMapper<Meta>() {
				public Meta mapRow(ResultSet rs, int rowNum) throws SQLException {							
					Meta meta = new Meta();
					meta.setId(rs.getLong("id"));
					meta.setIdUsuario(rs.getLong("usuario_id"));
					meta.setProgresso(rs.getLong("progresso"));
					meta.setComprometimento(rs.getLong("comprometimento"));
					meta.setTrocarData(rs.getLong("troca_data"));
					meta.setMeta(rs.getString("meta"));
					meta.setIdCategoria(rs.getLong("categoria_id"));
					meta.setData(rs.getDate("data_criacao"));					
					if(rs.getLong("id") == rs.getInt("meta_id")){
						dias.add(rs.getLong("dia"));
						meta.setDias(dias);
						System.out.println("TCHÊ");
					}					
					return meta;					
				}				
			});		
			return compararData(listaMeta);
		}
	
	// INSERT META
	@Override
	@Transactional
	public void insertMeta(Long idUsuario, Long progresso, Long comprometimento, String meta, Long idCategoria, Date data) {
		String sql = "INSERT INTO meta (usuario_id, progresso, comprometimento, meta, categoria_id, data_criacao) VALUES (:idUsuario,:progresso,:comprometimento,:meta,:idCategoria,:data);";
		dateFormat.format(data = new Date());
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("progresso", progresso);
		mapParam.addValue("comprometimento", comprometimento);
		mapParam.addValue("meta", meta);
		mapParam.addValue("idCategoria", idCategoria);
		mapParam.addValue("data", data);	
		template.update(sql, mapParam);		
	}
	
	// INSERT META DIAS
	@Override
	@Transactional
	public void insertMetaDias(Long idMeta, Long dia) {
		String sql = "INSERT INTO meta_dias (id_meta, dia) VALUES (:idMeta,:dia);";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idMeta", idMeta);
		mapParam.addValue("dia", dia);
		template.update(sql, mapParam);		
	}
	
	// UPDATE META
	@Override
	@Transactional
	public void updateMeta(Long id, Long progresso, Long comprometimento, String meta, Long idCategoria) {
		String sql = "UPDATE meta SET progresso=:progresso, comprometimento=:comprometimento, meta=:meta, tematica=:tematica WHERE id=:id;";		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("id", id);
		mapParam.addValue("progresso", progresso);
		mapParam.addValue("comprometimento", comprometimento);
		mapParam.addValue("meta", meta);
		mapParam.addValue("categoria_id", idCategoria);		
		template.update(sql, mapParam);
	}
	
	// DELETE META
	@Override
	@Transactional
	public void deleteMeta(Long id) {
		String sql = "DELETE FROM meta WHERE id=:id;";		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("id", id);
		template.update(sql, mapParam);
	}
	
	public List<Meta> compararData(List<Meta> listaMeta){
		String sqlUpdate;
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		for(int i = 0; i < listaMeta.size(); i++){
			System.out.println("=========================================================");
			System.out.println("I VALOR:"+ listaMeta.get(i).getData());
			System.out.println("I:"+i);
			System.out.println("=========================================================");
			for(int j = i+1; j <listaMeta.size(); j++){
				System.out.println("J:"+j);
				if(listaMeta.get(i).getData().equals(listaMeta.get(j).getData())){
					System.out.println("=========================================================");
					System.out.println("ENCONTROU VALOR:"+ listaMeta.get(j).getData());
					System.out.println("J:"+j);
					System.out.println("=========================================================");
					sqlUpdate ="UPDATE `smart_master`.`meta` SET `troca_data`='1' WHERE `id`='" +j+"';";
					template.update(sqlUpdate, mapParam);
				}
			}
		}
		return listaMeta;
	}
}
