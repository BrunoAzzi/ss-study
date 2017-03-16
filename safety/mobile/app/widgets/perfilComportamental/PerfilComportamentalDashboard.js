// IMPORTS
import React, { Component } from 'react'
import {
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Button} from '../../components';
import {DashboardViewIcon} from '../../components';
import {colors} from '../../components';
import LogicComponent from '../LogicComponent';
import PerfilComportamentalLogic from  './PerfilComportamentalLogic'

// DEFINIÇÕES GLOBAIS
const icon = require(`PocReact/app/resources/widgets/water/icon.png`);
let getPerfil = () => PerfilComportamentalLogic.getPerfil()

class PerfilComportamentalDashboard extends LogicComponent {

  constructor(props){
    super(props, PerfilComportamentalLogic, [getPerfil]);
  }

  render() {
    return (
      <DashboardViewIcon
        icon={icon}
        color={colors.ANIS}
        background={colors.DETALHE}
        style={styles.container}
        onPress={() => Alert.alert("Perfil Comportamental")}>
          <Text style={styles.info}>Perfil Comportamental</Text>
      </DashboardViewIcon>
    );
  }
}

// ESTILOS
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
})

export default PerfilComportamentalDashboard
