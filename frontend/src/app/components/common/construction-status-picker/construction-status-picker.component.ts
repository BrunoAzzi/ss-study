import {Component, ViewChild} from '@angular/core';


@Component({
    selector: 'construction-status-picker',
    templateUrl: './construction-status-picker.component.html',
    styleUrls: ['./construction-status-picker.component.scss']
})
export class ConstructionStatusPickerComponent {

    @ViewChild('statusInput') statusInput;

    availableStatus = ['finalizada', 'paralizada', 'em andamento'];

    onChange(value) {
        this.statusInput.nativeElement.value = value;
    }

}
