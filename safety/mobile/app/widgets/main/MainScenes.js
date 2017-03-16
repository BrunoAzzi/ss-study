import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';

import { Router, Scene, Route, Actions, Modal, ActionConst} from 'react-native-router-flux';
const RouterWithRedux = Router

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../../redux/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);
//const store = createStore(reducers);

import MainLogic from './MainLogic';

class MainScenes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scenes: MainLogic.getScenes()
    }
    MainLogic.addListener(0, ()=>{
      this.setState({scenes: MainLogic.getScenes()});
    })
  }
  componentWillUnmount(){
    console.log('MainScenes will unmount');
    MainLogic.removeListener(0);
  }

  render() {
    if(!MainLogic.isLock()){
      return (<Text>Loading...</Text>);
    }

    all_scenes = [];
    for (var [key, value] of this.state.scenes) {
      all_scenes.push(value);
    }
/*
    console.log("--------------------------------");
    console.log(this.state.scenes);
    console.log(all_scenes);
    console.log(RouterWithRedux);
*/
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            {
              all_scenes.map((s)=>s)
            }
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

export default MainScenes
