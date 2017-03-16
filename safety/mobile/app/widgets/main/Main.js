import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Widget from '../Widget';
import MainScenes from './MainScenes';
import MainLogic from './MainLogic';

const ADD_MAIN_SCENE = {
  key:'ADD_MAIN_SCENE',
  widget: undefined
}
const DEL_MAIN_SCENE = {
  key:'DEL_MAIN_SCENE',
  widget: undefined
}
const LOCK_MAIN_SCENE = {
  key:'LOCK_MAIN_SCENE',
  widget: undefined
}

class Main extends Widget {
  constructor(){
    super();
    this.addService(ADD_MAIN_SCENE, (scene) => MainLogic.addScene(scene), 'Create new scenes');
    this.addService(DEL_MAIN_SCENE, (key)   => MainLogic.delScene(key),   'Delete scenes');
    this.addService(LOCK_MAIN_SCENE,()      => MainLogic.lock(),          'Lock scenes');
  }
}

export {ADD_MAIN_SCENE, DEL_MAIN_SCENE, LOCK_MAIN_SCENE};
export default Main = new Main();
