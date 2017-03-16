package br.sc.org.sesi.smart.root.dao.dicas;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import com.fasterxml.jackson.databind.JsonNode;

import br.sc.org.sesi.smart.model.Dica;


public class DicasHelper {
	
	public static List<Dica> getListaDicasWordpress(JSONArray jsonArray) {
		List<Dica> listDicas = new ArrayList<Dica>();
		for (int i = 0; i < jsonArray.length(); i++) {
			JSONObject js = jsonArray.getJSONObject(i);			
			listDicas.add( new Dica(					
					(Long) js.get("id"),
					(JsonNode) js.getJSONObject("content").get("rendered"),
					(JsonNode) js.getJSONObject("title").get("rendered")
			));					
		}
		return listDicas;
	}
	
}
