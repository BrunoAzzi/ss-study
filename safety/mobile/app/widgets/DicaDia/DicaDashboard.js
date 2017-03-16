/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
 import {Button} from '../../components';
 import {DashboardViewIcon} from '../../components';
 import {colors} from '../../components';
 import LogicComponent from '../LogicComponent';

 /**
 * Importa componente de navegação entre telas
 */
import {Scene, Actions} from 'react-native-router-flux';

/**
 * Importa os modulos criados pelo widget atual
 */
import DicaLogic from  './DicaLogic'

/**
 * Carrega icone do componente
 */
const icon = require(`PocReact/app/resources/widgets/dicas/iconDicaDia.png`);

/**
 * Define as funções que serão mapeadas em estados dentro de LogicComponent
 */
let getDicaJson = () => DicaLogic.getDicaJson()

/**
 * Define o componente gráfico do widget Dica que aparecerá
 * na tela do Dashboard.
 */
class DicaDashboard  extends LogicComponent {
  constructor (props) {
    super(props, DicaLogic, [getDicaJson]);
    DicaLogic.getDicaDiaRequisicao();
  }

  render() {
    
    corDica = undefined;

    if (this.state.getDicaJson != undefined) {
      if(this.state.getDicaJson.idCategoria == 1) {
          corDica = colors.AMARELO;
      } else if (this.state.getDicaJson.idCategoria == 2) {
        corDica = colors.VERMELHO;
      } else if (this.state.getDicaJson.idCategoria == 3) {
        corDica = colors.PURPURA;
      } else if (this.state.getDicaJson.idCategoria == 4) {
        corDica = colors.ANIS;
      } else {
        corDica = colors.VERDE;
      }
    }

    //Define a renderização do componente
    return (
      <DashboardViewIcon
        key={corDica}
        icon={icon}
        color={corDica}
        background={colors.DETALHE}
        style={styles.container}
        onPress={() => Actions.dicaDiaScene()}>
          <Text style={styles.tituloDica}>Dica do Dia</Text>
          <Text style={styles.descricaoDica}>{this.state.getDicaJson.tituloDica}...</Text>
      </DashboardViewIcon>
    )
  }
}

/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  tituloDica: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 10,
  },
  descricaoDica: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  }
})
/**
 * Exporta o componente criado
 */
export default DicaDashboard
