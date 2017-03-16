/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

/**
 * Importa componente de navegação entre telas
 */
import {Scene, Actions} from 'react-native-router-flux';

/**
 * Importa componentes criados para a plataforma
 */
import {Button} from '../../components';

/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_MAIN_SCENE} from '../main/Main';
import {ADD_MENU_VIEW} from '../menu/Menu';
import {ADD_DASHBOARD_VIEWS} from '../dashboard/Dashboard';

/**
 * Importa os módulos criados para widget atual
 */
import Widget from '../Widget';
import DicaDiaScene from './DicaDiaScene';
import DicaHistoricoScene from './DicaHistoricoScene';
import DicaHistoricoDetailScene from './DicaHistoricoDetailScene';
import DicaLogic from  './DicaLogic';
import DicaDashboard from './DicaDashboard';

/**
 * Define a classe principal do Widget
 */
class Dica extends Widget {
  constructor(){
    super();

    //Adiciona um componente gráfico na tela do dashboard
    this.getService(ADD_DASHBOARD_VIEWS)(
      <DicaDashboard/>
    );

    //Adiciona uma nova cena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="dicaDiaScene" component={DicaDiaScene} title="Dica do Dia"/>
    );

    //Adiciona uma nova cena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="dicaHistoricoScene" component={DicaHistoricoScene} title="Histórico das Dicas"/>
    );

    //Adiciona uma nova cena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="dicaHistoricoDetailScene" component={DicaHistoricoDetailScene} title="Detalhes da Dica"/>
    );

    //Adiciona um botão na tela de menu que direcionará para a cena definida acima (DicaScene)
    this.getService(ADD_MENU_VIEW)(
      <View style={styles.view}>
        <Button label='Histórico de Dicas' onPress={()=>{ Actions.dicaHistoricoScene() }}/>
      </View>
    );
  }
}

/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E0E0E0',
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    },
});

/**
 * Cria um objeto único para representar o widget
 */
export default Dica = new Dica();
