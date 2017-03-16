import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Switch,
} from 'react-native';

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
class WidgetCardSwitch extends Component{
  constructor({uri, onPress, data=def_data, styles=def_styles}){
    super();
    //console.log(styles);
    this.uri = uri;
    this.onPress = onPress;
    this.data = data;
    this.styles = styles;
    this.state = {enabled:false};
  }

  render(){
    const styles = this.styles;
    return (
      <TouchableHighlight onPress={()=>this.onPress(this.data)}>
        <View style={this.styles.cardView}>
          <View style={this.styles.cardImageView}>
            <Image style={this.styles.cardImage} source={this.uri} />
          </View>
          <View style={this.styles.cardContentView}>
            <Text style={this.styles.cardTitleText}>
              {this.data.title}
            </Text>
            <Text style={this.styles.cardSummaryText}>
              {this.data.summary}
            </Text>
          </View>
          <Switch
            onValueChange={(value) => {
              this.setState({enabled: value});
            }}
            style={this.styles.switch}
            value={this.state.enabled}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const def_data = {
  title: "A TITLE",
  summary: "A short description",
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
  switch:{
    //width:100,
    //padding: 10,
    //borderRadius: 18,
    //borderWidth:1,
    //backgroundColor: '#00FF00',
  }
});

export {WidgetCardSwitch};
