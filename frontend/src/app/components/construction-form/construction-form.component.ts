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

    @ViewChild('constructionData') constructionData: SafetyCardComponent;
    @ViewChild('managersData') managersData: SafetyCardComponent;
    @ViewChild('floorData') floorData: SafetyCardComponent;
    @ViewChild('goodsData') goodsData: SafetyCardComponent;
    @ViewChild('workersData') workersData: SafetyCardComponent;

    elements: Array<SafetyCardComponent>;

    ngOnInit(): void {
        this.elements = [this.constructionData, this.managersData, this.floorData, this.goodsData, this.workersData];
        this.closeAll();

        this.constructionData.open();
    }

    onConstructionDetailsSaved(construction: Construction) {
        this.updatedConstruction.emit(construction);

        this.closeAll();
        this.managersData.open();
    }

    onConstructionManagersSaved(construction: Construction) {
        this.updatedConstruction.emit(construction);

        this.closeAll();
        this.managersData.open();
    }

    closeAll() {
        this.elements.forEach(e => e.close());
    }
}
