/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet
} from 'react-native';

/**
 * Define componente gráfico (Scene) do widget que será
 * adicionado nas cenas de navegação e será acessado via menu
 * do usuário conforme especificado nos serviços do widget
 */
class CotacaoScene  extends Component {
  constructor (props) {
    super(props)
    this.props = props
    this.state = {cotacao:null}

    fetch('http://api.promasters.net.br/cotacao/v1/valores')
    .then((r)=>
      r.json().then((f)=>
        this.setState((prevState, props) => {
          return {cotacao: f.valores.USD.valor};
        })
    ))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.info}>
          Cotacao do dolar: {this.state.cotacao}
        </Text>
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
}
/**
 * Exporta o componente criado
 */
export default CotacaoScene
