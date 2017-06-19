import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NOTIFICATIONS } from './notification/mock';
import { COMPANY } from './company/mock';
import { COLABORADORES } from "./colaborador/mock";
import { CBOS } from './CBO/mock';
import { CONSTRUCTIONS } from "./constructions/mock";
import { PROVIDERS } from "./supplier/mock";
import { WORKERS } from "./worker/mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let mocks = {
            colaborador: COLABORADORES,
            notifications: NOTIFICATIONS,
            company: COMPANY,
            cbo: CBOS,
            constructionSiteList: CONSTRUCTIONS,
            supplier: PROVIDERS,
            worker: WORKERS
        };

        return mocks;
    }
}
