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
  View
} from 'react-native';
import Module from './app/native/Module'

export default class PocReact extends Component {
  render() {
    return (
      <Module/>
    );
  }
}

AppRegistry.registerComponent('PocReact', () => PocReact);
