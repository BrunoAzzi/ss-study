package br.org.sesisc.smart.safety.repositories.dao;

import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.User;
import br.org.sesisc.smart.safety.repositories.UserException;
import br.org.sesisc.smart.safety.repositories.mapper.ConstructionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

@Repository("ConstructionRepository")
public class ConstructionDao implements ConstructionRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Construction create(Construction construction) throws UserException {
        KeyHolder holder = new GeneratedKeyHolder();

        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                final String sql = "INSERT INTO constructions(name, city_id, cep, address, status, description, highlight_url, " +
                        "logo_url, cei_url, cei_code) values (?,?,?,?,?,?,?,?,?,?)";
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, construction.getName());
                ps.setLong(2, construction.getCityId());
                ps.setString(3, construction.getCep());
                ps.setString(4, construction.getAddress());
                ps.setString(5, construction.getStatus());
                ps.setString(6, construction.getDescription());
                ps.setString(7, construction.getHighlightUrl());
                ps.setString(8, construction.getLogoUrl());
                ps.setString(9, construction.getCeiUrl());
                ps.setString(10, construction.getCeiCode());
                return ps;
            }
        }, holder);

        long newConstructionId = holder.getKey().intValue();
        construction.setId(newConstructionId);
        return construction;
    }

    @Override
    public void update(long id, String[] properties, Object[] values) {

    }

    @Override
    public List<Construction> findAll() {
        return null;
    }

    @Override
    public Object findById(long id) {
        return null;
    }

    @Override
    public Construction findBy(String[] properties, Object[] values) {
        return null;
    }
}
