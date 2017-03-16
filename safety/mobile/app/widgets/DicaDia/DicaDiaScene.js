/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    TouchableOpacity,
    TouchableHighlight,
    Image
} from 'react-native';

var urlServidor = "http://10.1.62.206:8080/template/";

/**
 * Carrega icone do componente
 */
const icon = require(`PocReact/app/resources/widgets/dicas/icon.png`);

/**
 * Importa os modulos criados pelo widget atual
 */
import {Button} from '../../components';
 import {colors} from '../../components';
import DicaLogic from  './DicaLogic'
import LoginLogic from  '../login/LoginLogic'
import LogicComponent from '../LogicComponent';
import ImageTextTematica from '../../components/ImageTextTematica';
import ButtonLikeDica from '../../components/ButtonLikeDica';

/**
 * Define as funções que serão mapeadas em estados dentro de LogicComponent
 */
let getDicaJson = () => DicaLogic.getDicaJson()
let getDicaHistoricoJson = () => DicaLogic.getDicaHistoricoJson()
let getLastDicaHistoricoJson = () => DicaLogic.getLastDicaHistoricoJson();

/**
 * Define componente gráfico (Scene) do widget Dica que será
 * adicionado nas cenas de navegação e será acessado via menu
 * do usuário conforme especificado nos serviços do widget Dica
 */
class DicaDiaScene extends LogicComponent {

  constructor (props) {
    super(props, DicaLogic, [getDicaJson, getDicaHistoricoJson, getLastDicaHistoricoJson]);
    DicaLogic.getDicaDiaRequisicao();
    DicaLogic.getDicaHistoricoRequisicao();
    DicaLogic.getLastDicaHistoricoRequisicao();

  /* REQUISIÇÃO PARA INSERIR A DICA NO HISTÓRICO QUANDO A MESMA FOR ABERTA */
    fetch(urlServidor + "insertHistoricoDica", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idWordpress: this.state.getDicaJson.idDicaVista,
        idUsuario: this.state.getDicaJson.idUsuario,
        idCategoria: this.state.getDicaJson.idCategoria,
        dica: this.state.getDicaJson.dica,
        curtida: this.state.getDicaJson.curtida
      })
    })
  };

  render() {

    corBackgroundDica = "";
    iconDicaScene = "";
    tituloCategoria = "";

    if(this.state.getDicaJson.idCategoria == 1) {
        corBackgroundDica = colors.AMARELO;
        iconDicaScene = require('PocReact/app/resources/widgets/dicas/ic_alimentacao_active.png');
        tituloCategoria = "ALIMENTAÇÃO";
    } else if (this.state.getDicaJson.idCategoria == 2) {
      corBackgroundDica = colors.VERMELHO;
      iconDicaScene = require('PocReact/app/resources/widgets/dicas/ic_exercicio_active.png');
      tituloCategoria = "ATIVIDADE FÍSICA";
    } else if (this.state.getDicaJson.idCategoria == 3) {
      corBackgroundDica = colors.PURPURA;
      iconDicaScene = require('PocReact/app/resources/widgets/dicas/ic_estresse_active.png');
      tituloCategoria = "ESTRESSE";
    } else if (this.state.getDicaJson.idCategoria == 4) {
      corBackgroundDica = colors.ANIS;
      iconDicaScene = require('PocReact/app/resources/widgets/dicas/ic_relacionamento_active.png');
      tituloCategoria = "RELACIONAMENTO SOCIAL";
    } else {
      corBackgroundDica = colors.VERDE;
      iconDicaScene = require('PocReact/app/resources/widgets/dicas/ic_prevencao_active.png');
      tituloCategoria = "AÇÕES PREVENTIVAS";
    }

    //Define a renderização do componente
    if(this.state.getDicaJson != undefined && this.state.getDicaHistoricoJson != undefined && this.state.getLastDicaHistoricoJson != undefined) {
      return (
        <View style={styles.container} backgroundColor={corBackgroundDica}>
          <Text style={styles.tituloCategoria}>{tituloCategoria}</Text>
          <Image style={styles.iconCategoria} source={iconDicaScene} />
          <Text style={styles.textDica}>{this.state.getDicaJson.dica}</Text>
          <ButtonLikeDica
              style={styles.botaoLike}
              likeAtual={this.state.getLastDicaHistoricoJson[0].curtida ? 1 : 0}
              onPress={(likeAtual) => DicaLogic.insertLikeDica(this.state.getDicaJson.idDicaVista, this.state.getDicaJson.idUsuario, likeAtual)}
          />
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.info}>Erro ao realizar a consulta! :( </Text>
        </View>
      )
    }
  }
}

/**
 * Define os estilos utilizados
 */
const styles = {
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textDica: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 10
  },
  tituloCategoria: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  iconCategoria: {
    width: 200
  }
}

/**
 * Exporta o componente criado
 */
export default DicaDiaScene
