import { CompanyContact } from "./company-contact.model";

export interface ICompany {
    id: number
    cnpj: string
    tradeName: string
    fantasyName: string
    cnae: string
    cnaeDescription: string
    cep: string
    address: string
    addressNumber: number
    addressComplement: string
    url: string
}

export class Company implements ICompany {
    id: number
    cnpj: string
    tradeName: string
    fantasyName: string
    cnae: string
    cnaeDescription: string
    cep: string
    address: string
    addressNumber: number
    addressComplement: string
    url: string
    companyResponsableData: CompanyContact
    sstResponsableData: CompanyContact
    contactData: CompanyContact

    constructor()
    constructor(data: ICompany)
    constructor(data?: any) {
        this.id = data && data.id || undefined
        this.cnpj = data && data.cnpj || undefined
        this.tradeName = data && data.tradeName || undefined
        this.fantasyName = data && data.fantasyName || undefined
        this.cnae = data && data.cnae || undefined
        this.cnaeDescription = data && data.cnaeDescription || undefined
        this.cep = data && data.cep || undefined
        this.address = data && data.address || undefined
        this.addressNumber = data && data.addressNumber || undefined
        this.addressComplement = data && data.addressComplement || undefined
        this.url = data && data.url || undefined
        this.companyResponsableData = data && data.companyResponsableData || undefined
        this.sstResponsableData = data && data.sstResponsableData || undefined
        this.contactData = data && data.contactData || undefined
    }
}