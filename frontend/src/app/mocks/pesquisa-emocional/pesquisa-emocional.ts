import { EstadoEmocional } from "../estado-emocional/estado-emocional";

export class PesquisaEmocional {
  estadoEmocional: EstadoEmocional;
  date: Date;

  constructor( estadoEmocional: EstadoEmocional, date?: Date ) {
    this.date = new Date();
    this.estadoEmocional = estadoEmocional;

    if (date) this.date = date;
  }
}
