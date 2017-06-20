import {Component, OnInit, ViewChild} from '@angular/core';
import {SafetyCardComponent} from '../../common/safety-card/safety-card.component';

@Component({
    selector: 'construction-site-data',
    templateUrl: './construction-site-data.template.html',
    styleUrls: ['./construction-site-data.component.scss']
})
export class ConstructionSiteDataComponent implements OnInit {
    
    @ViewChild('constructionData') constructionData: SafetyCardComponent;
    @ViewChild('managersData') managersData: SafetyCardComponent;
    @ViewChild('floorData') floorData: SafetyCardComponent;
    @ViewChild('goodsData') goodsData: SafetyCardComponent;
    @ViewChild('workersData') workersData: SafetyCardComponent;

    private elements: Array<SafetyCardComponent>;

    ngOnInit(): void {
        this.elements = [this.constructionData, this.managersData, this.floorData, this.goodsData, this.workersData];
        this.closeAll();
        this.constructionData.open();
    }

    showManagersForm() {
        this.closeAll();
        this.managersData.open();
    }

    private closeAll() {
        this.elements.forEach(e => e.close());
    }
}
