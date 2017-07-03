import { OnInit } from '@angular/core';
import { Construction } from './../../../../models/construction.model';
import { ConstructionsService } from './../../../../services/constructions.service';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'construction-details-form',
    templateUrl: './construction-details-form.component.html',
    styleUrls: ['./construction-details-form.component.scss']
})
export class ConstructionDetailsFormComponent {

    @Input() construction : Construction
    @Output() saved : EventEmitter<Construction> = new EventEmitter()

    supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
    image : any
    fileName : string

    processFile(file) {
        const fileReader = new FileReader();
        fileReader.onload = ((theFile) => {
            return (e) => {
                this.image = fileReader.result;
                this.fileName = theFile.name
            }
        })(file);
        fileReader.readAsDataURL(file);
    }

    logo: any;
    featured: any;

    constructor() {
    }

    onStatusChanged(value: number) {
        this.construction.status = value
    }

    onCepSearch(data) {
        this.construction.cep = data.cep
        this.construction.address = data.street + ' , ' + data.neighborhood + ' - ' + data.city + ' / ' + data.state
    }

    onLogoChange(image) {
        this.logo = image;
    }

    onFeaturedChange(image) {
        this.featured = image;
    }

    save(f: NgForm) {
        const construction = Object.assign(
            new Construction(),
            this.construction,
            {
                ...f.value,
                logo: this.logo,
                featured: this.featured
            }
        )
        this.saved.emit(construction)
    }
}
