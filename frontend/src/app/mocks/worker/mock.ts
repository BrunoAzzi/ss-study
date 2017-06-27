import { WORKERS_DATA } from "./workerData/mock";

export const WORKERS = [
    { id: 1, name: "João Alberto Farias", cbo: "0062423153", cpf: "091.739.112-17", phone: "(48) 987234567", ocupation: "Pedreiro", isThirdparty: false, personalData: WORKERS_DATA },
    { id: 1, name: "João Alberto Farias", cbo: "0062423153", cpf: "091.739.112-17", phone: "(48) 987234567", ocupation: "Pedreiro", isThirdparty: true, personalData: WORKERS_DATA, thirpartyName: "Construtora Limitada Ltda." },
    { id: 1, name: "João Alberto Farias", cbo: "0062423153", cpf: "091.739.112-17", phone: "(48) 987234567", ocupation: "Pedreiro", isThirdparty: true,  personalData: WORKERS_DATA },
    { id: 1, name: "João Alberto Farias", cbo: "0062423153", cpf: "091.739.112-17", phone: "(48) 987234567", ocupation: "Pedreiro", isThirdparty: false, personalData: WORKERS_DATA },
];
