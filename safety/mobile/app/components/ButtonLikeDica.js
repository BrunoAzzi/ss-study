import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

/**
 * Carrega icone do componente
 */
const imageLike = require(`PocReact/app/resources/widgets/dicas/Like.png`);
const imageDislike = require(`PocReact/app/resources/widgets/dicas/Dislike.png`);

class ButtonLikeDica extends Component {

  constructor(props) {
    super(props);
    this.onPress = props.onPress;
    this.state = {likeAtual: props.likeAtual};
  };

  render(){
      if(this.state.likeAtual == 1) {
        return(
          <View>
            <TouchableHighlight
              onPress={() => {
                this.onPress(0)
                this.setState({likeAtual: 0})
              }}>
              <Image style={styles.imageLikeDica} source={imageDislike}/>
            </TouchableHighlight>
          </View>
        )
      } else {
        return(
          <View>
            <TouchableHighlight
              onPress={() => {
                this.onPress(1)
                this.setState({likeAtual: 1})
              }}>
              <Image style={styles.imageLikeDica} source={imageLike}/>
            </TouchableHighlight>
          </View>
        )
      }
  }
}

/**
 * Define os estilos utilizados
 */
const styles = {
  imageLikeDica: {
    width: 50,
    height: 50
  }
}

export default ButtonLikeDica;
