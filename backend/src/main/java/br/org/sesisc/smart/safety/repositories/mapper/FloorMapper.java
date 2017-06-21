package br.org.sesisc.smart.safety.repositories.mapper;

import br.org.sesisc.smart.safety.models.Floor;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FloorMapper  implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int i) throws SQLException {
        Floor floor = new Floor();

        floor.setId(rs.getLong("id"));
        floor.setName(rs.getString("name"));
        floor.setAcronym(rs.getString("acronym"));
        floor.setImageUrl(rs.getString("image_url"));

        return floor;
    }
}