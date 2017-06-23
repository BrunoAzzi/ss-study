package br.org.sesisc.smart.safety.repositories.mapper;

import br.org.sesisc.smart.safety.models.Construction;
import br.org.sesisc.smart.safety.models.Sector;
import br.org.sesisc.smart.safety.models.User;
import br.org.sesisc.smart.safety.repositories.SectorRepository;
import br.org.sesisc.smart.safety.repositories.dao.SectorDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

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
        construction.setLogoFileName(rs.getString("logo_file_name"));
        construction.setCeiUrl(rs.getString("cei_url"));
        construction.setCeiCode(rs.getString("cei_code"));
        construction.setCeiFileName(rs.getString("cei_file_name"));
        construction.setSectors(pullSectors(construction.getId()));

        return construction;
    }


    private List<Sector> pullSectors(long constructionId) {
        SectorRepository repository = new SectorDao();
        return repository.where(new String[] {"construction_id"}, new Object[] {constructionId});
    }
}
