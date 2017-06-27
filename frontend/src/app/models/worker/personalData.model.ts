export interface IWorkerData {
    cpf: string;
    name: string;
}

export class WorkerData {
    name: string;
    cpf: string;
    sexOption: string;
    scholarity: string;
    nit: string;
    cep: string;
    completeAddress: string;
    complement: string;
    contact: string;
    cbo: string;
    laborCBO: string;
    cboDescription: string;
    specialNecessity: boolean;
    status: string;
    ownContracting: string;
    company: string;
    photoPath: string;
    admissionDate: Object;
    birthDate: Object;
    ctps: number;
    age: number;

          
    constructor()
    constructor(data: IWorkerData)
    constructor(data?: any) {

        let adate_aux = data && new Date(data.admissionDate) || null;  
        if(adate_aux!=null){   
              this.admissionDate = { date: { year: adate_aux.getFullYear(), month: adate_aux.getMonth() + 1, day: adate_aux.getDate() } }
        }

        let bdate_aux = data && new Date(data.birthDate) || null;    
        if(bdate_aux!=null){   
              this.birthDate = { date: { year: bdate_aux.getFullYear(), month: bdate_aux.getMonth() + 1, day: bdate_aux.getDate() } }
        }

        let sex = data && data.sexOption || "m";
        this.sexOption = (sex == "m") ? "Masculino" : "Feminino";

        let hyred = data && data.ownContracting || "";
        this.ownContracting = (hyred == "Terceiro") ? "Terceiro" : "Próprio";
        
       
        this.ctps = data && data.ctps || 0;
        this.age = data && data.age || 0;
        this.name = data && data.name || "";
        this.cpf = data && data.cpf || "";
        this.scholarity = data && data.scholarity || "";
        this.nit = data && data.nit || "";
        this.cep = data && data.cep || "";
        this.completeAddress = data && data.completeAddress || "";
        this.complement = data && data.complement || "";
        this.contact = data && data.contact || "";
        this.cbo = data && data.cbo || "";
        this.laborCBO = data && data.laborCBO || "";
        this.cboDescription = data && data.cboDescription || "";
        this.specialNecessity = data && data.specialNecessity || false;
        this.status = data && data.status || "";
        this.company = data && data.company || "";
        this.photoPath = data && data.photoPath || "";
    }
}
