export interface IUser {
    id: number
    name: string
    email: string    
    role: string
    active: boolean        
}

export class User implements IUser {
    id: number
    name: string
    email: string    
    role: string
    active: boolean        

    public constructor() {}

    public initializeWithJSON(json: any): User {
        this.id = json.id
        this.name = json.name
        this.email = json.email        
        this.role = json.role
        this.active = json.active       

        return this
    }
}