import Logic from '../Logic'

/**
 * Define a logica do widget
 */
class MenuLogic extends Logic{
  constructor () {
    super();
    this.views = [];    //conjunto de todas as views que apareceram no menu
  }
  addViews(view) {
    this.views.push( view );
    this.calls();
  }
  getViews(){
    return this.views;
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default MenuLogic = new MenuLogic()
