/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

/**
 * Importa componente de navegação entre telas
 */
import {Scene, Actions} from 'react-native-router-flux';

/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_MAIN_SCENE} from '../main/Main';


/**
 * Define os novos serviços criados para serem utilizados por outros widgets
 */
const ADD_MENU_VIEW = {
  key:'ADD_MENU_VIEW',
  widget: undefined
}

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import MenuScene from './MenuScene';
import MenuLogic from './MenuLogic';


/**
 * Importa imagem de icone para botão que voltará para o dashboard
 */
const iconMenu = require('../../resources/menu.png');

/**
 * Define a classe principal do Widget
 */
class Menu extends Widget {
  constructor(){
    super();

    /**
     * Adiciona os novos serviços fornecidos por este widget
     */
    this.addService(ADD_MENU_VIEW, (view) => MenuLogic.addViews(view), 'Adiciona views na area do menu');

    //Adiciona uma a sena do menu como que será invocada pelo dashboard
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="menu" component={MenuScene} title="Menu"
        titleStyle={{textAlign:'left'}}
        renderRightButton={() => (
          <TouchableOpacity style={styles.barTH} onPress={Actions.pop}>
            <Image style={styles.barImage} source={iconMenu} />
          </TouchableOpacity>
        )}
        renderBackButton={()=>{}}
      />
    );
  }
}

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

export {ADD_MENU_VIEW};
export default Menu = new Menu();
