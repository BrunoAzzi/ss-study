export const TYPES = {
    chemistry: 'Químico',
    accident: 'Acidente',
    ergonomic: 'Ergonômico',
    biological: 'Biológico',
    physical: 'Físico',
}

export enum RiskLevels {
    "GRAU UM" = 1,
    "GRAU DOIS",
    "GRAU TRÊS"
}

export enum RiskFactors {
    "FATOR UM" = 1,
    "FATOR DOIS",
    "FATOR TRÊS"
}

export class Risk {

    id: number
    type: string
    level: string
    factor: string

    constructor(data : any) {
        this.id = data.id
        this.type = TYPES[data.type]
        this.level = data.level
        this.factor = data.factor
    }
}