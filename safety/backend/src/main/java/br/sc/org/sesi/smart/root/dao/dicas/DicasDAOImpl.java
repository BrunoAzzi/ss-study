package br.sc.org.sesi.smart.root.dao.dicas;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.TreeMap;

import javax.sql.DataSource;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import br.sc.org.sesi.smart.model.Dica;

@Repository
@Transactional
public class DicasDAOImpl implements DicasDAO {

	@Autowired
	private DataSource dataSource;

	String data;
	DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
	
	// GET ALL DICAS
	@Override
	@Transactional
	public List<Dica> getAllDicas() {
		String sql = "SELECT * FROM dicas;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();

		List<Dica> listaDicasBanco = template.query(sql, mapParam, new RowMapper<Dica>() {
			public Dica mapRow(ResultSet rs, int rowNum) throws SQLException {
				Dica dica = new Dica();
				dica.setId(rs.getLong("id"));
				dica.setIdDicaVista(rs.getLong("id_dica_vista"));
				dica.setIdUsuario(rs.getLong("id_usuario"));
				dica.setIdCategoria(rs.getLong("id_categoria"));
				dica.setDica(rs.getString("dica"));
				dica.setDataCadastro(rs.getString("data_cadastro"));
				return dica;
			}
		});
		return listaDicasBanco;
	}
	
	//	GET - DICAS VISTAS JÁ CADASTRADAS BY USER E CATEGORIA
	@Override
	@Transactional
	public List<Dica> getAllDicasByUsuarioAndCategoria(Long idUsuario, Long idCategoria) {
		String sql = "SELECT id_usuario, id_dica_vista, id_categoria, titulo_dica, dica, data_cadastro FROM dicas WHERE id_usuario = :idUsuario AND id_categoria = :idCategoria;";
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("idCategoria", idCategoria);
		
		List<Dica> listaDicasByUsuarioAndCategoria = template.query(sql, mapParam, new RowMapper<Dica>() {
			public Dica mapRow(ResultSet rs, int rowNum) throws SQLException {
				Dica dica = new Dica();
				dica.setIdUsuario(rs.getLong("id_usuario"));
				dica.setIdDicaVista(rs.getLong("id_dica_vista"));
				dica.setIdCategoria(rs.getLong("id_categoria"));
				dica.setTituloDica(rs.getString("titulo_dica"));
				dica.setDica(rs.getString("dica"));
				dica.setDataCadastro(rs.getString("data_cadastro"));
				return dica;
			}
		});
		
		return listaDicasByUsuarioAndCategoria;
	}

//	INSERT - SALVA ID_DICA, ID_USUARIO, TITULO_DICA, DICA, CATEGORIA E DATA DE CADASTRO
	@Override
	@Transactional
	public void insertDica(Long idDicaVista, Long idUsuario, Long idCategoria, String tituloDica, String dica, String dataCadastro) {	
		
		Date dataAtual = new Date();
		dataCadastro = simpleDateFormat.format(dataAtual);
		
		String sql = "INSERT INTO dicas (id_dica_vista, id_usuario, id_categoria, titulo_dica, dica, data_cadastro) VALUES (:idDicaVista, :idUsuario, :idCategoria, :tituloDica, :dica, :dataCadastro);";		
		NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(dataSource);
		MapSqlParameterSource mapParam = new MapSqlParameterSource();
		mapParam.addValue("idDicaVista", idDicaVista);
		mapParam.addValue("idUsuario", idUsuario);
		mapParam.addValue("idCategoria", idCategoria);
		mapParam.addValue("tituloDica", tituloDica);
		mapParam.addValue("dica", dica);
		mapParam.addValue("dataCadastro", dataCadastro);
		template.update(sql, mapParam);
	}

