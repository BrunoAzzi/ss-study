/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import MainScenes from './app/widgets'

//import Module from './app/native/Module'
//import Main from './app/widgets/Main'

export default class PocReact extends Component {
  render(){
    return (
      <MainScenes/>
    );
  }
}
const styles = {
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  }
};
AppRegistry.registerComponent('PocReact', () => PocReact);
