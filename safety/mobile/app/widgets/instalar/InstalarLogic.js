import Logic from '../Logic'

/**
 * Define a logica do widget
 */
class InstalarLogic extends Logic{
  constructor () {
    super();
    this.widgets = [];  //conjunto de todos os widgets disponíveis para serem instalados
    this.installeds = [];
  }
  addWidget(widget) {
    this.widgets.push( widget );
    this.calls();
  }
  getWidgets(){
    return this.widgets;
  }
  install(data){
    console.log("Instalar");
    console.log(data);
    this.installeds.push(require(`PocReact/app/widgets/water/Water`));
    console.log(this.installeds);

      //water = require(`PocReact/app/widgets/${data.dir}/${data.class}`);
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default InstalarLogic = new InstalarLogic()