	// PEGA JSON DO WORDPRESS EM STRING
	@Override
	@Transactional
	public List<Dica> getJsonWordpress() {
		URL url;
		JSONArray array = new JSONArray();
		List<Dica> listDicaWordpress = new ArrayList<Dica>();

		try {
//			http://rindolitros.com.br/wp-json/wp/v2/posts/?categories=12
			url = new URL("http://rindolitros.com.br/wp-json/wp/v2/posts?filter[orderby]=rand");
			HttpURLConnection connectionWordpress = (HttpURLConnection) url.openConnection();
			connectionWordpress.setRequestMethod("GET");
			connectionWordpress.setRequestProperty("Accept", "application/json");
			BufferedReader bufferResponseWordpress = null;
			String wordpressResponse = "";
			String context;
			bufferResponseWordpress = new BufferedReader(new InputStreamReader(connectionWordpress.getInputStream(), "UTF-8"));

			while ((context = bufferResponseWordpress.readLine()) != null) {
				wordpressResponse = context;
			}
			array = new JSONArray(wordpressResponse);

			for (int i = 0; i < array.length(); i++) {
				JSONObject jsonObj = array.getJSONObject(i);
				ObjectMapper mapper = new ObjectMapper();
				Dica dica = mapper.readValue(jsonObj.toString(), Dica.class);
				listDicaWordpress.add(dica);
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
		return listDicaWordpress;
	}

//	LISTA E SALVA NO BANCO LOCAL AS DICAS NÃO VISTAS PELO USUÁRIO
	@Override
	@Transactional
	@Secured(value = "ROLE_EXEMPLO")
    public Dica getDicaNaoLida(){
       
		// Parâmetros para pegar todos os registros do banco local do usuário x e da categoria x
        Long idUsuario = (long) 1;
        Long categoriaDica = (long) 1;
        
        //Obtem todas as dicas do banco por usuario e categoria
        List<Dica> listaDicaByUserAndCategoria = getAllDicasByUsuarioAndCategoria(idUsuario, categoriaDica);
        
        // Instância uma nova data com a data atual do servidor e transforma ela em String
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date dataAtual = new Date();
        final String dataAtualString = simpleDateFormat.format(dataAtual);
        
        // Percorre os registros do banco do usuário e da categoria e obtem uma dica com a data atual se existir uma
        // Complexidade: O(n) no pior caso
        Optional<Dica> any = listaDicaByUserAndCategoria
            .stream() //todas as dicas
            .filter((y) -> y.getDataCadastro().equals(dataAtualString))  //apenas as dicas com a data atual
            .findAny(); //pega qualquer elemento
        
        //se existe uma dica com a data atual
        if(any.isPresent()){
            //apresenta a dica
        	System.out.println(any.isPresent());
            System.out.println("Lista do dia já cadastrada!");
            return any.get();       
        }else{
        	//Obtem todas as dicas do wordpress
            List<Dica> listaDicaWordpress = getJsonWordpress();
        
            //Popula TreeMap com todas as dicas do banco conforme usuário e categoria 
            //utilizando o id da dica vista como chave (key) para realizar uma consulta 
            //rápida pela chave posteriormente
            //Complexidade: (n log n) operações
            TreeMap<Long, Dica> banco_map = new TreeMap<>();
            listaDicaByUserAndCategoria.stream().forEach((y) -> {
                banco_map.put(y.getIdDicaVista(), y);
            });
            
            //Procura nas dicas do wordpress se existe uma dica x que não está
            //no banco local, caso encontre insere no banco e retorne a dica imediatamente
            //Complexidade: (n log n) operações no pior caso
            for(Dica x : listaDicaWordpress){
                if(!banco_map.containsKey(x.getId())){
                    insertDica(x.getId(), idUsuario, categoriaDica, x.getTitle().get("rendered").textValue(), x.getContent().get("rendered").textValue(), dataAtualString);
                    return x;
                }
            }
            //Caso todas as dicas do banco esteja no wordpress então nada é feito e retornado null
            return null;
        }
    }

}