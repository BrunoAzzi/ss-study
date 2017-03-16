import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {Button} from '../../components';

import DicaLogic from  './DicaLogic'
import LoginLogic from  '../login/LoginLogic'
import LogicComponent from '../LogicComponent';
import {colors} from '../../components';
import ImageTextTematica from '../../components/ImageTextTematica';
import ButtonLikeDica from '../../components/ButtonLikeDica';

/**
 * Carrega icone do componente
 */
const imageLike = require(`PocReact/app/resources/widgets/dicas/Like.png`);
const imageDislike = require(`PocReact/app/resources/widgets/dicas/Dislike.png`);

class DicaHistoricoDetailScene extends LogicComponent {

  constructor(props) {
    super(props, DicaLogic, []);
    console.log(this.props);
  };

  render(){

    corHistoricoDicaDetail = "";
    iconDicaHistoricoDetail = "";
    tituloCategoriaHistoricoDetail = "";

    if(this.props.idCategoria == 1) {
        corHistoricoDicaDetail = colors.AMARELO;
        iconDicaHistoricoDetail = require('PocReact/app/resources/widgets/dicas/ic_alimentacao_active.png');
        tituloCategoriaHistoricoDetail = "ALIMENTAÇÃO";
    } else if (this.props.idCategoria == 2) {
      corHistoricoDicaDetail = colors.VERMELHO;
      iconDicaHistoricoDetail = require('PocReact/app/resources/widgets/dicas/ic_exercicio_active.png');
      tituloCategoriaHistoricoDetail = "ATIVIDADE FÍSICA";
    } else if (this.props.idCategoria == 3) {
      corHistoricoDicaDetail = colors.PURPURA;
      iconDicaHistoricoDetail = require('PocReact/app/resources/widgets/dicas/ic_estresse_active.png');
      tituloCategoriaHistoricoDetail = "ESTRESSE";
    } else if (this.props.idCategoria == 4) {
      corHistoricoDicaDetail = colors.ANIS;
      iconDicaHistoricoDetail = require('PocReact/app/resources/widgets/dicas/ic_relacionamento_active.png');
      tituloCategoriaHistoricoDetail = "RELACIONAMENTO SOCIAL";
    } else {
      corHistoricoDicaDetail = colors.VERDE;
      iconDicaHistoricoDetail = require('PocReact/app/resources/widgets/dicas/ic_prevencao_active.png');
      tituloCategoriaHistoricoDetail = "AÇÕES PREVENTIVAS";
    }

    return(
      <View style={styles.container} backgroundColor={corHistoricoDicaDetail}>
        <Text style={styles.tituloCategoria}>{tituloCategoriaHistoricoDetail}</Text>
        <Image style={styles.iconCategoria} source={iconDicaHistoricoDetail} />
        <Text style={styles.textDica}>{this.props.dica}</Text>
      </View>
    )
  }
}

/**
 * Define os estilos utilizados
 */
 const styles = {
   container: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 55
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

export default DicaHistoricoDetailScene;
