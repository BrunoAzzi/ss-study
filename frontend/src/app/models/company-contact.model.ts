export interface ICompanyContact {
    id: number
    name: string
    role: string
    phone: string
    fax: string
    email: string

}

export class CompanyContact implements ICompanyContact {

    id: number
    name: string
    role: string
    phone: string
    fax: string
    email: string

    constructor()
    constructor(data: ICompanyContact)
    constructor(data?: any) {
        this.id = data && data.id || 1
        this.name = data && data.name || undefined
        this.role = data && data.role || undefined
        this.phone = data && data.phone || undefined
        this.fax = data && data.fax || undefined
        this.email = data && data.email || undefined
    }

}