package br.org.sesisc.smart.safety.repositories.dao;

import br.org.sesisc.smart.safety.models.Manager;
import br.org.sesisc.smart.safety.repositories.ManagerRepository;
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

@Repository("ManagerRepository")
public class ManagerDao implements ManagerRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public Manager create(Manager manager) {
        KeyHolder holder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                final String sql = "INSERT INTO managers(manager_type, email, phone) values (?,?,?,?)";
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, manager.getManagerType().getContent());
                ps.setString(2, manager.getEmail());
                ps.setString(3, manager.getPhone());
                ps.setLong(4, manager.getContructionId());
                return ps;
            }
        }, holder);

        long newConstructionId = holder.getKey().intValue();
        manager.setId(newConstructionId);

        return manager;
    }

    @Override
    public void update(long id, String[] properties, Object[] values) {

    }

    @Override
    public List<Manager> findAll() {
        return null;
    }

    @Override
    public Object findById(long id) {
        return null;
    }

    @Override
    public Manager findBy(String[] properties, Object[] values) {
        return null;
    }
}
