import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from "../../../mocks/company/company";
import { CompanyService } from '../../../services/company.service'

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [CompanyService]
})

export class NavigationComponent {
    company: Company;

    menuItems = {
      main: [
        { route: 'myconstructionsites', icon: 'assets/myconstructionsites.png', label: 'Minhas Obras' },
        { route: 'reports', icon: 'assets/reports.png', label: 'Relatórios' },
      ],
      setup: [
        { route: 'companies', icon: 'assets/companies.png', label: 'Empresa' },
        { route: 'workers', icon: 'assets/workers.png', label: 'Trabalhadores' },
        { route: 'epis', icon: 'assets/epis.png', label: 'EPI' },
        { route: 'thirdparties', icon: 'assets/thirdparties.png', label: 'Fornecedores' },
        { route: 'repositories', icon: 'assets/repositories.png', label: 'Repositório' },
        { route: 'training', icon: 'assets/training.png', label: 'Treinamentos' },
      ]
    }

    constructor(private router: Router, private companyService: CompanyService) { }

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
