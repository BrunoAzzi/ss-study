
import Logic from '../Logic';

/**
 * Define a logica do widget
 */
class MainLogic extends Logic {
  constructor(){
    super();
    this.scenes = new Map();
    this._lock = false;
  }
  delScene(key){
    if(!this._lock){
      this.scenes.delete(scene.key);
    }else{
      throw "Can not delete scenes on the fly, MainLogic is locked";
    }
  }
  addScene(scene) {
    if(!this._lock){
      this.scenes.set(scene.key, scene);
    }else{
      throw "Can not add scenes on the fly, MainLogic is locked";
    }
  }
  lock(){
    if(this._lock){
      throw "MainLogic is aware locked, lock() function can be called only once";
    }
    this._lock = true;
    this.calls();
  }
  isLock(){
    return this._lock;
  }
  getScenes(){
    return this.scenes;
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default MainLogic = new MainLogic()
