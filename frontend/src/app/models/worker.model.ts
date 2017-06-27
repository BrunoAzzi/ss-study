import { WorkerData } from "./worker/personalData.model";

export interface IWorker {
    id: number;
    name: string;
    cbo: string;
    cpf: string;
    phone: string;
    ocupation: string;
    isThirdparty: boolean;
}

export class Worker implements IWorker {
    id: number;
    name: string;
    cbo: string;
    cpf: string;
    phone: string;
    ocupation: string;
    isThirdparty: boolean = false;
    thirdpartyName: string;
    personalData: WorkerData = new WorkerData();

    constructor()
    constructor(data: IWorker)
	constructor(data?: any) {
        this.id = data && data.id || undefined
        this.name = data && data.name || undefined
        this.cbo = data && data.cbo || undefined
        this.cpf = data && data.cpf || undefined
        this.phone = data && data.phone || undefined
        this.ocupation = data && data.ocupation || undefined
        this.isThirdparty = data && data.isThirdparty || false
        this.thirdpartyName = data && data.thirdpartyName || undefined
        this.personalData = new WorkerData(data.personalData);
    }
}
