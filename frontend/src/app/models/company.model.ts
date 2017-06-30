import { CompanyContact } from "./company-contact.model";
import { Cnae } from "./cnae.model"

export interface ICompany {
    id: number
    cnpj: string
    corporateName: string
    fakeName: string    
    cnae: Cnae
    cep: string
    addressStreet: string
    addressNumber: number
    addressComplement: string
    logoUrl: string
    logoFileName: string
}

export class Company implements ICompany {
    id: number
    cnpj: string
    corporateName: string
    fakeName: string
    cnae: Cnae    
    cep: string
    addressStreet: string
    addressNumber: number
    addressComplement: string
    logoUrl: string
    logoFileName: string
    responsibleCompany: CompanyContact
    responsibleSST: CompanyContact
    contact: CompanyContact

    constructor()
    constructor(data: ICompany)
    constructor(data?: any) {
        this.id = data && data.id || undefined
        this.cnpj = data && data.cnpj || undefined
        this.corporateName = data && data.corporateName || undefined
        this.fakeName = data && data.fakeName || undefined
        this.cnae = data && data.cnae || undefined        
        this.cep = data && data.cep || undefined
        this.addressStreet = data && data.addressStreet || undefined
        this.addressNumber = data && data.addressNumber || undefined
        this.addressComplement = data && data.addressComplement || undefined
        this.logoUrl = data && data.logoUrl || undefined
        this.logoFileName = data && data.logoFileName || undefined
        this.responsibleCompany = data && data.responsibleCompany || undefined
        this.responsibleSST = data && data.responsibleSST || undefined
        this.contact = data && data.contact || undefined
    }
}