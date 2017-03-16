/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_NOTIFICATION} from '../notification/Notification';
import {ADD_DASHBOARD_VIEWS} from '../dashboard/Dashboard';

/**
 * Importa os modulos criados pelo widget atual
 */
import Widget from '../Widget';
import AddNotificationDashboard from './AddNotificationDashboard'

/**
 * Define a classe principal do Widget
 */
class AddNotification extends Widget {
  constructor(){
    super();
    //obtem função responsável por adicionar novas notificações
    const addNotification = this.getService(ADD_NOTIFICATION);
    //obtem função responsável por adicionar novas Vies no dashboard
    const addViews = this.getService(ADD_DASHBOARD_VIEWS);

    //adiciona uma nova View no dashboard com a função addViews, passando a função
    //addNotification como propriedade para o compoenente AddNotificationDashboard
    addViews(<AddNotificationDashboard addNotification={addNotification}/>);
  }
}

/**
 * Cria um objeto único para representar o widget
 */
export default AddNotification = new AddNotification();
