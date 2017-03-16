/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

/**
 * Importa componente de navegação entre telas
 */
import {Actions} from 'react-native-router-flux';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {DashboardView} from '../../components';
import {colors} from '../../components';

/**
 * Define o componente gráfico do widget Water que aparecerá
 * na tela do Dashboard.
 */
class InstalarDashboard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    //Define a renderização do componente
    return (
      <DashboardView
        background={colors.DETALHE}
        onPress={() => Actions.instalar_lista()}
      >
        <View style={[styles.view, {borderColor: colors.SUCESSO}]}>
          <Text style={[styles.add, {color: colors.SUCESSO}]}>
            +
          </Text>
        </View>
        <Text style={[styles.info, {color: colors.SUCESSO}]}>
          Adicionar widget
        </Text>
      </DashboardView>
    );
  }
}
/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  view: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:3,
    width: 45,
    height: 45,
    borderRadius: 25,
    marginTop: 20,
  },
  add: {
    fontSize: 32,
    textAlign: 'center',
    //margin: 10,
  },
  info: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
})
/**
 * Exporta o componente criado
 */
export default InstalarDashboard
