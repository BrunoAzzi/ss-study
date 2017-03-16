import Logic from '../Logic'

/**
 * Define a logica do widget
 */
class WaterLogic extends Logic{
  constructor () {
    super();
    this.value = 0;  //variável que informa a quantia de agua
  }
  addWater() {
    this.value++;     //adiciona uma unidade de agua
    this.calls();     //chama todos os callbacks adicionados
  }
  getWater() {    //retorna a quantia atual de agua
    return this.value;
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default WaterLogic = new WaterLogic()
