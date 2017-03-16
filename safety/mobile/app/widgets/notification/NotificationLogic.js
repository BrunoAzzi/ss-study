import Logic from '../Logic'

/**
 * Define a logica do widget
 */
class NotificationLogic extends Logic{
  constructor () {
    super();
    this.notifications = [];    //fila com as notificações ainda não lidas
  }
  addNotification(message, callback) {
    const index = this.notifications.length;
    this.notifications.push( {index, message, callback} );
    this.calls();
  }
  nextNotification() {
    if(this.notifications.length>0){
      return this.notifications.shift();
    }else{
      return undefined;
    }
  }
  size(){
    return this.notifications.length;
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default NotificationLogic = new NotificationLogic()
