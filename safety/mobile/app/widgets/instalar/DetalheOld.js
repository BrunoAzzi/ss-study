import React, { Component } from 'react'

import {
    Text,
    View,
    Stylesheet,
    ScrollView,
    ListView,
    Image,
    Switch,
    TouchableHighlight,
    ActivityIndicator,
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchDetalhes, getImage} from '../../redux/actions';
import {Title, Bullets, WidgetCardInstall, colors} from '../../components';
import {transform} from '../../util';

const ds = new ListView.DataSource(
  {rowHasChanged: (r1, r2) => r1 !== r2}
);

class InstalarSceneDetalhe extends Component {
  constructor(props){
    super(props);
  }
  onPress(){
    //comunicaçao com back-end
    console.log("Instalar");

  }

  updateDetalhes(){
    const { data} = this.props;
    if(data){
      this.props.fetchDetalhes(data.title)
      //setTimeout(() => this.props.fetchDetalhes(data.title), 3000);
    }
  }

  componentDidMount(){
    //console.log("componentDidMount");
    this.updateDetalhes();
  }
  componentDidUpdate(){
    //console.log("componentDidUpdate");
    const { detalhe, data } = this.props;
    if(detalhe && data && (data.title != detalhe.widget)){
      this.updateDetalhes();
    }
  }

  render() {
    const { detalhe, data } = this.props;
    //console.log(""+(!detalhe)+" -> "+(detalhe));
    if(!detalhe || !data || (data.title != detalhe.widget)){
      return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>Loading...</Text>
          <ActivityIndicator
            size="large"
            color={colors.VERDE}
          />
        </View>
      );
    }

    //console.log(detalhe);

    const images = ds.cloneWithRows(detalhe.images);
    const descriptions = transform(detalhe.descriptions, (e) => e.description);
    const permissions  = transform(detalhe.permissions, (e) => e.permission);
    const def_data = {
      title: data.title,
      summary: data.summary,
      button: "Autorizar",
    };

    return (
      <View style={styles.container}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}
        >
          <WidgetCardInstall
            data={def_data}
            onPress={(e)=>this.onPress()}
            uri={getImage(data.dir,data.icon)}
          />
          <ListView style={styles.viewImages}
            horizontal={true}
            dataSource={images}
            enableEmptySections={true}
            renderRow = {(e) => this.renderImage(e)}
          />
          <Title title='DESCRIÇÃO'/>
          <Bullets array={descriptions} bullet='○'/>

          <Title title='PERMISSÕES'/>
          <Bullets array={permissions} bullet='○'/>

        </ScrollView>
      </View>
    )
  }

  renderImage(e){
    //console.log(e);
    return (<Image
      style={styles.listImages} key={e.image}
      source={{uri:getImage(this.props.data.dir,e.image)}}
    />);
  }
}

const styles = {
    container: {
      marginTop: 55,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
    },
    viewImages:{
      backgroundColor: '#FFFFFF',
    },
    listImages:{
      margin: 10,
      width: 94,
      height: 177,
    },
    titleView: {
      flex:1,
      backgroundColor: '#E0E0E0',
    },
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
      textAlign: 'left',
      textAlignVertical: 'center',
      marginVertical: 6,
      marginHorizontal: 10,
    },
    card:{
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0E0E0',
      marginTop: 5,
    },
    button:{
      borderWidth: 1,
      borderRadius: 6,
      padding: 8,
      margin: 6,
      alignItems: 'center',
      borderColor: '#0008A0',
      backgroundColor: '#00A0FF',
    },
    buttonUnderlay:{
      color:'#0008A0'
    },
    buttonText:{
      fontWeight: 'bold',
      color: '#000000',
      borderColor: '#000000'
    },
    icon:{
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      width: 60,
      margin: 6,
    },

    image:{
      height: 40,
      width: 40,
      //borderRadius: 20,
      borderWidth:1,
    },
    content:{
      flex: 1,
      flexDirection: 'column',
      margin:4,
      height: 80,
    },
    textTitle:{
      fontWeight: 'bold',
      color: '#000000',
    },
    textDescription:{
      color: '#000000',
      margin:2,
      fontSize:14,
    },
}


const mapStateToProps = (state) => {
  //console.log("detalhes mapStateToProps");
  return {detalhe: state.widgets.selected};
};
const mapDispatchToProps = (dispatch) => {
  //console.log("detalhes mapDispatchToProps");
  return bindActionCreators({ fetchDetalhes }, dispatch);
};

//export default Detalhe
export default connect(mapStateToProps, mapDispatchToProps)(InstalarSceneDetalhe);
