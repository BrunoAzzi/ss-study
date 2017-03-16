package br.sc.org.sesi.smart.root.dao.historico;

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

import br.sc.org.sesi.smart.model.Historico;

@Repository
@Transactional
public class HistoricoDAOImpl implements HistoricoDAO {

	@Autowired
	private DataSource dataSource;

	String data;
	String data2;
	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");

	// GET ALL HISTORICOS
	@Override
	@Transactional
	public List<Historico> getAllHistorico() {
//		String sql = "SELECT * FROM historico ORDER BY data DESC;";
//		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
//		MapSqlParameterSource mapParam = new MapSqlParameterSource();
//
//		List<Historico> listaHistorico = template.query(sql, mapParam, new RowMapper<Historico>() {
//			public Historico mapRow(ResultSet rs, int rowNum) throws SQLException {
//				Historico historico = new Historico();
//				historico.setId(rs.getLong("id"));
//				historico.setIdMeta(rs.getLong("id_meta"));
//				historico.setMeta(rs.getString("meta"));
//				historico.setIdAnotacao(rs.getLong("id_anotacao"));
//				historico.setAnotacaoTitle(rs.getString("anotacaoTitle"));
//				historico.setAnotacao(rs.getString("anotacao"));
//				historico.setData(rs.getDate("data"));
//				historico.setQtSemanal(rs.getLong("qt_semanal"));
//				historico.setProgresso(rs.getLong("progresso"));
//				historico.setTrocarData(rs.getLong("trocar_data"));
//				return historico;
//			}
//		});
		return null;
	}
	
	// INSERT ANOTAÇÃO
//		@Override
//		@Transactional
//		public void insertAnotacao( Long idUsuario,String anotacaoTitle, String anotacao, Date data2) {
//			String sql = "INSERT INTO historico (id_usuario, anotacaoTitle, anotacao, data) VALUES (:idUsuario, :anotacaoTitle,:anotacao,:data);";
//			dateFormat.format(data2 = new Date());
//			NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
//			MapSqlParameterSource mapParam = new MapSqlParameterSource();
//			mapParam.addValue("idUsuario", idUsuario);
//			mapParam.addValue("anotacaoTitle", anotacaoTitle);
//			mapParam.addValue("anotacao", anotacao);
//			mapParam.addValue("data", data2);
//			template.update(sql, mapParam);
//		}

//	@Override
//	@Transactional
//	public List <Historico>compararData(){
//		List<Historico> listaBanco = getAllHistorico();
//		String sqlUpdate;
//		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
//		MapSqlParameterSource mapParam = new MapSqlParameterSource();
//		for(int i = 0; i < listaBanco.size(); i++){
//			System.out.println("=========================================================");
//			System.out.println("I VALOR:"+ listaBanco.get(i).getData());
//			System.out.println("I:"+i);
//			System.out.println("=========================================================");
//			for(int j = i+1; j <listaBanco.size(); j++){
//				System.out.println("J:"+j);
//				if(listaBanco.get(i).getData().equals(listaBanco.get(j).getData())){
//					System.out.println("=========================================================");
//					System.out.println("ENCONTROU VALOR:"+ listaBanco.get(j).getData());
//					System.out.println("J:"+j);
//					System.out.println("=========================================================");
//					sqlUpdate ="UPDATE `smart_master`.`historico` SET `trocar_data`='1' WHERE `id`='" +j+"';";
//					template.update(sqlUpdate, mapParam);
//				}
//			}
//		}
//		return null;
//	}
}
