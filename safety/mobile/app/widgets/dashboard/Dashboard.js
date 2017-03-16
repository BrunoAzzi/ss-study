/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

/**
 * Importa componente de navegação entre telas
 */
import {Scene, Actions} from 'react-native-router-flux';

/**
 * Importa componentes criados para a plataforma
 */
import {transform} from '../../util';

/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_MAIN_SCENE} from '../main/Main';

/**
 * Define os novos serviços criados para serem utilizados por outros widgets
 */
const ADD_DASHBOARD_ICONS = {
  key:'ADD_DASHBOARD_ICONS',
  widget: undefined
}
const ADD_DASHBOARD_VIEWS = {
  key:'ADD_DASHBOARD_VIEWS',
  widget: undefined
}
const ADD_DASHBOARD_VIEWS_SMALL = {
  key:'ADD_DASHBOARD_VIEWS_SMALL',
  widget: undefined
}

/**
 * Importa imagem de icone para botão que acessar o menu
 */
const iconMenu = require('../../resources/menu.png');

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import DashboardScene from './DashboardScene';
import DashboardIcons from './DashboardIcons';
import DashboardLogic from './DashboardLogic';

/**
 * Define a classe principal do Widget
 */
class Dashboard extends Widget {
  constructor(){
    super();

    /**
     * Adiciona os novos serviços fornecidos por este widget
     */
    this.addService(ADD_DASHBOARD_ICONS,
      (icon) => DashboardLogic.addIcons(icon),
      'Adiciona icones na barra do dashboard'
    );

    this.addService(ADD_DASHBOARD_VIEWS,
      (view) => DashboardLogic.addViews(view),
      'Adiciona views na area do dashboard em coluna simples'
    );

    this.addService(ADD_DASHBOARD_VIEWS_SMALL,
      (view) => DashboardLogic.addSmalls(view),
      'Adiciona views na area do dashboard em coluna dupla'
    );

    //Adiciona uma a sena do dashboard como sena inicial na navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="dashboard" component={DashboardScene} title="SMART HEALTH" initial={true}
        titleStyle={{textAlign:'left'}}
        //define função que renderiza o botão de voltar
        renderBackButton={() => (
           <TouchableOpacity style={styles.barTH} onPress={Actions.menu}>
             <Image style={styles.barImage} source={iconMenu} />
           </TouchableOpacity>
        )}
        //define função que renderiza os botões adicionados a direita da barra
        renderRightButton={() => <DashboardIcons/> }
      />
    );
  }
}
/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  barTH:{
    height: 30,
    width: 30,
    //borderRadius: 20,
    //borderWidth:1,
  },
  barImage:{
    height: 30,
    width: 30,
    //borderRadius: 20,
    //borderWidth:1,
  },
});

/**
 * Exporta os serviços fornecidos por esse widget para outros widgets utilizarem
 */
export {ADD_DASHBOARD_ICONS, ADD_DASHBOARD_VIEWS, ADD_DASHBOARD_VIEWS_SMALL};

/**
 * Cria e exporta um objeto único para representar o widget
 */
export default Dashboard = new Dashboard();
