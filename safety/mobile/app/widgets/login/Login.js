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
// import {ADD_DASHBOARD_VIEWS} from '../dashboard/Dashboard';

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import LoginScene from './LoginScene';
import LoginLogic from  './LoginLogic';

/**
 * Define a classe principal do Widget
 */
class Login extends Widget {
  constructor(){
    super();
    //Adiciona um componente gráfico na tela do dashboard
    // this.getService(ADD_DASHBOARD_VIEWS)(
    //   <WaterDashboard/>
    // );
    //Adiciona uma nova sena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="login" component={LoginScene} title="Login" initial={false} renderBackButton={() => (undefined)}/>
    );
    // Adiciona um botão na tela de menu que direcionará para a sena definida acima (WaterScene)
    this.getService(ADD_MENU_VIEW)(
      <View >
        <Button label='Logout' onPress={()=>{
          LoginLogic.userLogout();
        }}/>
      </View>
    );
  }
}

/**
 * Cria um objeto único para representar o widget
 */
export default Login = new Login();
