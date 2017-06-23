package br.org.sesisc.smart.safety.repositories.mapper;

import br.org.sesisc.smart.safety.models.Floor;
import br.org.sesisc.smart.safety.models.Sector;
import br.org.sesisc.smart.safety.repositories.FloorRepository;
import br.org.sesisc.smart.safety.repositories.dao.FloorDao;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class SectorMapper  implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int i) throws SQLException {
        Sector sector = new Sector();

        sector.setId(rs.getLong("id"));
        sector.setName(rs.getString("name"));
        sector.setFloors(pullFloors(sector.getId()));

        return sector;
    }

    private List<Floor> pullFloors(long sectorId) {
        FloorRepository repository = new FloorDao();
        return repository.where(new String[] {"sector_id"}, new Object[] {sectorId});
    }
}
