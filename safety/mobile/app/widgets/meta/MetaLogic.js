import Logic from '../Logic'
import {Alert, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';

/**
 * Define a logica do widget
 */
var STORAGE_KEY = 'id_token';
var urlServidor = "http://10.1.62.206:8080/template/";
class MetaLogic extends Logic{

  constructor () {
    super();
    this.metaJson = "";
  }

  getTokenLogin(){
    /* REQUISIÇÃO PARA PEGAR O TOKEN DE AUTENTICAÇÃO */
    fetch(urlServidor + "login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: "admin",
        password: "123",
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      STORAGE_KEY = responseData.token;
    })
    .done();
    return STORAGE_KEY;
  }

  getMetaRequisicao() {
    /* REQUISIÇÃO PARA PEGAR A META */
    fetch(urlServidor + "getAllMeta", {
      method: 'GET',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + STORAGE_KEY
      }
    }).then((response) => response.json()).then((responseData) => {
        this.metaJson = responseData;
        // alert(this.dicaJson.dica);
        this.calls();
    })
    .done();
  }

  getMetaJson() {
    return this.metaJson;
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default MetaLogic = new MetaLogic()
