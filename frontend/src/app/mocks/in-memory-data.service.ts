import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NOTIFICATIONS } from './notification/mock';
import { COMPANY } from './company/mock';
import { COLABORADORES } from "./colaborador/mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let mocks = {
            colaborador: COLABORADORES,
            notifications: NOTIFICATIONS,
            company: COMPANY
        };

        return mocks;
    }
}
