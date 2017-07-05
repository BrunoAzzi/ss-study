export class Security {
    submitted: boolean;
    invalidDate: boolean;

    public initializeWithJSON(json: any) {
        return this;
    }

    public toJSON() {
        return {};
    }
}