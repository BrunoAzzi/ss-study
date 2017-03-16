import Logic from '../Logic'

/**
 * Define a logica do widget
 */
class DashboardLogic extends Logic{
  constructor () {
    super();
    this.icons = [];    //conjunto de todos os icones que aparecerão na barra de navegação do dashboard
    this.views = [];    //conjunto de todas as views que aparecerão na area do dashboard
  }
  addIcons(icon) {
    this.icons.push( icon );
    this.calls();
  }
  addViews(view) {
    this.views.push({full:true,view} );
    this.calls();
  }
  addSmalls(view) {
    //encontra a primeira posição com uma metade vazia
    for(i=0; i<this.views.length; i++){
      if(!this.views[i].full && this.views[i].view.length<2){
        this.views[i].view.push(view);
        this.calls();
        return;//stop
      }
    }
    //se nao existe uma posição com metade vazia cria uma nova
    this.views.push({full:false,view:[view]} );
    this.calls();
  }
  getViews(){
    return this.views;
  }
  getIcons(){
    return this.icons;
  }
}
/**
 * Define e exporta objeto único para representar a lógica do widget
 */
export default DashboardLogic = new DashboardLogic()
