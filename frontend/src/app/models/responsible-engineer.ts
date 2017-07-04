export class ResponsibleEngineer {
    name: string;
    email: string;
    phone: string;

    public initializeWithJSON(json: any) {
        this.name = json.name;
        this.email = json.email;
        this.phone = json.phone;
        return this;
    }

    public toJSON() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone
        };
    }
}