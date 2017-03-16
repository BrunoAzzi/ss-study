package br.sc.org.sesi.smart.root.dao.widgets;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public class DAOImpl implements DAO {
	
	@Autowired
	private DataSource dataSource;

//	GET NEXT WIDGETS
	@Override
	@Transactional
	public List<?> getWidgets(int id_start, int num_rows) {		
		return genericSqlList(
			"SELECT * FROM widgets where id between "+id_start+" and "+(id_start+num_rows-1)+";"
		);
	}
	
	@Override
	@Transactional
	public List<?> getImages(String widget) {		
		return genericSqlList(
			"SELECT image FROM widget_images where widget='"+widget+"';"
		);
	}
	
	@Override
	@Transactional
	public List<?> getDescriptions(String widget) {		
		return genericSqlList(
			"SELECT description FROM widget_descriptions where widget='"+widget+"';"
		);
	}
	
	@Override
	@Transactional
	public List<?> getPermissions(String widget) {		
		return genericSqlList(
			"SELECT permission FROM widget_permissions where widget='"+widget+"';"
		);
	}
	
	private List<?> genericSqlList(String sql){
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();		
		return template.queryForList(sql, mapParam);
	}
}
