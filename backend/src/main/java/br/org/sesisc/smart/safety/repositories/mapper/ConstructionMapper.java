package br.org.sesisc.smart.safety.repositories.mapper;

import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ConstructionMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int i) throws SQLException {
        Construction construction = new Construction();

        construction.setId(rs.getLong("id"));
        construction.setName(rs.getString("name"));
        construction.setCep(rs.getString("cep"));
        construction.setAddress(rs.getString("address"));
        construction.setStatus(rs.getInt("status"));
        construction.setDescription(rs.getString("description"));
        construction.setLogoUrl(rs.getString("logo_url"));
        construction.setCeiUrl(rs.getString("cei_url"));
        construction.setCeiCode(rs.getString("cei_code"));

        return construction;
    }
}
