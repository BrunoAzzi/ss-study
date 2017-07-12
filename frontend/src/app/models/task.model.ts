import { AttachmentFile } from './attachmentFile.model';
import { User } from './user.model';

import * as Moment from "moment";

export interface ITask {
    id: number
    createAt: string
    deadline: string
    title: string
    description: string
    checked: boolean
    isToday(): boolean
    getStatus(): string
}

export class Task implements ITask {
    id: number
    createAt: string
    deadline: string
    title: string
    description: string
    author: User
    responsible: User
    checked: boolean    
    attachmentFiles: Array<AttachmentFile> = []

    public constructor() {}

    public initializeWithJSON(json: any): Task {
        this.id = json.id
        this.createAt = json.createAt ? this.setDateFormat(new Date(json.createAt.split(' ').join('T'))) : this.setDateFormat(new Date())
        this.deadline = json.deadline ?  this.setDateFormat(new Date(json.deadline.split(' ').join('T'))) : this.setDateFormat(new Date())
        this.title = json.title
        this.description = json.description
        this.author = json.author
        this.responsible = json.responsible
        this.checked = json.checked
        this.attachmentFiles = json.attachmentFiles

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
            responsible: this.responsible,
            checked: this.checked,
            attachmentFiles: this.attachmentFiles
        };
    }

    public isToday(): boolean {
        var now = new Date();
        let deadline = new Date(this.deadline);

        return (deadline.getDay() == now.getDay() && 
                deadline.getMonth() == now.getMonth() && 
                deadline.getFullYear() == now.getFullYear());
    }

    public getStatus(): string {
        var now = new Date();
        let deadline = new Date(this.deadline);
        let createAt = new Date(this.createAt);

        if (deadline < now) {
            return "late";
        } else if ((deadline.getTime() - now.getTime()) <
                  ((deadline.getTime() - createAt.getTime()) * 0.3)) {
            return "ending";
        }

        return "in-time";
    }

    private setDateFormat(_date: any) {        
        return Moment(_date).format('YYYY-MM-DD hh:mm:ss');
    }
}