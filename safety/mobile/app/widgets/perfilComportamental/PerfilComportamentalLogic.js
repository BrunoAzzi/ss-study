import Logic from '../Logic'

class PerfilComportamentalLogic extends Logic{

  constructor () {
    super();
    this.value = 0;
  }

  getPerfil() {
    return this.value;
  }
}

export default PerfilComportamentalLogic = new PerfilComportamentalLogic()
