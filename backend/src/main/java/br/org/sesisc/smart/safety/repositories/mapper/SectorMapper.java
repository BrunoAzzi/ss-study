package br.org.sesisc.smart.safety.repositories.mapper;

import br.org.sesisc.smart.safety.models.Sector;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class SectorMapper  implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int i) throws SQLException {
        Sector sector = new Sector();

        sector.setId(rs.getLong("id"));
        sector.setName(rs.getString("name"));

        return sector;
    }
}
