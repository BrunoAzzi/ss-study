/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    TouchableOpacity
} from 'react-native';


/**
 * Importa componentes visuais criados para a plataforma
 */
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
 * Define componente gráfico (Scene) do widget Water que será
 * adicionado nas cenas de navegação e será acessado via menu
 * do usuário conforme especificado nos serviços do widget Water
 */
class WaterScene extends LogicComponent {
  constructor (props) {
    /**
     * passa as propriedades, elemento Logic e um array de funções
     * que irão forçar a renderização desse componente gráfico toda
     * vez que o valor retornado pela função mudar.
     */
    super(props, WaterLogic, [getWater]);   //assim a função render é chamda toda vez que getWater mudar
  }
  render() {
    //Define a renderização do componente
    return (
      <View style={styles.container}>
        <Text style={styles.info}>
          Quantidade de água: {this.state.getWater}
        </Text>
        <TouchableOpacity onPress={()=>{WaterLogic.addWater()}} style={styles.button}>
          <Text style={styles.instructions}>
            Add Water
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
/**
 * Define os estilos utilizados
 */
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
/**
 * Exporta o componente criado
 */
export default WaterScene
