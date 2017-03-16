package br.sc.org.sesi.smart.root.dao.questionarioPergunta;


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

import br.sc.org.sesi.smart.model.QuestionarioPergunta;

@Repository
@Transactional
public class QuestionarioPerguntaDAOImpl implements QuestionarioPerguntaDAO {
	
	@Autowired
	private DataSource dataSource;

//	GET PERGUNTAS BY QUESTIONARIO
	@Override
	@Transactional
	public List<QuestionarioPergunta> getAllPerguntasComportamentalByQuestionario(Long idQuestionario) {
		String sql = "SELECT * FROM questionario_pergunta WHERE id_questionario = :idQuestionario ORDER BY ordem ASC;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idQuestionario", idQuestionario);
		
		List<QuestionarioPergunta> listaPerguntasByCategoria = template.query(sql, mapParam, new RowMapper<QuestionarioPergunta>() {
			public QuestionarioPergunta mapRow(ResultSet rs, int rowNum) throws SQLException {
				QuestionarioPergunta questionarioPergunta = new QuestionarioPergunta();
				questionarioPergunta.setId(rs.getLong("id"));
				questionarioPergunta.setIdQuestionario(rs.getLong("id_questionario"));
				questionarioPergunta.setDescricao(rs.getString("descricao"));
				questionarioPergunta.setTipoPerfil(rs.getString("tipo_perfil"));
				questionarioPergunta.setOrdem(rs.getLong("ordem"));
				return questionarioPergunta;
			}
		});		
		
		return listaPerguntasByCategoria;
	}

//	GET ORDEM DA ÚLTIMA RESPOSTA
	@Override
	@Transactional
	public List<QuestionarioPergunta> getOrdemUltimaResposta() {
		String sql = "SELECT p.ordem FROM questionario_pergunta p JOIN questionario_resposta r WHERE p.id = r.id_pergunta ORDER BY r.id DESC LIMIT 1;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		
		List<QuestionarioPergunta> listaUltimaOrdemRespondida = template.query(sql, mapParam, new RowMapper<QuestionarioPergunta>() {
			public QuestionarioPergunta mapRow(ResultSet rs, int rowNum) throws SQLException {
				QuestionarioPergunta questionarioPergunta = new QuestionarioPergunta();
				questionarioPergunta.setOrdem(rs.getLong("ordem"));
				return questionarioPergunta;
			}
		});		
		return listaUltimaOrdemRespondida;
	}

//	GET PERGUNTAS A PARTIR DA ÚLTIMA RESPOSTA
	@Override
	@Transactional
	public List<QuestionarioPergunta> getPerguntaApartirUltimaOrder(Long idQuestionario) {
		
		// Recebe o valor de ordem da última pergunta respondida
		Long ultimaOrdem = getOrdemUltimaResposta().get(0).getOrdem();
		
		String sql = "SELECT * FROM questionario_pergunta WHERE id_questionario = :idQuestionario LIMIT 18 OFFSET " + ultimaOrdem + ";";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idQuestionario", idQuestionario);
		
		List<QuestionarioPergunta> listaPerguntasAindaNaoRespondidas = template.query(sql, mapParam, new RowMapper<QuestionarioPergunta>() {
			public QuestionarioPergunta mapRow(ResultSet rs, int rowNum) throws SQLException {
				QuestionarioPergunta questionarioPergunta = new QuestionarioPergunta();
				questionarioPergunta.setId(rs.getLong("id"));
				questionarioPergunta.setIdQuestionario(rs.getLong("id_questionario"));
				questionarioPergunta.setDescricao(rs.getString("descricao"));
				questionarioPergunta.setTipoPerfil(rs.getString("tipo_perfil"));
				questionarioPergunta.setOrdem(rs.getLong("ordem"));
				return questionarioPergunta;
			}
		});	
		
		return listaPerguntasAindaNaoRespondidas;
	}

}
