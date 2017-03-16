/**
 * Importações do react e react-native
 */
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {transform} from '../../util';

/**
 * Importa os modulos criados pelo widget atual
 */
import DashboardLogic from './DashboardLogic';

/**
 * Define componente gráfico que será adicionado na barra de navegação
 * e que apresentará todos os icones de notificação, menssagens e outros possíveis.
 */
class DashboardIcons  extends Component {
  constructor(props){
    super(props);
    this.state = {
      icons: DashboardLogic.getIcons(),
    };
    DashboardLogic.addListener('icons', ()=>{
      this.setState({icons: DashboardLogic.getIcons()});
    })
  }
  componentWillUnmount(){
    //console.log('DashboardIcons will unmount');
    DashboardLogic.removeListener('icons');
  }
  render() {
    const all_icons = transform(this.state.icons, (e) => e);
    return (
      <View style={{flex:1,flexDirection:'row'}}>
      {
        all_icons.map((v)=> <View key={v.id}>{v.value}</View>)
      }
      </View>
    );
  }
}

export default DashboardIcons;
