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
import Meta from './Meta.js'
import {Notifications} from './';

const def_icon = require(`PocReact/app/resources/error.png`);
/**
 * Define o componente gráfico geral para widget que aparecerá na tela do Dashboard.
 */
class DashboardViewSanfona extends Component {
  constructor ({
    onPress,
    icon=def_icon,
    color=colors.ANIS,
    background=colors.DETALHE,
    style=styles.children
  }) {
    super();
    this.icon = icon;
    this.onPress = onPress;
    this.color = color;
    this.background = background;
    this.style = style;
  }
  render() {
    //Define a renderização do componente
    console.log(this.props.children);
    //console.log(this);
    principal = [];
    sanfonado = [];
    principal.push(this.props.children[0]);
    principal.push(this.props.children[1]);
    principal.push(this.props.children[2]);
    for(i = 3; i < this.props.children.length; i++){
        sanfonado.push(this.props.children[i]);
    }
    console.log(principal);
    console.log(sanfonado);
      return (
        <View style={[styles.container,{backgroundColor:this.background}]}>
          <View style={[styles.left,{backgroundColor:this.color}]}/>
            <View style={[styles.containerMain,{backgroundColor:this.background}]}>
                <View style={[styles.container,{backgroundColor:this.background}]}>
                  <View style={[styles.icon,{backgroundColor:this.background}]}>
                    <Image style={styles.image} source={this.icon} />
                  </View>
                  <View style={[this.style,{backgroundColor:this.background}]}>
                    {principal}
                    {this.props.logic?<Notifications logic={this.props.logic}/>:null}
                  </View>
                </View>
                <Meta>
                    {sanfonado}
                </Meta>
            </View>
        </View>
      )
    }
}
/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'stretch'
  },
  containerMain: {
    flex:1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'stretch'
  },
  left:{
    flex:0,
    width: 10,
  },
  children: {
    flex:1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
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
export {DashboardViewSanfona};
