import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NOTIFICATIONS } from './notification/mock';
import { COMPANY } from './company/mock';
import { COLABORADORES } from "./colaborador/mock";
import { WORKERS_DATA } from "./workers/workersData/mock";
import { CBOS } from './CBO/mock';
import { CONSTRUCTION_SITES } from "./construction-site/mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let mocks = {
            colaborador: COLABORADORES,
            notifications: NOTIFICATIONS,
            company: COMPANY,
            cbo: CBOS,
            constructionSiteList: CONSTRUCTION_SITES,
            workersData: WORKERS_DATA,
        };

        return mocks;
    }
}
