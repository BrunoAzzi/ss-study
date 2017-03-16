package br.sc.org.sesi.smart.rest.widgets.holder;

import java.io.Serializable;
import java.util.List;

public class ResponseWidgets implements Serializable {
	// ME DIZ O QUE O SERVIDOR VAI RESPONDER PARA O CLIENT
	private List<?> rows;		//linhas a serem reotrnadas

	public List<?> getRows() {
		return rows;
	}

	public void setRows(List<?> rows) {
		this.rows = rows;
	}
}
