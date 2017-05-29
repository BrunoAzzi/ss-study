export class Skill {
    dueDate: Date;
    attachment: any
    validityStart: Date;
    periodicity: number;
    isApt: boolean;

    constructor() {
        this.isApt = true;
        this.dueDate = null;
        this.periodicity = 0;
        this.attachment = null;
        this.validityStart = null;
    }
}
