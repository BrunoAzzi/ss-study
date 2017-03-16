/**
 * Importações do react e react-native
 */
import React, { Component } from 'react'

/**
 * Define
 * @method state_methods
 * @param  {array}  methods Array de funções que serão convertidas em estado
 * @return {json}           retorna um json objeto representado    [description]
 */
/**
 * Metodo que transforma os valores retornados por um conjunto de funções
 * e adiciona no objeto json state segundo o padrao {nome_funcao:valor_retorno}
 * @method state_methods
 * @param  {array}  methods   Array de funções que serão convertidas em estado
 * @return {json}             Retorna um json objeto representado
 */
const state_methods = function(methods){
  state = {};
  for(i=0; i<methods.length; i++){
    const name = methods[i].name;
    const value = methods[i]();
    state[name] = value;
  }
  return state;
}

const is_changed = function(antes, agora, methods){
  for(i=0; i<methods.length; i++){
    const name = methods[i].name;
    if(antes[name]!=agora[name]){
      return true;
    }
  }
  return false;
}

/**
 * Define componente geral que simplifica uso do componente lógic
 */
class LogicComponent extends Component {
  constructor (props, logic, methods) {
    super(props)
    this.logic = logic;
    this.methods = methods;

    //captura os valores atuais em logic
    this.state = state_methods(methods);

    //adiciona callback que será chamada para atualizar o estado toda vez que Logic mudar
    logic.addListener(this.__proto__.constructor.name, ()=>{
      novo = state_methods(methods);  //captura os valores atuais em logic
      //if(is_changed(this.state,novo,methods)){  //se algum valor mudou em relação ao estado atual
        this.setState(novo);  //atualiza o estado
      //}
    });
  }
  componentWillUnmount(){
    //remove callback caso o componente seja desmontado para evitar atualizações
    //desnecessárias neste compoenente que não está mais em exibição
    this.logic.removeListener(this.__proto__.constructor.name);
  }
}

/**
 * Exporta o componente criado
 */
export default LogicComponent
