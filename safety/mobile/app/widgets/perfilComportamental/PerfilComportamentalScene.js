// IMPORTS
import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    TouchableOpacity
} from 'react-native';
import LogicComponent from '../LogicComponent';
import PerfilComportamentalLogic from  './PerfilComportamentalLogic'

// DEFINIÇÕES GLOBAIS
let getPerfil = () => PerfilComportamentalLogic.getPerfil()

class PerfilComportamentalScene extends LogicComponent {

  constructor (props) {
    super(props, PerfilComportamentalLogic, [getPerfil]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.info}>Perfil Comportamental</Text>
      </View>
    )
  }
}

// ESTILOS
const styles = {
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  info: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
}

export default PerfilComportamentalScene
