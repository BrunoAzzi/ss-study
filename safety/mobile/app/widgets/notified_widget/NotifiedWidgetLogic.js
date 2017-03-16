import Logic from '../Logic'
import {
  Alert,
} from 'react-native';
/**
 * Define a logica do widget
 */
class NotifiedWidgetLogic extends Logic{
  constructor () {
    super();
    this.value = 3;  //variável que informa a quantia de agua
  }
  addNotifications() {
    this.value++;     //adiciona uma unidade de agua
    this.calls();     //chama todos os callbacks adicionados
  }
  getNotifications() {    //retorna a quantia atual de agua
    return this.value;
  }
  seeNotifications(){
    if(this.value>0){
      Alert.alert("Consume = "+this.value);
      this.value--;
      this.calls();
    }
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default NotifiedWidgetLogic = new NotifiedWidgetLogic()
