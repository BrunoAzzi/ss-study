package br.sc.org.sesi.smart.rest.widgets;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.sc.org.sesi.smart.rest.widgets.holder.ResponseDetalhes;
import br.sc.org.sesi.smart.rest.widgets.holder.ResponseWidgets;
import br.sc.org.sesi.smart.root.dao.widgets.DAO;

@RestController
public class ControllerImpl implements Controller {

	@Autowired
	private DAO dao;

	
//	GET NEXT WIDGETS
	@Override
	@RequestMapping(
		value = "/getWidgets", 
		params = { "id_start", "num_rows" }, 
		method = RequestMethod.GET)
	@Transactional
	public ResponseWidgets getWidgets(
		@RequestParam("id_start") Integer id_start, 
		@RequestParam("num_rows") Integer num_rows
	){
		ResponseWidgets response = new ResponseWidgets();
		
		response.setRows(dao.getWidgets(id_start, num_rows));
		
		return response;
	}
	
	//GET WIDGET DETALHES
	@RequestMapping(
		value = "/getDetalhes", 
		params = { "widget"}, 
		method = RequestMethod.GET)
	@Transactional
	public ResponseDetalhes getDetalhes(
		@RequestParam("widget") String widget
	){
		ResponseDetalhes response = new ResponseDetalhes();
		
		response.setImages(dao.getImages(widget));
		response.setDescriptions(dao.getDescriptions(widget));
		response.setPermissions(dao.getPermissions(widget));
		response.setWidget(widget);
		
		return response;
	}
	
	//GET WIDGET IMAGE and ICON
	@RequestMapping(
		value = "/getImage", 
		params = { "dir", "name" }, 
		method = RequestMethod.GET)
	public void showImage(HttpServletRequest request, HttpServletResponse response, 
	  @RequestParam("dir") String dir,
	  @RequestParam("name") String name
	){
		try {
			ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
		    File path  = new File(request.getServletContext().getRealPath(""));	//Here is ../backend/src/main/webapp/
		    path = path.getParentFile();	//cd ..
		    path = new File(path, "resources/widgets");
		    path = new File(path, dir+File.separatorChar+name);//"coach/1.jpg"
	
		    BufferedImage image =ImageIO.read(path);
	    	ImageIO.write(image, name.substring(name.lastIndexOf(".")+1, name.length()), outputStream);
	    	
		    response.setHeader("Cache-Control", "no-store");
		    response.setHeader("Pragma", "no-cache");
		    response.setDateHeader("Expires", 0);
		    response.setContentType("image/jpeg");
	    
	        ServletOutputStream responseOutputStream = response.getOutputStream();
		    responseOutputStream.write(outputStream.toByteArray());
		    responseOutputStream.flush();
		    responseOutputStream.close();
	    } catch (Throwable ex) {
	    	try{
	    		response.sendError(HttpServletResponse.SC_NOT_FOUND);
	    	}catch(Throwable ex2){
	    		
	    	}
	    }
	}
}
