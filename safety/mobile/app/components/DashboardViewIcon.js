/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {colors} from './colors';
import {Notifications} from './';

const def_icon = require(`PocReact/app/resources/error.png`);
/**
 * Define o componente gráfico geral para widget que aparecerá na tela do Dashboard.
 */
class DashboardViewIcon  extends Component {
  constructor ({
    onPress,
    icon=def_icon,
    color=colors.ANIS,
    background=colors.DETALHE,
    style=styles.children
  }) {
    super();
    this.style = style;
  }

  render() {
    //Define a renderização do componente
    //console.log(this.props);
    //console.log(this);

    if(this.props.onPress){
      return (
        <TouchableOpacity style={[styles.container,{backgroundColor:this.props.background}]} onPress={this.props.onPress}>
          <View style={[styles.left,{backgroundColor:this.props.color}]}/>
          <View style={[styles.icon,{backgroundColor:this.props.background}]}>
            <Image style={styles.image} source={this.props.icon} />
          </View>
          <View style={[this.style,{backgroundColor:this.props.background}]}>
            {this.props.children}
            {this.props.logic?<Notifications logic={this.props.logic}/>:null}
          </View>
        </TouchableOpacity>
      )
    }else{
      return (
        <View style={[styles.container,{backgroundColor:this.props.background}]}>
          <View style={[styles.left,{backgroundColor:this.props.color}]}/>
          <View style={[styles.icon,{backgroundColor:this.props.background}]}>
            <Image style={styles.image} source={this.props.icon} />
          </View>
          <View style={[this.style,{backgroundColor:this.props.background}]}>
          {this.props.children}
          {this.props.logic?<Notifications logic={this.props.logic}/>:null}
          </View>
        </View>
      )
    }
  }
}

/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    //borderRadius: 4,
    //borderWidth:1,
    borderColor: '#A0A0A0',
    borderStyle: 'solid', //'solid', 'dotted', 'dashed')
  },
  left:{
    flex:0,
    width: 10,
  },
  children: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //height: 80,
    //width: 60,
    margin: 10,
  },
  image:{
    height: 40,
    width: 40,
    //borderRadius: 20,
    //borderWidth:1,
  },
})
/**
 * Exporta o componente criado
 */
export {DashboardViewIcon};
