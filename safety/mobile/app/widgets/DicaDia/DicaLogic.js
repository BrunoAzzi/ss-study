import Logic from '../Logic'

// Variáveis
var STORAGE_KEY
var urlServidor = "http://10.1.62.206:8080/template/";

/**
 * Define a logica do widget
 */
class DicaLogic extends Logic{

  constructor () {
    super();
    this.dicaJson = "";
    this.dicaHistoricoJson = undefined;
    this.lastDicaHistorico = undefined;
  }

/* REQUISIÇÃO PARA PEGAR O TOKEN DE AUTENTICAÇÃO */
  getTokenLogin() {
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
  };

/* REQUISIÇÃO PARA PEGAR A DICA DO DIA */
  getDicaDiaRequisicao() {
    /* REQUISIÇÃO PARA PEGAR A DICA DO DIA */
    fetch(urlServidor + "getDicaNaoLida", {
      method: 'GET',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + STORAGE_KEY
      }
    }).then((response) => response.json()).then((responseData) => {
        this.dicaJson = responseData;
        this.calls();
    })
    .done();
  };

  getDicaJson() {
    return this.dicaJson;
  };

// ========================================================================================================================================

/* REQUISIÇÃO PARA PEGAR TODOS OS REGISTROS DO HISTORICO DE DICAS */
  getDicaHistoricoRequisicao() {
    fetch(urlServidor + "getAllHistoricoDicas", {
      method: 'GET',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + STORAGE_KEY
      }
    }).then((response) => response.json()).then((responseData) => {
        this.dicaHistoricoJson = responseData;
        this.calls();
    })
    .done();
  };

  getDicaHistoricoJson() {
    return this.dicaHistoricoJson;
  };

// ========================================================================================================================================

  /* INSERE LIKE NA DICA */
  insertLikeDica(idDicaVista, idUsuario, like) {
    fetch( urlServidor + "insertLikeDica", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + STORAGE_KEY
      },
      body: JSON.stringify({
        idWordpress: idDicaVista,
        idUsuario: idUsuario,
        curtida: like
      })
    })
   };

// ========================================================================================================================================

/* PEGA A ÚLTIMA DICA DO HISTÓRICO CADASTRADA NA DATA ATUAL PARA UM DETERMINADO USUÁRIO */
  getLastDicaHistoricoRequisicao() {
    fetch(urlServidor + "getLastDicaHistorico", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + STORAGE_KEY
      },
      body: JSON.stringify({
        idUsuario: 1,
        dataVisualizacao: "2017-03-14",
      })
    }).then((response) => response.json()).then((responseData) => {
      this.lastDicaHistorico = responseData;
      this.calls();
    }).done();
  };

  getLastDicaHistoricoJson() {
    return this.lastDicaHistorico;
  };

// ========================================================================================================================================

}

/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default DicaLogic = new DicaLogic()
