/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {colors} from './colors';

/**
 * Define o componente gráfico geral para widget que aparecerá na tela do Dashboard.
 */
class Notifications extends Component {
  constructor (props) {
    super(props);
    this.state = {
      number: props.logic.getNotifications()
    }
    props.logic.addListener(this.__proto__.constructor.name, ()=>{
      number = props.logic.getNotifications();  //captura os valores atuais em logic
      if(number != this.state.number){  //se algum valor mudou em relação ao estado atual
        this.setState({number});  //atualiza o estado
      }
    });
  }
  componentWillUnmount(){
    //remove callback caso o componente seja desmontado para evitar atualizações
    //desnecessárias neste compoenente que não está mais em exibição
    this.props.logic.removeListener(this.__proto__.constructor.name);
  }
  render() {
    //Define a renderização do componente
    if(this.state.number==0){
      return null;
    }else{
      return (<View style={styles.barOval}><Text style={styles.barText}>{this.state.number}</Text></View>)
    }
  }
}

/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  barOval:{
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FF0000',
    borderWidth:1,
    position: 'absolute',
    right: 5,
    top: 5,
    //left: 10,
  },
  barText:{
    fontSize: 12,
    textAlign: 'center',
  }
})
/**
 * Exporta o componente criado
 */
export {Notifications};
