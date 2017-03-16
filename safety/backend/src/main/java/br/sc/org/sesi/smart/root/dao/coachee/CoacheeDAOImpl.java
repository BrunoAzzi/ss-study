package br.sc.org.sesi.smart.root.dao.coachee;

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

import br.sc.org.sesi.smart.model.Coachee;


@Repository
@Transactional
public class CoacheeDAOImpl implements CoacheeDAO {

	@Autowired
	private DataSource dataSource;

	// GET ALL DICAS
	@Override
	@Transactional
	public List<?> getAllCoachee() {
		String sql = "SELECT * FROM coachee;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		List<Coachee> listaCoachee = template.query(sql, mapParam, new RowMapper<Coachee>() {
			public Coachee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Coachee coachee = new Coachee();
				coachee.setId(rs.getLong("id"));
				coachee.setNomeCoachee(rs.getString("nome_coachee"));
				coachee.setPerfilCoachee(rs.getString("perfil_coachee"));
				coachee.setEmpresaCoachee(rs.getString("empresa_coachee"));
				coachee.setFuncaoCoachee(rs.getString("funcao_coachee"));
				coachee.setLocalidadeCoachee(rs.getString("localidade_coachee"));
				coachee.setPesoCoachee(rs.getFloat("peso_coachee"));
				coachee.setAlturaCoachee(rs.getFloat("altura_coachee"));
				coachee.setCinturaCoachee(rs.getFloat("cintura_coachee"));
				coachee.setImcCoachee(rs.getLong("imc_coachee"));
				coachee.setFocoAlimentacao(rs.getInt("foco_alimentacao"));
				coachee.setFocoEstresse(rs.getInt("foco_estresse"));
				coachee.setFocoExercicio(rs.getInt("foco_exercicio"));
				coachee.setFocoPrevencao(rs.getInt("foco_prevencao"));
				coachee.setFocoRelacionamento(rs.getInt("foco_relacionamento"));
				coachee.setMinSessao(rs.getInt("min_sessao"));
				coachee.setMaxSessao(rs.getInt("max_sessao"));
				return coachee;
			}
		});
		return listaCoachee;
	}
	
//	INSERT PERFIL COMPORTAMENTAL NO COACHEE
	@Override
	@Transactional
	public void insertPerfilComportamentalCoachee(Long id, String perfilCoachee) {
		String sql = "UPDATE coachee SET perfil_coachee = :perfilCoachee WHERE id = :id;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("perfilCoachee", perfilCoachee);
		mapParam.addValue("id", id);
		template.update(sql, mapParam);		
	}

}
