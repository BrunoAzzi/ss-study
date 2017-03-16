// IMPORTS GERAIS
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import {Scene, Actions} from 'react-native-router-flux';
import {Button} from '../../components';

// Importa os serviços de outros widgets para serem utilizados
import {ADD_MAIN_SCENE} from '../main/Main';
import {ADD_MENU_VIEW} from '../menu/Menu';
import {ADD_DASHBOARD_VIEWS} from '../dashboard/Dashboard';

// Importa os modulos criados para widget atual
import Widget from '../Widget';
import PerfilComportamentalScene from './PerfilComportamentalScene';
import PerfilComportamentalLogic from  './PerfilComportamentalLogic';
import PerfilComportamentalDashboard from './PerfilComportamentalDashboard';

class PerfilComportamental extends Widget {

  constructor() {
    super();

    //Adiciona um componente gráfico na tela do dashboard
    // this.getService(ADD_DASHBOARD_VIEWS)(
    //   <PerfilComportamentalDashboard/>
    // );

    //Adiciona uma nova sena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="perfilComportamental" component={PerfilComportamentalScene} title="Perfil Comportamental"/>
    );

    //Adiciona um botão na tela de menu que direcionará para a cena definida acima (DicaScene)
    this.getService(ADD_MENU_VIEW)(
      <View style={styles.view}>
        <Button label='Perfil Comportamental' onPress={()=>{ Actions.perfilComportamental() }}/>
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

export default PerfilComportamental = new PerfilComportamental();
