package br.org.sesisc.smart.safety.repositories.dao;

import br.org.sesisc.smart.safety.models.Sector;
import br.org.sesisc.smart.safety.repositories.SectorRepository;
import br.org.sesisc.smart.safety.repositories.mapper.SectorMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository("SectorRepository")
public class SectorDao implements SectorRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Sector create(Sector sector) {
        KeyHolder holder = new GeneratedKeyHolder();

        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                final String sql = "INSERT INTO sectors(name) values (?)";
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, sector.getName());

                return ps;
            }
        }, holder);

        long newSectorId = holder.getKey().intValue();
        sector.setId(newSectorId);

        return sector;
    }

    @Override
    public void update(final long id, final String[] properties, final Object[] values) {
        String sql = "UPDATE sectors SET";

        if (properties.length == values.length) {
            List<String> assignments = new ArrayList<>();
            for (String property : properties) {
                assignments.add(String.format("%s = ?", property));
            }
            sql = String.format("%s %s WHERE id = ?", sql, String.join(", ", assignments));

            final Object[] valuesWithId = Arrays.copyOf(values, values.length + 1);
            valuesWithId[values.length] = id;

            jdbcTemplate.update(sql, valuesWithId);
        }
    }

    @Override
    public List<Sector> findAll() {
        return jdbcTemplate.query("SELECT * FROM sectors", new SectorMapper());
    }

    @Override
    public Object findById(final long id) {
        return jdbcTemplate.queryForObject("SELECT * FROM sectors WHERE id = ?", new Object[] { id }, new SectorMapper());
    }

    @Override
    public Sector findBy(final String[] properties, final Object[] values) {
        String query = "SELECT * FROM sectors WHERE 1=1";

        if (properties.length == values.length) {
            for (String property : properties) {
                query = String.format("%s AND %s = ?", query, property);
            }
            query = String.format("%s LIMIT 1", query);

            try {
                return (Sector) jdbcTemplate.queryForObject(query, values, new SectorMapper());
            } catch (EmptyResultDataAccessException e) {
                return null;
            }
        }

        return null;
    }
    
}
