/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
import {Button} from '../../components';
import {transform} from '../../util';
import LogicComponent from '../LogicComponent';

/**
 * Importa os modulos criados pelo widget atual
 */
import DashboardLogic from './DashboardLogic';

/**
 * Define as funções que serão mapeadas em estados dentro de LogicComponent
 */
let getViews  = () => DashboardLogic.getViews()


/**
 * Define componente gráfico (Scene) do dashboard
 */
class DashboardScene  extends LogicComponent {
  constructor(props){
    /**
     * passa as propriedades, elemento Logic e um array de funções
     * que irão forçar a renderização desse componente gráfico toda
     * vez que o valor retornado pela função mudar.
     */
    super(props, DashboardLogic, [getViews]);   //assim a função render é chamda toda vez que getViews ou getSmalls mudar
  }
  render() {
    const all_views = transform(this.state.getViews, (e) => e);
    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          //onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}
        >
        {
          all_views.map((v) => {
            if(v.value.full){
              return (<View style={styles.elements}key={v.id}>{v.value.view}</View>)
            }else if(v.value.view.length<2){
              return (
                <View style={styles.half} key={v.id}>
                  <View style={styles.elements} key='frist' >{v.value.view[0]}</View>
                  <View style={styles.elements} key='second'></View>
                </View>
              );
            }else{
              return (
                <View style={styles.half} key={v.id}>
                  <View style={styles.elements} key='frist' >{v.value.view[0]}</View>
                  <View style={styles.elements} key='second'>{v.value.view[1]}</View>
                </View>
              );
            }
          })
        }
        </ScrollView>
      </View>
    )
  }
}
/**
 * Define os estilos utilizados
 */
const styles = {
  container: {
    marginTop: 55,
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  scrollView:{
    flex:1
  },
  half:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin:0,
  },
  elements:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    //borderWidth:1,
    margin:5,
  },
}
export default DashboardScene
