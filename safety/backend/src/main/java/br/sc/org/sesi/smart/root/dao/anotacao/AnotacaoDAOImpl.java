package br.sc.org.sesi.smart.root.dao.anotacao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.sc.org.sesi.smart.model.Anotacao;

@Repository
@Transactional
public class AnotacaoDAOImpl implements AnotacaoDAO {

	@Autowired
	private DataSource dataSource;

	String data;
	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");

	// GET ALL ANOTA합ES
	@Override
	@Transactional
	public List<Anotacao> getAllAnotacao() {
		String sql = "SELECT * FROM anotacao ORDER BY data DESC;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		List<Anotacao> listaAnotacao = template.query(sql, mapParam, new RowMapper<Anotacao>() {
			public Anotacao mapRow(ResultSet rs, int rowNum) throws SQLException {
				Anotacao anotacao = new Anotacao();
				anotacao.setId(rs.getLong("id"));
				anotacao.setIdUsuario(rs.getLong("id_usuario"));
				anotacao.setAnotacaoTitle(rs.getString("anotacao_title"));
				anotacao.setAnotacao(rs.getString("anotacao"));
				anotacao.setData(rs.getDate("data"));
				return anotacao;
			}
		});		
		return listaAnotacao;
	}
	
	

	// INSERT ANOTA플O
	@Override
	@Transactional
	public void insertAnotacao(Long idUsuario, String anotacaoTitle, String anotacao, Date data) {
		String sql = "INSERT INTO anotacao (id_usuario, anotacao_title, anotacao, data) VALUES (:idUsuario,:anotacaoTitle,:anotacao,:data);";
		dateFormat.format(data = new Date());
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("anotacaoTitle", anotacaoTitle);
		mapParam.addValue("anotacao", anotacao);
		mapParam.addValue("data", data);		
		template.update(sql, mapParam);		
	}
	
	
	// UPDATE ANOTA플O
	@Override
	@Transactional
	public void updateAnotacao(Long idUsuario, String anotacaoTitle, String anotacao) {
		String sql = "UPDATE anotacao SET anotacao_title=:anotacaoTitle, anotacao=:anotacao WHERE id_usuario=:idUsuario;";		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("anotacaoTitle", anotacaoTitle);
		mapParam.addValue("anotacao", anotacao);
		template.update(sql, mapParam);
	}
	
	// DELETE ANOTA플O
	@Override
	@Transactional
	public void deleteAnotacao(Long id) {
		String sql = "DELETE FROM anotacao WHERE id=:id;";		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("id", id);
		template.update(sql, mapParam);
	}
	

}
