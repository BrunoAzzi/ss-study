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
import {ADD_DASHBOARD_VIEWS} from '../dashboard/Dashboard';

/**
 * Define os novos serviços criados para serem utilizados por outros widgets
 */
const ADD_INSTALAR_WIDGET = {
  key:'ADD_INSTALAR_WIDGET',
  widget: undefined
}

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import InstalarLogic from './InstalarLogic';
import InstalarSceneListaWidget from './InstalarSceneListaWidget';
import InstalarSceneDetalhe from './InstalarSceneDetalhe';
import InstalarDashboard from './InstalarDashboard';

class Instalar extends Widget {
  constructor(){
    super();

    /**
     * Adiciona os novos serviços fornecidos por este widget
     */
    this.addService(ADD_INSTALAR_WIDGET, (widget) => InstalarLogic.addWidget(widget), 'Adiciona widgets na lista de instalação');

    //Adiciona a sena que apresentará a lista de widgets a serem instalados
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="instalar_lista" component={InstalarSceneListaWidget} title="Gerenciar itens"/>
    );
    //Adiciona a sena que apresentará os detalhes do widget a ser instalado
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="instalar_detalhe" component={InstalarSceneDetalhe} title="Instalar"/>
    );
    //Adiciona viw na tela do dashboard para adicionar novos widgets
    this.getService(ADD_DASHBOARD_VIEWS)(
      <InstalarDashboard/>
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
        //borderWidth:1,
        //borderRadius:6,
        //margin: 10,
        backgroundColor: '#E0E0E0',
    },
});
/**
 * Exporta os serviços fornecidos por esse widget para outros widgets utilizarem
 */
export {ADD_INSTALAR_WIDGET};

/**
 * Cria e exporta um objeto único para representar o widget
 */
export default Instalar = new Instalar();
