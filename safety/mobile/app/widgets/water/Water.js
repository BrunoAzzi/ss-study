/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
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
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import WaterScene from './WaterScene';
import WaterLogic from  './WaterLogic';
import WaterDashboard from './WaterDashboard';

/**
 * Define a classe principal do Widget
 */
class Water extends Widget {
  constructor(){
    super();
    //Adiciona um componente gráfico na tela do dashboard
    this.getService(ADD_DASHBOARD_VIEWS)(
      <WaterDashboard/>
    );
    //Adiciona uma nova sena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="water" component={WaterScene} title="Water"/>
    );
    //Adiciona um botão na tela de menu que direcionará para a sena definida acima (WaterScene)
    this.getService(ADD_MENU_VIEW)(
      <View style={styles.view}>
        <Button label='Ver Water' onPress={()=>{
          Actions.water();
        }}/>
      </View>
    );
  }
}

/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth:1,
    //borderRadius:6,
    padding: 10,
    backgroundColor: '#E0E0E0',
  }
});

/**
 * Cria um objeto único para representar o widget
 */
export default Water = new Water();
