import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

/**
 * Carrega icone do componente
 */
const imageAlimentacao = require(`PocReact/app/resources/widgets/dicas/ic_alimentacao_active.png`);
const imageAtividadeFisica = require(`PocReact/app/resources/widgets/dicas/ic_exercicio_active.png`);
const imageEstresse = require(`PocReact/app/resources/widgets/dicas/ic_estresse_active.png`);
const imageRelacionamentoSocial = require(`PocReact/app/resources/widgets/dicas/ic_relacionamento_active.png`);
const imageAcoesPreventivas = require(`PocReact/app/resources/widgets/dicas/ic_prevencao_active.png`);

const ImageTextTematica = (props) => {
  if(props.categoriaImagem = 1) {
    return(
      <View style={styles.teste}>
          <Text style={styles.textTematica}>Alimentação</Text>
          <Image style={styles.imageTematica} source={imageAlimentacao}/>
      </View>
    )
  } else if (props.categoriaImagem = 2) {
    return(
      <View>
        <Text style={styles.textTematica}>Atividade Física</Text>
        <Image style={styles.imageTematica} source={imageAtividadeFisica}/>
      </View>
  )
  } else if (props.categoriaImagem = 3) {
    return(
      <View style={styles.textTematica}>
        <Text>Estresse</Text>
        <Image style={styles.imageTematica} source={imageEstresse}/>
      </View>
   )
  } else if (props.categoriaImagem = 4) {
    return(
      <View>
        <Text style={styles.textTematica}>Relacionamento Social</Text>
        <Image style={styles.imageTematica} source={imageRelacionamentoSocial}/>
      </View>
   )
  } else if (props.categoriaImagem = 5) {
    return(
      <View>
        <Text style={styles.textTematica}>Ações Preventivas</Text>
        <Image style={styles.imageTematica} source={imageAcoesPreventivas}/>
      </View>
    )
  }
}

/**
 * Define os estilos utilizados
 */
const styles = {
  teste: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTematica: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    margin: 15
  },
  imageTematica: {
    backgroundColor: 'transparent'
  }
}

export default ImageTextTematica;
