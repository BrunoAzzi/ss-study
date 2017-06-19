import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NOTIFICATIONS } from './notification/mock';
import { COMPANY } from './company/mock';
import { COLABORADORES } from "./colaborador/mock";
import { CBOS } from './CBO/mock';
import { CONSTRUCTIONS } from "./constructions/mock";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let mocks = {
            colaborador: COLABORADORES,
            notifications: NOTIFICATIONS,
            company: COMPANY,
            cbo: CBOS,
            constructionSiteList: CONSTRUCTIONS
        };

        return mocks;
    }
}
