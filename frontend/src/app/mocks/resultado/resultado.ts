export class Resultado {
  irritado: number;
  triste: number;
  contente: number;
  empolgado: number;
  naoRespondido: number;

  constructor(
    irritado: number,
    triste: number,
    contente: number,
    empolgado: number,
    naoRespondido: number
  ) {
    this.irritado = irritado;
    this.triste = triste;
    this.contente = contente;
    this.empolgado = empolgado;
    this.naoRespondido = naoRespondido;
  }
}
