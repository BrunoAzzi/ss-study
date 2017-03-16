import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Switch,
} from 'react-native';



import styles from '../css/WidgetCard.css';

class WidgetCard extends Component {
  constructor(props){
    super(props);
    this.state = {enabled:false};
  }
  render() {
    const {widget} = this.props;
    var path = {uri:getImage(widget.dir,widget.icon)};
    return (
      <TouchableHighlight onPress={()=>this.props.onPress(widget)}>
        <View style={styles.card}>
          <View style={styles.icon}>
            <Image style={styles.image} source={path} />
          </View>
          <View style={styles.content}>
            <Text style={styles.textTitle}>
              {widget.widget}
            </Text>
            <Text style={styles.textDescription}>
              {widget.summary}
            </Text>
          </View>
          <Switch
            onValueChange={(value) => {
              this.setState({enabled: value});
            }}
            style={styles.switch}
            value={this.state.enabled}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

export {WidgetCard};
