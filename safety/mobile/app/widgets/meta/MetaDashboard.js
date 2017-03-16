/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    TouchableHighlight,
    Image,
    ScrollView,
    ProgressBarAndroid
} from 'react-native';

/**
 * Importa componentes visuais criados para a plataforma
 */
 import {Button} from '../../components';
 import {DashboardViewIcon} from '../../components';
 import {colors} from '../../components';
 import LogicComponent from '../LogicComponent';
 import {DashboardViewSanfona} from '../../components';

let getMetaJson = () => MetaLogic.getMetaJson()
 /**
 * Importa componente de navegação entre telas
 */
import {Scene, Actions} from 'react-native-router-flux';
import { Container, Content, Spinner } from 'native-base';
import * as Progress from 'react-native-progress';
/**
 * Importa os modulos criados pelo widget atual
 */
import MetaLogic from  './MetaLogic'
import Meta from  './Meta'
import {transform} from '../../util';

const icon = require(`PocReact/app/resources/widgets/meta/meta.png`);

/**
 * Define o componente gráfico do widget Dica que aparecerá
 * na tela do Dashboard.
 */
class MetaDashboard  extends LogicComponent {
  constructor (props) {
    super(props, MetaLogic, [getMetaJson]);
    MetaLogic.getMetaRequisicao();
  }

  getColor() {
    let r = this.randomRGB()
    let g = this.randomRGB()
    let b = this.randomRGB()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  randomRGB = () => 160 + Math.random()*85

  render(){
    if(!this.state.getMetaJson){
      return (
        // <Container>
        //     <Content>
        //         <Spinner color='green' title='Carregando'/>
        //     </Content>
        // </Container>
        <Text>
          Carregando Metas...
        </Text>
      )
    }
    //Define a renderização do componente
    console.log(this.state.getMetaJson);
    const all_metas = transform(this.state.getMetaJson, (e) => e);
    return (
      <View style={styles.containerMain}>
        {all_metas.map((meta) => this.renderSanfona(meta))}
      </View>
    )
  }

  renderSanfona(meta){
    corMeta = "";
    // iconeMeta = "";
   if(meta.value.idCategoria == 1) {
     corMeta = colors.AMARELO;
     iconeMeta = require('../../resources/widgets/meta/ic_alimentacao_active.png');
   } else if (meta.value.idCategoria == 2) {
     corMeta = colors.VERMELHO;
     iconeMeta = require('../../resources/widgets/meta/ic_exercicio active.png');
   } else if (meta.value.idCategoria == 3) {
     corMeta = colors.PURPURA;
     iconeMeta = require('../../resources/widgets/meta/ic_estresse active.png');
   } else if (meta.value.idCategoria == 4) {
     corMeta = colors.ANIS;
     iconeMeta = require('../../resources/widgets/meta/ic_relacionamento active.png');
   } else {
     corMeta = colors.VERDE;
     iconeMeta = require('../../resources/widgets/meta/ic_prevencao active.png');
   }
    return(
      <View key={meta.id} style={styles.margeia}>
        <DashboardViewSanfona
        icon={iconeMeta}
        color={corMeta}
        background={colors.DETALHE}  style={styles.alinhamento}>
          <View style={styles.meta}>
            <Text style={styles.textMeta}> META - {meta.value.idCategoria}</Text>
            <Text>{meta.value.meta}</Text>
          </View>
          <View style={styles.porcentagem}>
            <Text style={styles.textPorcentagem}>{meta.value.progresso}%</Text>
            <Text style={styles.textPorMeta}> da meta concluída</Text>
            <View style={styles.barra}>
                <Progress.Bar progress={meta.value.progresso/100} width={130} borderRadius={0} color={corMeta}/>
            </View>
          </View>
          <View style={styles.comprometimento}>
            <Text style={styles.textPorComprometimento}>{meta.value.comprometimento}%</Text>
            <Text style={styles.textComprometimento}>Comprometimento</Text>
          </View>
          <Text>
            Dia {meta.value.dias}
          </Text>
        </DashboardViewSanfona>
      </View>
    )
  }
}

/**
 * Define os estilos utilizados
 */
const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    containerMain: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    left:{
      flex:0,
      width: 10,
    },
    children: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon:{
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      //height: 80,
      //width: 60,
      margin: 10,
    },
    image:{
      height: 40,
      width: 40,
      //borderRadius: 20,
      //borderWidth:1,
    },
    margeia:{
      marginTop:10,
      alignItems: 'flex-start'

    },
    alinhamento:{
      width: 280,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      flexWrap:'wrap'
    },
    meta:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      paddingBottom: 3
    },
    comprometimento:{
        alignSelf: 'auto',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width:130,
        paddingTop: 3,
        borderLeftWidth: 2,
        height: 35
      },
      porcentagem:{
          alignSelf: 'auto',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          width:140,
          paddingTop: 3
        },
      textMeta:{
        flexWrap: 'wrap',
        fontSize: 15,
        fontWeight: 'bold',
        width: 280
      },
      textComprometimento:{
        flexWrap: 'nowrap',
        textAlign: 'center',
        fontSize: 10,
        width: 130
      },
      textPorMeta:{
        flexWrap: 'nowrap',
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 10
      },
      textPorcentagem:{
      flexWrap: 'wrap',
      fontSize: 15,
      fontWeight: 'bold'
      },
      textPorComprometimento:{
      flexWrap: 'wrap',
      fontSize: 15,
      textAlign: 'center',
      width: 130,
      fontWeight: 'bold'
      },
      barra:{
      paddingTop: 5
      }
  });
/**
 * Exporta o componente criado
 */
export default MetaDashboard
