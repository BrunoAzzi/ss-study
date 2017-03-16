import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';

/**
 * =============================================================================
 * Importar os Widgets nativos do Health aqui
 * =============================================================================
 */

/**
 * Forncece serviço de navegação de cenas para todos os demais widgets:
 * {ADD_MAIN_SCENE}   utilizado para adicionar novas cenas para navegação
 * {DEL_MAIN_SCENE}   remove uma cena da navegação
 *
 * Não depende ou utiliza nenhum outro serviço ou widget
 */
import Main from './main/Main';

/**
 * Fornece os serviços do dashboard
 * {ADD_DASHBOARD_VIEWS}  permite adicionar novas views na area do dashboard
 * {ADD_DASHBOARD_ICONS}  permite adicionar novos icones na area da barra de
 *                        navegação que aparece quando se está no dashboard
 * Serviços utilizados
 * {ADD_MAIN_SCENE}       Main.js
 */
import Dashboard from './dashboard/Dashboard';

/**
 * Fornece os serviços de notificação para serem apresentados como icone no dashboard
 * {ADD_NOTIFICATION}     permite adicionar novas menssagens de notificação que serão
 *                        apresentados ao usuário atravês de um icone na barra do dashboard
 * Serviços utilizados
 * {ADD_DASHBOARD_ICONS}  Dashboard.js
 */
import Notification from './notification/Notification';

/**
 * Fornece os serviços da tela do menu
 * {ADD_MENU_VIEW}        permite adicionar novas views na area do menu
 *
 * Serviços utilizados
 * {ADD_MAIN_SCENE}       Main.js
 */
import Menu from './menu/Menu';

import Login from './login/Login'


/**
 * =============================================================================
 * Importar os Widgets baixados pelo usuário aqui
 * =============================================================================
 */
meta = require('./meta/Meta');
// water = require('./water/Water');
dica = require('./DicaDia/Dica');
meta = require('./perfilComportamental/PerfilComportamental');
// add_notif = require('./addNotification/AddNotification');
// cotacao = require('./cotacao/Cotacao');
notified = require('./notified_widget/NotifiedWidget');
instalar = require('./instalar/Instalar');
//import Instalar from './instalar/Instalar'


//Exporta compoennte principal
import MainScenes from './main/MainScenes'
export default MainScenes


//código temporário para ativação apenas dos widgets instalados
//por enquanto todos os widgets estão ativados sempre
import Widget from './Widget';
import {LOCK_MAIN_SCENE} from './main/Main';


const widget = new Widget();
widget.getService(LOCK_MAIN_SCENE)();


/*
import Widget from './Widget';

import {ADD_INSTALAR_WIDGET} from './instalar/Instalar';
import {LOCK_MAIN_SCENE} from './main/Main';

const widget = new Widget();
const addlist = widget.getService(ADD_INSTALAR_WIDGET);

addlist({
  id:0,
  widget:"WATER",
  dir:"water",
  icon:"icon.png",
  summary:"Adiciona agua",
  class: "Water",
});

Agua = async function(widget){
  var value;
  try {
    value = await AsyncStorage.getItem('@MySuperStore:water');
    console.log(value);
    if (value == null){
      value = 'false';
      console.log('aqui-1');
    }else{
      console.log('aqui-2');
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
  }
  console.log(value);
  //if(value == 'true'){
    console.log('aqui-3');
    water = require(`PocReact/app/widgets/water/Water`);
  //}

  try {
    await AsyncStorage.setItem('@MySuperStore:water', value=='true' ? 'false' : 'true');
  } catch (error) {
    // Error saving data
    console.log(error);
  }

  widget.getService(LOCK_MAIN_SCENE)();
}
Agua(widget);
*/
