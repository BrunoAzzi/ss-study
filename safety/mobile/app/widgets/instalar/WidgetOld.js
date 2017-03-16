import React, { Component } from 'react';
import {
  ListView,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {WidgetCardSwitch, colors} from '../../components';
import {getImage} from '../../redux/actions';
import {fetchWidgets} from '../../redux/actions';



const ds = new ListView.DataSource(
  {rowHasChanged: (r1, r2) => r1 !== r2}
);

class InstalarSceneListaWidget extends Component {
  constructor(props){
    super(props);
  }

  onPress(data){
    //console.log(data);
    Actions.instalar_detalhe({data});
  }
  componentDidMount(){
    //console.log("componentDidMount");
    this.props.fetchWidgets(1,10);
  }
  render() {
    const widgets = this.props.widgets;
    console.log('render');
    if(!widgets){
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

    const data = ds.cloneWithRows(widgets.rows);
    return (
      <ListView style={styles.list}
        dataSource={data}
        renderRow={(e) => {
          //console.log(e);
          const def_data = {
            title: e.widget,
            summary: e.summary,
            dir: e.dir,
            icon: e.icon,
          }
          return (<WidgetCardSwitch
            key={e.id}
            data={def_data}
            uri={{uri:getImage(e.dir,e.icon)}}
            onPress={this.onPress}
          />);
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  list:{
    marginTop: 55,
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#FFFFFF'
  },
});

const mapStateToProps = (state) => {
  //console.log("widgets mapStateToProps");
  return {widgets: state.widgets.all};
};
const mapDispatchToProps = (dispatch) => {
  //console.log("widgets mapDispatchToProps");
  return bindActionCreators({ fetchWidgets }, dispatch);
};

//export default Widget;
export default connect(mapStateToProps, mapDispatchToProps)(InstalarSceneListaWidget);
