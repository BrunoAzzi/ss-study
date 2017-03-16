/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {Button} from '../../components';
import {DashboardView} from '../../components';
import {colors} from '../../components';


/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_DASHBOARD_VIEWS_SMALL} from '../dashboard/Dashboard';

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import NotifiedWidgetLogic from './NotifiedWidgetLogic';


/**
 * Define a classe principal do Widget
 */
class NotifiedWidget extends Widget {
  constructor(){
    super();



    //Adiciona um componente gráfico na tela do dashboard
    this.getService(ADD_DASHBOARD_VIEWS_SMALL)(
      <DashboardView background={colors.DETALHE} logic={NotifiedWidgetLogic} onPress={()=>{
          NotifiedWidgetLogic.seeNotifications();
        }}>
        <Button label='Add' onPress={()=>{
          NotifiedWidgetLogic.addNotifications();
        }}/>
      </DashboardView>
    );
  }
}

/**
 * Cria um objeto único para representar o widget
 */
 export default NotifiedWidget = new NotifiedWidget();
