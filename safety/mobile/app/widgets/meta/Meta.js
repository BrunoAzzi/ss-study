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
import MetaLogic from  './MetaLogic';
import MetaDashboard from './MetaDashboard';

/**
 * Define a classe principal do Widget
 */
class Meta extends Widget {
  constructor(){
    super();

    //Adiciona um componente gráfico na tela do dashboard
    this.getService(ADD_DASHBOARD_VIEWS)(
      <MetaDashboard/>
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
    backgroundColor: '#F5FCFF'
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
export default Meta = new Meta();
