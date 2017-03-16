import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import {Button} from './Button';
/**
 * @param {uri}     : path to a image icon,
 *                      ex: http://192.168.0.100:8080/template/getImage?dir=coach&name=1.jpg
 * @param {onPress} : onPress button event  (function)
 * @param {data}    : json object
 *                    {
 *                        title: "A title"                  (String)
 *                        summary: "A short description"    (String)
 *                        button: "Click me"                (String)
 *                    }
 * @param {color}      : color for button text and border   (Color)
 * @param {background} : color for button background        (Color)
 * @param {styles}  : json object  (StyleSheet)
 *                    {
 *                        view: ...           (View style)
 *                        icon: ...             (View style)
 *                        image ...               (Image style)
 *                        content: ...          (View style)
 *                        title: ...              (Text style)
 *                        summary: ...            (Text style)
 *                        button: ...           (TouchableHighlight style)
 *                        btm_text: ...           (Text style)
 *                    }
 *                    obs. all the style children are optional
 */
WidgetCardInstall = ({uri, onPress, data=def_data, color, background, styles=def_styles})=>{
  //console.log(styles);
  return (
    <View style={styles.cardView}>
      <View style={styles.cardImageView}>
        <Image style={styles.cardImage} source={{uri}} />
      </View>
      <View style={styles.cardContentView}>
        <Text style={styles.cardTitleText}>
          {data.title}
        </Text>
        <Text style={styles.cardSummaryText}>
          {data.summary}
        </Text>
      </View>
      <Button
        onPress = {() => onPress()}
        label = {data.button}
        color = {color}
        background = {background}
        styles = {styles}
      />
    </View>
  );
}

const def_data = {
  title: "A TITLE",
  summary: "A short description",
  button: "CLICK HERE",
}

const def_styles = StyleSheet.create({
  cardView:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    marginTop: 5,
  },
  cardImageView:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 60,
    margin: 6,
  },
  cardImage:{
    height: 40,
    width: 40,
    //borderRadius: 20,
    borderWidth:1,
  },
  cardContentView:{
    flex: 1,
    flexDirection: 'column',
    margin:4,
    height: 80,
  },
  cardTitleText:{
    fontWeight: 'bold',
    color: '#000000',
  },
  cardSummaryText:{
    color: '#000000',
    margin:2,
    fontSize:14,
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
});

export {WidgetCardInstall};
