export class Floor {

    type : string
    level: string
    factor: string


    constructor(obj = {}) {
        Object.keys(obj).forEach((key, value) => {
            this[key] = value
        })
    }
}