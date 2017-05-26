export class Skill {
    dueDate: Date;
    attachment: any
    validityStart: Date;
    periodicity: number;

    constructor() {
        this.dueDate = null;
        this.periodicity = 0;
        this.attachment = null;
        this.validityStart = null;
    }
}
