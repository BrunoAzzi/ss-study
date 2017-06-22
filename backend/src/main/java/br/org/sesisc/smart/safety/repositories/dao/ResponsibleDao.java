package br.org.sesisc.smart.safety.repositories.dao;

import br.org.sesisc.smart.safety.models.Responsible;
import br.org.sesisc.smart.safety.repositories.ResponsibleRepository;
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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static br.org.sesisc.smart.safety.models.enums.ResponsibleType.RESPONSIBLE_ENGINEER;

@Repository("ResponsibleDao")
public class ResponsibleDao implements ResponsibleRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Responsible create(Responsible responsible) {
        KeyHolder holder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                String responsibleTable = RESPONSIBLE_ENGINEER.equals(responsible.getResponsibleType()) ? "responsible_engineers" :
                        "responsible_safeties";
                final String sql = "INSERT INTO" +
                        responsibleTable +
                        "(name,email, phone) values (?,?,?)";
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, responsible.getName());
                ps.setString(2, responsible.getEmail());
                ps.setString(3, responsible.getPhone());
                return ps;
            }
        }, holder);

        long newConstructionId = holder.getKey().intValue();
        responsible.setId(newConstructionId);

        return responsible;
    }

    @Override
    public void update(long id, String type, String[] properties, Object[] values) {
        String responsibleTable = "engineer".equals(type) ? "responsible_engineers" :
                "responsible_safeties";

        String sql = "UPDATE " +
                responsibleTable +
                " SET";

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
    public List<Responsible> findAll() {
        return null;
    }

    @Override
    public Object findById(long id) {
        return null;
    }

    @Override
    public Responsible findBy(String[] properties, Object[] values) {
        return null;
    }
}
