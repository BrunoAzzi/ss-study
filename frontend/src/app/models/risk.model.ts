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