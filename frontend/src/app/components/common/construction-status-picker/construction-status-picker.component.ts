import { Component, ViewChild, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'construction-status-picker',
    templateUrl: './construction-status-picker.component.html',
    styleUrls: ['./construction-status-picker.component.scss']
})
export class ConstructionStatusPickerComponent {

    @Output() selected : EventEmitter<string> = new EventEmitter()

    @ViewChild('statusInput') statusInput;

    availableStatus = ['finalizada', 'paralisada', 'em andamento'];

    onChange(value) {
        this.statusInput.nativeElement.value = value;
    }
}
