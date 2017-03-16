package br.sc.org.sesi.smart.rest.coachee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.rest.coachee.holder.CoacheeRequest;
import br.sc.org.sesi.smart.rest.coachee.holder.CoacheeResponse;
import br.sc.org.sesi.smart.root.dao.coachee.CoacheeDAO;

@RestController
public class CoacheeControllerImpl implements CoacheeController {

	@Autowired
	private CoacheeDAO coacheeDAO;
	
//	GET ALL 
	@Override
	@RequestMapping(value = "/getAllCoachee")
	@Transactional
	public List<?> getAllUsuarioTeste() {		
		CoacheeResponse response = new CoacheeResponse();
		response.setListaUsuarioTeste(coacheeDAO.getAllCoachee());
		return response.getListaUsuarioTeste();
	}

//	INSERT PERFIL COMPORTAMENTAL NO COACHEE
	@Override
	@RequestMapping(value = "/insertPerfilComportamentalCoachee")
	@Transactional
	public CoacheeResponse insertPerfilComportamentalCoachee(@RequestBody CoacheeRequest request) {
		CoacheeResponse response = new CoacheeResponse();
		response.setId(request.getId());
		response.setPerfilCoachee(request.getPerfilCoachee());
		coacheeDAO.insertPerfilComportamentalCoachee(request.getId(), request.getPerfilCoachee());
		return response;
	}
	
}
