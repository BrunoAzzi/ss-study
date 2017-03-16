package br.sc.org.sesi.smart.root.dao.coachee;

import java.util.List;

public interface CoacheeDAO {
	
//	GET ALL Coachee
	public List<?> getAllCoachee();
	
//	INSERT PERFIL COMPORTAMENTAL NO COACHEE
	public void insertPerfilComportamentalCoachee(Long id, String perfilCoachee);
	

}
