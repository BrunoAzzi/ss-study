import {Component, ViewChild, Output, EventEmitter, Input, OnInit} from '@angular/core';


@Component({
    selector: 'construction-status-picker',
    templateUrl: './construction-status-picker.component.html',
    styleUrls: ['./construction-status-picker.component.scss']
})
export class ConstructionStatusPickerComponent implements OnInit {

    @Input() status: number
    @Output() selected: EventEmitter<string> = new EventEmitter()

    @ViewChild('statusInput') statusInput;

    availableStatuses = [
        { label: 'finalizada', value: 2 },
        { label: 'paralisada', value: 1 },
        { label: 'em andamento', value: 0 }
    ];

    ngOnInit() {
        console.log(this.status)
    }

    onChange(value) {
        this.selected.emit(value)
        // this.statusInput.nativeElement.value = value;
    }
}
