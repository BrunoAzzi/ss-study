import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';




/**
 * @param {onPress}         : onPress button event            (function)
 * @param {label}           : label of text button            (String)
 * @param {color}           : color used on text and border   (Color)
 * @param {background}      : color used as background        (Color)
 * @param {styles}          : json object                     (StyleSheet)
 *                            {
 *                              buttonTHL: ...                (TouchableHighlight style)
 *                              buttonText: ...                 (Text style)
 *                            }
 *                            obs. all the style children are optional
 */

class Button extends Component{
    constructor({
        onPress=def_onPress,
        label=def_label,
        color=color1,
        background=color2,
        styles=def_styles
    }){
      super();
      this.onPress = onPress;
      this.label = label;
      this.buttonTHL = styles.buttonTHL ? styles.buttonTHL : def_styles.buttonTHL;
      this.buttonText = styles.buttonText ? styles.buttonText : def_styles.buttonText;

      //console.log(styles);

      this.color = color;
      this.background = background;
      this.style1 = StyleSheet.create({
        buttonTHL:{
          borderColor: color,
          backgroundColor: background,
        },
        buttonText:{
          color: color
        }
      });
      this.style2 = StyleSheet.create({
        buttonTHL:{
          borderColor: background,
          backgroundColor: color,
        },
        buttonText:{
          color: background
        }
      });

      this.state = {underlay:false};
    }
    render(){
      const change = this.state.underlay ? this.style2 : this.style1;
      return (
        <TouchableHighlight
         style={[this.buttonTHL,change.buttonTHL]}
         onPress={() => this.onPress()}
         onShowUnderlay={() => this.setState({underlay:true})}
         onHideUnderlay={() => this.setState({underlay:false})}
         underlayColor={this.color}
        >
          <Text style={[this.buttonText,change.buttonText]}>{this.label}</Text>
        </TouchableHighlight>
      );
    }
 }

const def_label = "CLICK ME";
const def_onPress = () => {};
const color1 = '#47516C';
const color2 = '#FFFFFF';

const def_styles = StyleSheet.create({
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
});

export {Button};
