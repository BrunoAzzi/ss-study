import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from "../../../models/company.model";
;import { CompanyService } from '../../../services/company.service';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html',
    styleUrls: ['./navigation.component.scss'],
    providers: [CompanyService]
})

export class NavigationComponent {
    company: Company;
    logo: string

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

    constructor(private router: Router, private service: CompanyService) {
    }

    getCompany(): void {
        this.service.getCompany(1).subscribe(response => {            
                this.logo = response.fakeName ?  response.fakeName.charAt(0) : '?'                
                this.company = new Company(response)}
        );
    }

    ngOnInit(): void {
        this.getCompany();        
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }

}
