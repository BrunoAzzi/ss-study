import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Worker } from '../../../models/worker.model';
import { Qualification } from '../../../models/qualification.model';
import { QualitiesService } from '../../../services/qualities.service';

@Component({
    selector: 'worker-qualifications-form',
    templateUrl: './worker-qualifications-form.template.html',
    styleUrls: ['./worker-qualifications-form.component.scss'],
    providers: [QualitiesService]

})

export class WorkerQualificationsFormComponent implements OnInit {
    @Input() worker: Worker;

    @Output() saved: EventEmitter<any> = new EventEmitter();

    maximunLength: number;
    skillNames: any;

    constructor(private qualitiesService: QualitiesService) { }

    ngOnInit() {

        if (this.worker.qualifications.length === 0) {
            this.worker.qualifications.push(new Qualification());
        }
       // this.skillNames = this.qualitiesService.getQualitiesList().startWith([]);
       this.skillNames =  [
        'NR 32',
        'NR 35',
        'NR 18',
        'NR 33',
    ]; 
        this.maximunLength = this.skillNames.length;
    }

    addSkill() {
        if (this.worker.qualifications.length < this.maximunLength)
            this.worker.qualifications.push(new Qualification());
    }

    removeSkill(skill: Qualification) {
        const index = this.worker.qualifications.indexOf(skill);
        if (index > -1) this.worker.qualifications.splice(index, 1);
    }




   /*  skillNames =
    [
        'NR 32',
        'NR 35',
        'NR 18',
        'NR 33',
    ];  */
}
