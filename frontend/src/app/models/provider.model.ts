export interface IProvider {
    id: number;
    reason: string;
    title: string;
    cnpj: string;
    sponsor: string;
    phone: string;
}

export class Provider implements IProvider {
    id: number;
    reason: string;
    title: string;
    cnpj: string;
    sponsor: string;
    phone: string;

    constructor()
    constructor(data: IProvider)
    constructor(data?: any) {
		this.id = data && data.id || undefined;
		this.reason = data && data.reason || undefined;
		this.title = data && data.title || undefined;
		this.cnpj = data && data.cnpj || undefined;
		this.sponsor = data && data.sponsor || undefined;
		this.phone = data && data.phone || undefined;
    }

    constains(value: string) {
        let NOT_FIND = -1;
        return this.title.toLowerCase().indexOf(value.toLowerCase()) === NOT_FIND
    }
}
