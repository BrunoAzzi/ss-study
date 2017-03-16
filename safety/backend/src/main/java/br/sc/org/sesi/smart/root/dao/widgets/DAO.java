package br.sc.org.sesi.smart.root.dao.widgets;

import java.util.List;

public interface DAO {
	
//	GET NEXT WIDGETS
	public List<?> getWidgets(int id_start, int num_rows);
	
	public List<?> getImages(String widget);
	public List<?> getDescriptions(String widget);
	public List<?> getPermissions(String widget);
}
