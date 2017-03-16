export default class Logic {
  constructor () {
    this.callbacks = new Map();
  }
  /**
   * Faz todas as chamadas de callback
   */
  calls(){
    for (var [key, value] of this.callbacks) {
      //console.log(`${key} = ${value}`);
      value();
    }
  }
  /**
   * Adiciona uma nova callback com a chave key
   */
  addListener(key, callback) {
    // if(this.callbacks.has(key)){
    //   console.trace();
    //   throw `Listener key=${key} alware exists`;
    // }
    this.callbacks.set(key, callback);
  }
  /**
   * Remove callback associada a chave key
   */
  removeListener(key){
    this.callbacks.delete(key);
  }
}
