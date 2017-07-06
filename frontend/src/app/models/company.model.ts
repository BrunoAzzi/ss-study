import { CompanyContact } from './company-contact.model';
import { Cnae } from './cnae.model';

export interface ICompany {
    id: number;
    cnpj: string;
    corporateName: string;
    fakeName: string;
    cnae: Cnae;
    cep: string;
    addressStreet: string;
    addressNumber: number;
    addressComplement: string;
    hasSesmt: boolean;
    hasCipa: boolean;
    isDesignatedCipa: boolean;
    employerNumber: number;
    logoUrl: string;
    urlDomain : string;
    logoFileName: string;
}

export class Company implements ICompany {
    id: number;
    cnpj: string;
    corporateName: string;
    fakeName: string;
    cnae: Cnae = new Cnae();
    cep: string;
    addressStreet: string;
    addressNumber: number;
    addressComplement: string;
    hasSesmt: boolean;
    hasCipa: boolean;
    isDesignatedCipa: boolean;
    employerNumber: number;
    logoUrl: string;
    urlDomain: string;
    logoFileName: string;
    responsibleCompany: CompanyContact;
    responsibleSST: CompanyContact;
    contact: CompanyContact;

    logoForm: FormData;

    constructor()
    constructor(data: ICompany)
    constructor(data?: any) {
        this.id = data && data.id || 1;
        this.cnpj = data && data.cnpj || undefined;
        this.corporateName = data && data.corporateName || undefined;
        this.fakeName = data && data.fakeName || undefined;
        this.cnae = data && data.cnae || new Cnae();
        this.cep = data && data.cep || undefined;
        this.addressStreet = data && data.addressStreet || undefined;
        this.addressNumber = data && data.addressNumber || undefined;
        this.addressComplement = data && data.addressComplement || undefined;
        this.hasSesmt = data && data.hasSesmt || undefined;
        this.hasCipa = data && data.hasCipa || undefined;
        this.employerNumber = data && data.employerNumber || undefined;
        this.isDesignatedCipa = data && data.isDesignatedCipa || undefined;
        this.logoUrl = data && data.logoUrl || undefined;
        this.urlDomain = data && data.urlDomain || undefined;
        this.logoFileName = data && data.logoFileName || undefined;
        this.responsibleCompany = data && data.responsibleCompany || new CompanyContact();
        this.responsibleSST = data && data.responsibleSST || new CompanyContact();
        this.contact = data && data.contact || new CompanyContact();
    }
}