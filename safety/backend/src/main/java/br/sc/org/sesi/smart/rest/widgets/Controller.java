package br.sc.org.sesi.smart.rest.widgets;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import br.sc.org.sesi.smart.rest.widgets.holder.ResponseDetalhes;
import br.sc.org.sesi.smart.rest.widgets.holder.ResponseWidgets;


public interface Controller {
	
	//GET NEXT WIDGETS
	@RequestMapping(
		value = "/getWidgets", 
		params = { "id_start", "num_rows" }, 
		method = RequestMethod.GET)
	@Transactional
	ResponseWidgets getWidgets(
		@RequestParam("id_start") Integer id_start, 
		@RequestParam("num_rows") Integer num_rows
	);
	
	//GET WIDGET DETALHES
	@RequestMapping(
		value = "/getDetalhes", 
		params = { "widget"}, 
		method = RequestMethod.GET)
	@Transactional
	ResponseDetalhes getDetalhes(
		@RequestParam("widget") String widget
	);
	
	@RequestMapping(
		value = "/getImage", 
		params = { "dir", "name" }, 
		method = RequestMethod.GET)
	public void showImage(HttpServletRequest request, HttpServletResponse response, 
	  @RequestParam("dir") String dir,
	  @RequestParam("name") String name
	);
	
}
