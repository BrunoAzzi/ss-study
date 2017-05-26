export class Recycling {
    attachment: any
    dueDate: Date;
    validityStart: Date;
    periodicity: number;

    constructor() {
        this.attachment = null;
        this.dueDate = null;
        this.validityStart = null;
        this.periodicity = 0;
    }
}
