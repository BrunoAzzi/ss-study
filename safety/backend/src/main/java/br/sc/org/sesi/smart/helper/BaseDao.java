package br.sc.org.sesi.smart.helper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import javax.sql.DataSource;

/**
 * Created by Igor on 25/03/2015.
 */
public abstract class BaseDao {

    @Autowired
    private DataSource dataSource;

    public DataSource getDataSource() {
        return dataSource;
    }

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    protected NamedParameterJdbcTemplate createNamedJdbcTemplate()  {
        NamedParameterJdbcTemplate jdbcTemplate = new NamedParameterJdbcTemplate(getDataSource());

        return jdbcTemplate;
    }

    protected JdbcTemplate createJdbcTemplate()  {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(getDataSource());

        return jdbcTemplate;
    }

}
