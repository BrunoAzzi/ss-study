export interface ISupplier {
    id: number;
    reason: string;
    title: string;
    cnpj: string;
    sponsor: string;
    phone: string;
}

export class Supplier implements ISupplier {
    id: number;
    reason: string;
    title: string;
    cnpj: string;
    sponsor: string;
    phone: string;

    constructor()
    constructor(data: ISupplier)
    constructor(data?: any) {
        this.id      = data && data.id || undefined;
        this.reason  = data && data.reason || undefined;
        this.title   = data && data.title || undefined;
        this.cnpj    = data && data.cnpj || undefined;
        this.sponsor = data && data.sponsor || undefined;
        this.phone   = data && data.phone || undefined;
    }

    constains(value: string) {
        let NOT_FIND = -1;

        let containsCnpj   = this.cnpj.toLowerCase().indexOf(value.toLowerCase()) !== NOT_FIND;
        let containsReason = this.reason.toLowerCase().indexOf(value.toLowerCase()) !== NOT_FIND;
        let containsTitle  = this.title.toLowerCase().indexOf(value.toLowerCase()) !== NOT_FIND;

        return (containsCnpj || containsReason || containsTitle);
    }
}
