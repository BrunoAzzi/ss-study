package br.sc.org.sesi.smart.root.dao.questionario;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.sc.org.sesi.smart.model.Questionario;

@Repository
@Transactional
public class QuestionarioDAOImpl implements QuestionarioDAO {
	
	@Autowired
	private DataSource dataSource;

	@Override
	@Transactional
	public List<Questionario> getAllQuestionario() {
		String sql = "SELECT * FROM questionario;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		
		List<Questionario> listaQuestionarioBanco = template.query(sql, mapParam, new RowMapper<Questionario>() {
			public Questionario mapRow(ResultSet rs, int rowNum) throws SQLException {
				Questionario questionario = new Questionario();
				questionario.setId(rs.getLong("id"));
				questionario.setDescricao(rs.getString("descricao"));
				return questionario;
			}
			
		});
		return listaQuestionarioBanco;
	}
	

}
