import { User } from './user.model';

export interface ITask {
    id: number
    createAt: Date
    deadline: Date
    title: string
    description: string
    checked: boolean
    isToday(): boolean
    getStatus(): string
}

export class Task implements ITask {
    id: number
    createAt: Date
    deadline: Date
    title: string
    description: string
    author: User
    responsible: User
    checked: boolean

    public constructor() {}

    public initializeWithJSON(json: any): Task {
        this.id = json.id
        this.createAt = json.createAt
        this.deadline = json.deadline
        this.title = json.title
        this.description = json.description
        this.author = json.author
        this.responsible = json.responsible
        this.checked = false

        return this
    }

    public toJSON() {
        return {
            id:  this.id,
            createAt: this.createAt,
            deadline: this.deadline,
            title: this.title,
            description: this.description,
            author: this.author,
            responsible: this.responsible
        };
    }

    public isToday(): boolean {
        var now = new Date();

        return (this.deadline.getDay() == now.getDay() && 
                this.deadline.getMonth() == now.getMonth() && 
                this.deadline.getFullYear() == now.getFullYear());
    }

    public getStatus(): string {
        var now = new Date();

        if (this.deadline < now) {
            return "late";
        } else if ((this.deadline.getTime() - now.getTime()) <
                  ((this.deadline.getTime() - this.createAt.getTime()) * 0.3)) {
            return "ending";
        }

        return "in-time";
    }
}