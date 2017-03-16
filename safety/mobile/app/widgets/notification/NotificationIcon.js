import React, { Component } from 'react'

import {
    Stylesheet,
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';


const iconNotif = require('../../resources/notificacao.png');
import NotificationLogic from './NotificationLogic';

class NotificationIcon  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: NotificationLogic.size()
    }
    NotificationLogic.addListener(0, ()=>{
      if(this.state.number!=NotificationLogic.size()){
        this.setState({number: NotificationLogic.size()});
      }
    })
  }
  componentWillUnmount(){
    //console.log('NotificationIcon will unmount');
    NotificationLogic.removeListener(0);
  }
  render() {
    return (
      <TouchableOpacity style={styles.barTH} onPress={()=>{
        if(this.state.number>0){
          const notif = NotificationLogic.nextNotification();
          Alert.alert(
            'Notification',
            notif.message,
            [{text: 'OK', onPress: () => {
              if(notif.callback){
                notif.callback(notif.message)}
              }
            },]
          )
          const number = this.state.number-1;
          this.setState({number})
        }
      }}>
        <Image style={styles.barImage} source={iconNotif}>
        {this.renderNumber()}
        </Image>
      </TouchableOpacity>
    )
  }
  renderNumber(){
    if(this.state.number==0){
      return undefined
    }else{
      return (<View style={styles.barOval}><Text style={styles.barText}>{this.state.number}</Text></View>)
    }
  }
}

const styles = StyleSheet.create({
  barTH:{
    height: 30,
    width: 30,
    //borderRadius: 20,
    //borderWidth:1,
  },
  barImage:{
    flex:1,
    alignItems: 'flex-end',
    height: 30,
    width: 30,
    //borderRadius: 20,
    //borderWidth:1,
  },
  barOval:{
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FF0000',
    borderWidth:1,
  },
  barText:{
    fontSize: 12,
    textAlign: 'center',
  }
});

export default NotificationIcon
