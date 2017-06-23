package br.org.sesisc.smart.safety.repositories.dao;

import br.org.sesisc.smart.safety.models.Floor;
import br.org.sesisc.smart.safety.repositories.FloorRepository;
import br.org.sesisc.smart.safety.repositories.mapper.FloorMapper;
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

@Repository("FloorRepository")
public class FloorDao implements FloorRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Floor create(Floor floor) {
        KeyHolder holder = new GeneratedKeyHolder();

        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                final String sql = "INSERT INTO floors(name) values (?)";
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, floor.getName());

                return ps;
            }
        }, holder);

        long newFloorId = holder.getKey().intValue();
        floor.setId(newFloorId);

        return floor;
    }

    @Override
    public void update(final long id, final String[] properties, final Object[] values) {
        String sql = "UPDATE floors SET";

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
    public List<Floor> findAll() {
        return jdbcTemplate.query("SELECT * FROM floors", new FloorMapper());
    }

    @Override
    public Object findById(final long id) {
        return jdbcTemplate.queryForObject("SELECT * FROM floors WHERE id = ?", new Object[] { id }, new FloorMapper());
    }

    @Override
    public Floor findBy(final String[] properties, final Object[] values) {
        String query = "SELECT * FROM floors WHERE 1=1";

        if (properties.length == values.length) {
            for (String property : properties) {
                query = String.format("%s AND %s = ?", query, property);
            }
            query = String.format("%s LIMIT 1", query);

            try {
                return (Floor) jdbcTemplate.queryForObject(query, values, new FloorMapper());
            } catch (EmptyResultDataAccessException e) {
                return null;
            }
        }

        return null;
    }

    @Override
    public List<Floor> where(final String[] properties, final Object[] values) {
        String query = "SELECT * FROM floors WHERE 1=1";

        if (properties.length == values.length) {
            for (String property : properties) {
                query = String.format("%s AND %s = ?", query, property);
            }

            try {
                return new ArrayList<Floor>();
            } catch (EmptyResultDataAccessException | NullPointerException e) {
                return new ArrayList<Floor>();
            }
        }

        return null;
    }

}