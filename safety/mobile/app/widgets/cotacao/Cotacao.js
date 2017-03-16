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
 * Importa componentes visuais criados para a plataforma
 */
import {Button} from '../../components';
import {DashboardView} from '../../components';
import {colors} from '../../components';


/**
 * Importa os serviços de outros widgets para serem utilizados
 */
import {ADD_MAIN_SCENE} from '../main/Main';
import {ADD_DASHBOARD_VIEWS_SMALL} from '../dashboard/Dashboard';

/**
 * Importa os modulos criados para widget atual
 */
import Widget from '../Widget';
import CotacaoScene from './CotacaoScene';

/**
 * Define a classe principal do Widget
 */
class Cotacao extends Widget {
  constructor(){
    super();

    //Adiciona um componente gráfico na tela do dashboard
    this.getService(ADD_DASHBOARD_VIEWS_SMALL)(
      <DashboardView background={colors.DETALHE}>
        <Button label='cotação do dia' onPress={()=>{
          Actions.cotacao()
        }}/>
      </DashboardView>
    );

    //Adiciona uma nova sena no componente de navegação de telas
    this.getService(ADD_MAIN_SCENE)(
      <Scene key="cotacao" component={CotacaoScene} title="Cotação" titleStyle={{textAlign:'left'}}/>
    );
  }
}

/**
 * Cria um objeto único para representar o widget
 */
 export default Cotacao = new Cotacao();
