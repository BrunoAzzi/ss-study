import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConstructionSiteService} from '../../../../../services/construction-site/construction-site.service';
import {ConstructionSite} from '../../../../../models/construction-site.model';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'construction-site-data-form',
    templateUrl: './construction-site-data-form.component.html',
    styleUrls: ['./construction-site-data-form.component.scss']
})
export class ConstructionSiteDataFormComponent {

    @Output() onShowNext = new EventEmitter();
    logo: any;
    featured: any;

    constructor(private service: ConstructionSiteService, public snackBar: MdSnackBar) {
    }

    //noinspection JSMethodCanBeStatic
    onCepSearch(f, data) {
        const mappedData = {
            city: data.city + ' / ' + data.state,
            address: data.street + ' , ' + data.neighborhood
        };
        f.setValue({...f.value, ...mappedData});
    }

    onLogoChange(image) {
        this.logo = image;
    }

    onFeaturedChange(image) {
        this.featured = image;
    }

    //noinspection JSMethodCanBeStatic
    statusChanged(event, f: NgForm) {
        const status = event.value;
        f.setValue({...f.value, status});
    }

    save(f: NgForm) {
        const constructionSite = Object.assign(
            new ConstructionSite(),
            {
                ...f.value,
                logo: this.logo,
                featured: this.featured
            }
        );
        this.service.saveConstructionSite(constructionSite)
            .then(() => this.onShowNext.emit())
            .catch(() => this.snackBar.open('Falha ao salvar os dados da obra!', null, {duration: 3000}));
    }


}
