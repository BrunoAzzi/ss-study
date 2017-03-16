package br.sc.org.sesi.smart.root.dao.exemplo;

import br.sc.org.sesi.smart.model.Exemplo;
import org.omg.PortableInterceptor.INACTIVE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.HashMap;

/**
 * Created by Igor on 2/13/2017.
 */
@Repository
@Transactional
public class ExemploDaoImpl implements ExemploDao {


    @Autowired
    private DataSource dataSource;

    @Override
    @Transactional
    public void insertExemplo(Exemplo exemplo) {
        NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
        MapSqlParameterSource mapParam = new MapSqlParameterSource();
        mapParam.addValue("dsexemplo",exemplo.getDsExemplo());

        template.update("INSERT INTO EXEMPLO(DS_EXEMPLO) VALUES (:dsexemplo)",mapParam);

        Integer lastId = template.queryForObject("SELECT LAST_INSERT_ID()", new HashMap<String,Object>(), Integer.class);

        exemplo.setCodExemplo(lastId);



    }
}
