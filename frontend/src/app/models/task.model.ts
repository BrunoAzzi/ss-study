import { User } from './user.model';

export interface ITask {
    id: number
    createAt: string
    deadline: string
    title: string
    description: string
}

export class Task implements ITask {
    id: number
    createAt: string
    deadline: string
    title: string
    description: string
    author: User
    responsible: User

    public constructor() {}

    public initializeWithJSON(json: any): Task {
        this.id = json.id
        this.createAt = json.createAt
        this.deadline = json.deadline
        this.title = json.title
        this.description = json.description
        this.author = json.author
        this.responsible = json.responsible

        return this
    }
}