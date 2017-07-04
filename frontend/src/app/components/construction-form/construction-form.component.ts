import { Construction } from './../../models/construction.model';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import {SafetyCardComponent} from '../common/safety-card/safety-card.component';

@Component({
    selector: 'construction-form',
    templateUrl: './construction-form.template.html',
    styleUrls: ['./construction-form.component.scss']
})
export class ConstructionFormComponent implements OnInit {

    @Input() construction: Construction;
    @Output() updatedConstruction: EventEmitter<Construction> = new EventEmitter();

    @ViewChild('detailsCard') detailsCard: SafetyCardComponent;
    @ViewChild('managersCard') managersCard: SafetyCardComponent;
    @ViewChild('blueprintsCard') blueprintsCard: SafetyCardComponent;
    @ViewChild('maintenancesCard') maintenancesCard: SafetyCardComponent;
    @ViewChild('workersCard') workersCard: SafetyCardComponent;

    elements: Array<SafetyCardComponent>;

    ngOnInit(): void {
        this.elements = [this.detailsCard, this.managersCard, this.blueprintsCard, this.maintenancesCard, this.workersCard];
        this.closeAll();

        this.detailsCard.open();
    }

    onConstructionDetailsSaved(construction: Construction) {
        this.updatedConstruction.emit(construction);

        this.closeAll();
        this.managersCard.open();
    }

    onConstructionManagersSaved(construction: Construction) {
        this.updatedConstruction.emit(construction);

        this.closeAll();
        this.blueprintsCard.open();
    }

    onConstructionBlueprintsSaved(construction: Construction) {
        this.updatedConstruction.emit(construction);

        this.closeAll();
        this.maintenancesCard.open();
    }

    closeAll() {
        this.elements.forEach(e => e.close());
    }
}
