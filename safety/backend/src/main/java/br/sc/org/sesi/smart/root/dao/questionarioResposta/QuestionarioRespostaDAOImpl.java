package br.sc.org.sesi.smart.root.dao.questionarioResposta;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class QuestionarioRespostaDAOImpl implements QuestionarioRespostaDAO {
	
	@Autowired
	private DataSource dataSource;

//	INSERT RESPOSTA COMPORTAMENTAL
	@Override
	@Transactional
	public void insertRespostaComportamental(Long idUsuario, Long idPergunta, Long idQuestionario, String resposta) {
		String sql = "INSERT INTO questionario_resposta (id_usuario, id_pergunta, id_questionario, resposta) VALUES (:idUsuario, :idPergunta, :idQuestionario, :resposta);";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("idPergunta", idPergunta);
		mapParam.addValue("idQuestionario", idQuestionario);
		mapParam.addValue("resposta", resposta);
		template.update(sql, mapParam);		
	}

}
