import { ESTADOS_EMOCIONAIS } from "../estado-emocional/mock";
import { PesquisaEmocional } from "../pesquisa-emocional/pesquisa-emocional"

export const PESQUISAS_EMOCIONAIS = {
  "triste": [
    new PesquisaEmocional(ESTADOS_EMOCIONAIS.triste),
  ],
  "contente": [
    new PesquisaEmocional(ESTADOS_EMOCIONAIS.contente),
  ],
  "empolgado": [
    new PesquisaEmocional(ESTADOS_EMOCIONAIS.empolgado),
  ]
}
