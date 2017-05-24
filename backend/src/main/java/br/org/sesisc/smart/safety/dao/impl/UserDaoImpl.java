package br.org.sesisc.smart.safety.dao.impl;

import br.org.sesisc.smart.safety.dao.UserDao;
import br.org.sesisc.smart.safety.dao.mapper.UserMapper;
import br.org.sesisc.smart.safety.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository("UserDao")
public class UserDaoImpl implements UserDao {

    private final String INSERT_SQL = "INSERT INTO users(email, password, active) values(?,?,?)";
    private final String FETCH_SQL = "SELECT * FROM users";
    private final String FETCH_SQL_BY_ID = "SELECT * FROM users WHERE id = ?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public User create(User user) {
        KeyHolder holder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(INSERT_SQL, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, user.getEmail());
                ps.setString(2, user.getPassword());
                ps.setBoolean(3, user.getActive());
                return ps;
            }
        }, holder);

        long newUserId = holder.getKey().intValue();
        user.setId(newUserId);
        return user;
    }

    @Override
    public void update(final long id, final String[] properties, final Object[] values) {
        String sql = "UPDATE users SET";

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
    public List<User> findAll() {
        return jdbcTemplate.query(FETCH_SQL, new UserMapper());
    }

    @Override
    public Object findById(final long id) {
        return jdbcTemplate.queryForObject(FETCH_SQL_BY_ID, new Object[] { id }, new UserMapper());
    }

    @Override
    public User findBy(final String[] properties, final Object[] values) {
        String query = "SELECT * FROM users WHERE 1=1";

        if (properties.length == values.length) {
            for (String property : properties) {
                query = String.format("%s AND %s = ?", query, property);
            }
            query = String.format("%s LIMIT 1", query);

            try {
                return (User) jdbcTemplate.queryForObject(query, values, new UserMapper());
            } catch (EmptyResultDataAccessException e) {
                return null;
            }
        }

        return null;
    }

}
