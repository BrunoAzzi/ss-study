import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NOTIFICATIONS } from './notification/mock';
import { COMPANY } from './company/mock';
import { COLABORADORES } from "./colaborador/mock";
import { WORKERS_DATA } from "./worker/workerData/mock";
import { SECURITY_WORKERS_DATA } from "./workers/securityWorks/mock";
import { CBOS } from './CBO/mock';
import { CONSTRUCTIONS } from "./constructions/mock";
import { SUPPLIERS } from "./supplier/mock";
import { WORKERS } from "./worker/mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let mocks = {
            colaborador: COLABORADORES,
            notifications: NOTIFICATIONS,
            company: COMPANY,
            cbo: CBOS,
            constructionSiteList: CONSTRUCTIONS,
            supplier: SUPPLIERS,
            worker: WORKERS,
            workersData: WORKERS_DATA,
            securityWorkersData: SECURITY_WORKERS_DATA,
        };

        return mocks;
    }
}


