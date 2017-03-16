import React, { Component } from 'react'

import {
    Text,
    View,
    Stylesheet,
    TouchableHighlight,
    ScrollView,
    DrawerLayoutAndroid,
    Navigator,
} from 'react-native';

//import Widget from '../widgets/Widget';
//import {Metas} from '../widgets';
import {menuViews} from '../index';
import {transform} from '../../util';
import MenuLogic from './MenuLogic';

class MenuScene  extends Component {
  constructor(props){
    super(props);
    this.state = {
      views: MenuLogic.getViews(),
    };
    MenuLogic.addListener(0, ()=>{
      this.setState({views: MenuLogic.getViews()});
    })
  }
  componentWillUnmount(){
    console.log('MenuScene will unmount');
    MenuLogic.removeListener(0);
  }
  render() {
    const all_views = transform(this.state.views, (e) => e);
    return (
      <View style={styles.main}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          //onScroll={() => { console.log('onScroll!'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}
        >
        {
          all_views.map((v)=> <View style={{flex:1,borderWidth:1}}key={v.id}>{v.value}</View>)
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = {
    main: {
        flex:1,
        flexDirection:'row',
        marginTop: 55,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
    },
    container: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        margin: 5,
    },
    scrollView:{
      flex:1
    },
    buttonTHL:{
      borderWidth: 2,
      borderRadius: 18,
      padding: 8,
      paddingHorizontal: 20,
      margin: 6,
      alignItems: 'center',
    },
    buttonText:{
      fontWeight: 'bold',
    },
    info: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
}
export default MenuScene
