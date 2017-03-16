/**
 * Importações do react e react-native
 */
 import React, { Component } from 'react';
 import {
   AppRegistry,
   AsyncStorage,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   Alert
 } from 'react-native';
 import t from 'tcomb-form-native';

 var Form = t.form.Form
 var Person = t.struct({
   login: t.String,
   password: t.String
 })

/**
 * Importa componentes visuais criados para a plataforma
 */
// import LogicComponent from '../LogicComponent';

/**
 * Importa os modulos criados pelo widget atual
 */
import LoginLogic from  './LoginLogic'

/**
 * Define as funções que serão mapeadas em estados dentro de LogicComponent
 */
// let getWater = () => WaterLogic.getWater()

/**
 * Define componente gráfico (Scene) do widget Water que será
 * adicionado nas cenas de navegação e será acessado via menu
 * do usuário conforme especificado nos serviços do widget Water
 */

const options = {}
class LoginScene extends Component {
  constructor (props) {
    /**
     * passa as propriedades, elemento Logic e um array de funções
     * que irão forçar a renderização desse componente gráfico toda
     * vez que o valor retornado pela função mudar.
     */
    super(props);   //assim a função render é chamda toda vez que getWater mudar
  }
  render() {
    //Define a renderização do componente
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>Signup/Login below!</Text>
        </View>
        <View style={styles.row}>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
        </View>
        <View style={styles.row}>

          <TouchableHighlight style={styles.button} onPress={() => LoginLogic.userLogin(this.refs.form.getValue())} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>

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
     justifyContent: 'center',
     marginTop: 50,
     padding: 20,
     backgroundColor: '#ffffff',
   },
   title: {
     fontSize: 30,
     alignSelf: 'center',
     marginBottom: 30
   },
   buttonText: {
     fontSize: 18,
     color: 'white',
     alignSelf: 'center'
   },
   button: {
     height: 36,
     backgroundColor: '#48BBEC',
     borderColor: '#48BBEC',
     borderWidth: 1,
     borderRadius: 8,
     marginBottom: 10,
     alignSelf: 'stretch',
     justifyContent: 'center'
   }
 })
/**
 * Exporta o componente criado
 */
export default LoginScene
