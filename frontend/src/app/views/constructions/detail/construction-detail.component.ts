import { Construction } from './../../../models/construction.model';
import { Observable } from 'rxjs/Observable';
import { ConstructionsService } from './../../../services/constructions.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'construction-detail',
    templateUrl: './construction-detail.template.html',
    styleUrls: ['./construction-detail.component.scss']
})
export class ConstructionDetailComponent {

    construction : Observable<Construction>

    constructor(private router: Router, public service: ConstructionsService) { }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }
}
