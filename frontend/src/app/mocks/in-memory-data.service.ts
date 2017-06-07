import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NOTIFICATIONS } from './notification/mock';
import { COMPANY } from './company/mock';
import { COLABORADORES } from "./colaborador/mock";
import { CONSTRUCTION_SITES } from "./construction-site/mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let mocks = {
            colaborador: COLABORADORES,
            notifications: NOTIFICATIONS,
            company: COMPANY,
            constructionSiteList: CONSTRUCTION_SITES
        };

        return mocks;
    }
}
