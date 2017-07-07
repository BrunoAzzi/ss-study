import { Construction } from './../../../../models/construction.model';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'construction-details-form',
    templateUrl: './construction-details-form.component.html',
    styleUrls: ['./construction-details-form.component.scss']
})
export class ConstructionDetailsFormComponent {

    @Input() construction: Construction;
    @Output() saved: EventEmitter<Construction> = new EventEmitter();

    supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];
    fileName: string;

    constructor() {}

    processFile(file) {
        const fileReader = new FileReader();
        fileReader.onload = ((theFile) => {
            return (e) => {
                this.construction.image = fileReader.result;
                this.fileName = theFile.name;
            };
        })(file);
        fileReader.readAsDataURL(file);
    }

    onStatusChanged(value: number) {
        this.construction.status = value;
    }

    onCepSearch(data) {
        this.construction.cep = data.cep;
        this.construction.address = data.street + ' , ' + data.neighborhood + ' - ' + data.city + ' / ' + data.state;
    }

    onLogoChange(file: File) {
        this.construction.imageFile = file;
    }

    save() {
        const construction = Object.assign(
            new Construction(),
            this.construction
        );
        this.saved.emit(construction);
    }
}
