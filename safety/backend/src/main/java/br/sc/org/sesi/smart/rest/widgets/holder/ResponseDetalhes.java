package br.sc.org.sesi.smart.rest.widgets.holder;

import java.io.Serializable;
import java.util.List;

public class ResponseDetalhes implements Serializable {
	// ME DIZ O QUE O SERVIDOR VAI RESPONDER PARA O CLIENT
	private List<?> images;			//lista com o nome das imagens a serem renderizadas
	private List<?> descriptions;	//lista com as descrições do widget
	private List<?> permissions;	//lista com as permissões do widget
	private String 	widget;			//e o nome do widget do qual pertence esses detalhes
	
	public List<?> getImages() {
		return images;
	}
	public void setImages(List<?> images) {
		this.images = images;
	}
	public List<?> getDescriptions() {
		return descriptions;
	}
	public void setDescriptions(List<?> descriptions) {
		this.descriptions = descriptions;
	}
	public List<?> getPermissions() {
		return permissions;
	}
	public void setPermissions(List<?> permissions) {
		this.permissions = permissions;
	}
	public String getWidget() {
		return widget;
	}
	public void setWidget(String widget) {
		this.widget = widget;
	}
}
