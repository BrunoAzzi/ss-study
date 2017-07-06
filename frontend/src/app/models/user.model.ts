export interface IUser {
    id: number
    name: string
    email: string
    password: string
    role: string
    active: boolean    
    token: string
    recoverPassToken: string
}

export class User implements IUser {
    id: number
    name: string
    email: string
    password: string
    role: string
    active: boolean    
    token: string
    recoverPassToken: string

    public constructor() {}

    public initializeWithJSON(json: any): User {
        this.id = json.id
        this.name = json.name
        this.email = json.email
        this.password = json.password
        this.role = json.role
        this.active = json.active
        this.token = json.token || ''
        this.recoverPassToken = json.recoverPassToken || ''

        return this
    }
}