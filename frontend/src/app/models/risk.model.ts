export enum RiskTypes {
    'Químico' = 1,
    'Acidente',
    'Ergonômico',
    'Biológico',
    'Físico',
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
        this.type = data.type
        this.level = data.level
        this.factor = data.factor
    }
}