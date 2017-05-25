export class Skill {
    dueDate: Date;
    attachment: any
    validityStart: Date;
    periodicity: number;

    constructor() {
        this.dueDate = new Date();
        this.periodicity = 5;
        this.attachment = null;
        this.validityStart = null;
    }
}
