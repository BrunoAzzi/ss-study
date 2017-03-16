package br.sc.org.sesi.smart.rest.coachee;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.sc.org.sesi.smart.rest.coachee.holder.CoacheeRequest;
import br.sc.org.sesi.smart.rest.coachee.holder.CoacheeResponse;

public interface CoacheeController {
	
//	GET ALL COACHEE
	@RequestMapping(value = "/getAllCoachee", method = RequestMethod.GET)
	@Transactional
	List<?> getAllUsuarioTeste();
	
//	INSERT PERFIL COMPORTAMENTAL NO COACHEE
	@RequestMapping(value = "/insertPerfilComportamentalCoachee", method = RequestMethod.POST)
	@Transactional
	CoacheeResponse insertPerfilComportamentalCoachee(@RequestBody CoacheeRequest request);
	
	

}
