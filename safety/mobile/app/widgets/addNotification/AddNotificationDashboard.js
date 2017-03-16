/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';


/**
 * Importa componentes visuais criados para a plataforma
 */
import {Button} from '../../components';
import {DashboardViewIcon} from '../../components';
import {colors} from '../../components';

/**
 * Carrega icone do componente
 */
const icon = require(`PocReact/app/resources/notificacao.png`);


/**
 * Define o componente gráfico do widget que aparecerá
 * na tela do Dashboard.
 */
class AddNotificationDashboard  extends Component {
  constructor (props) {
    super(props)
    //O estado é utilizado apenas para vizualizar a mensagem digitada
    this.state =  {text: ''}
  }

  render() {
    //Define a renderização do componente
    return (
      <DashboardViewIcon
        icon={icon}
        color={colors.LIKES}
        background={colors.DETALHE}
        style={styles.container}
      >
        <Text style={styles.info}>
          Add Notification: {this.state.text}
        </Text>
        <View style={{flex:1, flexDirection:'row'}}>
          <TextInput
            placeholder='send some message to notification area'
            style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <Button label='Send'  onPress={()=>{
          this.props.addNotification(this.state.text, (msg)=>{console.log(`callback return : ${msg}`)})
          this.setState({text:''})
        }}/>
      </DashboardViewIcon>
    )
  }
}
/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFE0E0',
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
export default AddNotificationDashboard
