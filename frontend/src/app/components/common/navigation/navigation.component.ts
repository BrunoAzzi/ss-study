import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from "../../../mocks/company/company";
import { FakeCompanyService } from '../../../services/company.service';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [FakeCompanyService]
})

export class NavigationComponent {
    company: Company;

    menuItems = {
        main: [
            { route: 'constructions', icon: 'obra', label: 'Minhas Obras' },
            // { route: 'reports', icon: 'dados', label: 'Relatórios' },
        ],
        setup: [
            { route: 'companies', icon: 'empresa', label: 'Empresa' },
            { route: 'workers', icon: 'worker', label: 'Trabalhadores' },
            // { route: 'epis', icon: 'assets/epis.png', label: 'EPI' },
            { route: 'suppliers', icon: 'gerenciamento', label: 'Fornecedores' },
            // { route: 'repositories', icon: 'assets/repositories.png', label: 'Repositório' },
            { route: 'training', icon: 'capacita', label: 'Treinamentos' },
        ]
    };

    constructor(private router: Router, private companyService: FakeCompanyService) {
    }

    getCompany(): void {
        this.companyService.getCompany().subscribe(response => this.company = response);
    }

    ngOnInit(): void {
        this.getCompany();
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }

}
