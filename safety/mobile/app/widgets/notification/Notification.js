/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_DASHBOARD_ICONS} from '../dashboard/Dashboard';

/**
 * Define os novos serviços criados para serem utilizados por outros widgets
 */
const ADD_NOTIFICATION = {
  key:'ADD_NOTIFICATION',
  widget: undefined
}

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import NotificationIcon from './NotificationIcon';
import NotificationLogic from './NotificationLogic';

/**
 * Define a classe principal do Widget
 */
class Notification extends Widget {
  constructor(){
    super();
    /**
     * Adiciona os novos serviços fornecidos por este widget
     */
    this.addService(ADD_NOTIFICATION, (m,c) => NotificationLogic.addNotification(m,c), 'Create new notifications');

    //Adiciona uma icone na barra de navegação do dashboard que apresentará as notificações
    this.getService(ADD_DASHBOARD_ICONS)(<NotificationIcon/>);
  }
}
/**
 * Exporta os serviços fornecidos por esse widget para outros widgets utilizarem
 */
export {ADD_NOTIFICATION};

/**
 * Cria e exporta um objeto único para representar o widget
 */
export default Notification = new Notification();
