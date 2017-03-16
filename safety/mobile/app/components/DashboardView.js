/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {colors} from './colors';
import {Notifications} from './';

/**
 * Define o componente gráfico geral para widget que aparecerá na tela do Dashboard.
 */
class DashboardView  extends Component {
  constructor ({
    background=colors.DETALHE,
    style=styles.children,
    onPress,
  }) {
    super();
    this.style = style;
  }
  render() {
    //Define a renderização do componente
    if(this.props.onPress){
      return (
        <TouchableOpacity style={[this.style,{backgroundColor:this.props.background}]} onPress={this.props.onPress}>
          {this.props.children}
          {this.props.logic?<Notifications logic={this.props.logic}/>:null}
        </TouchableOpacity>
      )
    }else{
      return (
        <View style={[this.style,{backgroundColor:this.props.background}]}>
          {this.props.children}
          {this.props.logic?<Notifications logic={this.props.logic}/>:null}
        </View>
      )
    }
  }
}


/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  left:{
    flex:0,
    width: 10,
  },
  children: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    //borderRadius: 4,
    //borderWidth:1,
    borderColor: '#A0A0A0',
    borderStyle: 'solid',
  },
})
/**
 * Exporta o componente criado
 */
export {DashboardView};
