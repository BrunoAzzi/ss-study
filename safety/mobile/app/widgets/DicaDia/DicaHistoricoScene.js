/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'
import {
    Text,
    View,
    Stylesheet,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ListView
} from 'react-native';

/**
 * Carrega icone do componente
 */
const icon = require(`PocReact/app/resources/widgets/dicas/icon.png`);

/**
 * Importa os modulos criados pelo widget atual
 */
import {Button} from '../../components';
import DicaLogic from  './DicaLogic'
import {DashboardViewIcon} from '../../components';
import {colors} from '../../components';
import LogicComponent from '../LogicComponent';
import ImageTextTematica from '../../components/ImageTextTematica';

/**
* Importa componente de navegação entre telas
*/
import {Scene, Actions} from 'react-native-router-flux';

/**
 * Define as funções que serão mapeadas em estados dentro de LogicComponent
 */
let getDicaHistoricoJson = () => DicaLogic.getDicaHistoricoJson()

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

/**
 * Define componente gráfico (Scene) do widget Dica que será
 * adicionado nas cenas de navegação e será acessado via menu
 * do usuário conforme especificado nos serviços do widget Dica
 */
class DicaHistoricoScene extends LogicComponent {

  constructor (props) {
    super(props, DicaLogic, [getDicaHistoricoJson]);
    DicaLogic.getDicaHistoricoRequisicao();
  };

  renderDicaHistorico(dica) {

    corHistoricolDica = "";
    iconHistoricoDica = "";
    tituloCategoria = "";

    if(dica.idCategoria == 1) {
        corHistoricolDica = colors.AMARELO;
        iconHistoricoDica = require('PocReact/app/resources/widgets/dicas/ic_alimentacao_active.png');
        tituloCategoria = "ALIMENTAÇÃO";
    } else if (dica.idCategoria == 2) {
      corHistoricolDica = colors.VERMELHO;
      iconHistoricoDica = require('PocReact/app/resources/widgets/dicas/ic_exercicio_active.png');
      tituloCategoria = "ATIVIDADE FÍSICA";
    } else if (dica.idCategoria == 3) {
      corHistoricolDica = colors.PURPURA;
      iconHistoricoDica = require('PocReact/app/resources/widgets/dicas/ic_estresse_active.png');
      tituloCategoria = "ESTRESSE";
    } else if (dica.idCategoria == 4) {
      corHistoricolDica = colors.ANIS;
      iconHistoricoDica = require('PocReact/app/resources/widgets/dicas/ic_relacionamento_active.png');
      tituloCategoria = "RELACIONAMENTO SOCIAL";
    } else {
      corHistoricolDica = colors.VERDE;
      iconHistoricoDica = require('PocReact/app/resources/widgets/dicas/ic_prevencao_active.png');
      tituloCategoria = "AÇÕES PREVENTIVAS";
    }

    return(
      <View style={styles.listaDica}>
        <DashboardViewIcon
          key={corHistoricolDica}
          icon={iconHistoricoDica}
          color={corHistoricolDica}
          background={colors.DETALHE}
          onPress={() => Actions.dicaHistoricoDetailScene(dica)}>
            <View style={styles.listaDicaDesc}>
              <Text style={styles.tituloCategoria}>{tituloCategoria}</Text>
              <Text style={styles.descricaoDica}>{dica.dica}</Text>
            </View>
        </DashboardViewIcon>
      </View>
    );
  };

  render() {
    //Define a renderização do componente
    if(this.state.getDicaHistoricoJson != undefined) {
      const dicasHistorico = ds.cloneWithRows(this.state.getDicaHistoricoJson);
      console.log(dicasHistorico);
      return (
          <ListView
              style={styles.viewHistoricoDica}
              dataSource={dicasHistorico}
              enableEmptySections={true}
              renderRow = {(e) => this.renderDicaHistorico(e)}
          />
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.info}>Erro ao realizar a consulta! :( </Text>
        </View>
      )
    }
  }
}

/**
 * Define os estilos utilizados
 */
const styles = {
  viewHistoricoDica: {
    marginTop: 55,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  listaDica: {
    marginTop: 10
  },
  listaDicaDesc: {
    width:280,
    alignItems: 'flex-start'
  },
  tituloCategoria: {
    fontSize: 12,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  descricaoDica: {
    fontSize: 15,
    textAlign: 'left'
  }
}

/**
 * Exporta o componente criado
 */
export default DicaHistoricoScene
