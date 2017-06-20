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
        construction.setStatus(rs.getString("status"));
        construction.setDescription(rs.getString("description"));
        construction.setHighlightUrl(rs.getString("highlight_url"));
        construction.setLogoUrl(rs.getString("logo_url"));
        construction.setLogoFileName(rs.getString("logo_file_name"));
        construction.setCeiUrl(rs.getString("cei_url"));
        construction.setCeiCode(rs.getString("cei_code"));
        construction.setCeiFileName(rs.getString("cei_file_name"));

        return construction;
    }
}
