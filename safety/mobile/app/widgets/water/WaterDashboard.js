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
 * Importa componentes visuais criados para a plataforma
 */
import {Button} from '../../components';
import {DashboardViewIcon} from '../../components';
import {colors} from '../../components';
import LogicComponent from '../LogicComponent';

/**
 * Importa os modulos criados pelo widget atual
 */
import WaterLogic from  './WaterLogic'

/**
 * Define as funções que serão mapeadas em estados dentro de LogicComponent
 */
let getWater = () => WaterLogic.getWater()

/**
 * Carrega icone do componente
 */
const icon = require(`PocReact/app/resources/widgets/water/icon.png`);

/**
 * Define o componente gráfico do widget Water que aparecerá
 * na tela do Dashboard.
 */
class WaterDashboard extends LogicComponent {
  constructor(props){
    /**
     * passa as propriedades, elemento Logic e um array de funções
     * que irão forçar a renderização desse componente gráfico toda
     * vez que o valor retornado pela função mudar.
     */
    super(props, WaterLogic, [getWater]);   //assim a função render é chamda toda vez que getWater mudar
  }
  render(){
    //Define a renderização do componente
    return (
      <DashboardViewIcon
        icon={icon}
        color={colors.ANIS}
        background={colors.DETALHE}
        style={styles.container}
        onPress={() => Alert.alert('Agua', `Existem ${this.state.getWater} unidades de agua`)}
      >
        <Text style={styles.info}>
          Quantidade de água: {this.state.getWater}
        </Text>
        <Button label='Add' onPress={()=>{
          WaterLogic.addWater()
        }}/>
      </DashboardViewIcon>
    );
  }
}
/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //borderWidth:1
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
})
/**
 * Exporta o componente criado
 */
export default WaterDashboard
