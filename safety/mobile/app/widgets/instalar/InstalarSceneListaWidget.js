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

import InstalarLogic from './InstalarLogic';

const ds = new ListView.DataSource(
  {rowHasChanged: (r1, r2) => r1 !== r2}
);

class InstalarSceneListaWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: InstalarLogic.getWidgets(),
    };
    InstalarLogic.addListener('lista', ()=>{
      this.setState({list: InstalarLogic.getWidgets()});
    })
  }
  componentWillUnmount(){
    InstalarLogic.removeListener('lista');
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

    if(!widgets && this.state.list.length==0){
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
    all = [];
    if(this.state.list.length>0){
      console.log(this.state.list);
      all = all.concat(this.state.list);
    }
    if(widgets){
      console.log(widgets.rows);
      all = all.concat(widgets.rows);
    }
    const data = ds.cloneWithRows(all);
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
            class: e.class,
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
