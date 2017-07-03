import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Worker} from "../../../models/worker.model";
import {Qualification} from "../../../models/qualification.model";

@Component({
  selector: 'safety-worker-qualifications-form',
  templateUrl: './worker-qualifications-form.template.html',
  styleUrls: ['./worker-qualifications-form.component.scss']
})
export class WorkerQualificationsFormComponent implements OnInit {
  @Input() worker: Worker = new Worker()

  @Output() saved: EventEmitter<any> = new EventEmitter()

  maximunLength: number;

  constructor() { }

  ngOnInit() {
      if (this.worker.qualifications.length === 0) {
          this.worker.qualifications.push(new Qualification())
      }
      this.maximunLength = this.skillNames.length;
  }

  addSkill() {
    if (this.worker.qualifications.length < this.maximunLength) this.worker.qualifications.push(new Qualification());
  }

  removeSkill(skill: Qualification) {
    const index = this.worker.qualifications.indexOf(skill);
    if (index > -1) this.worker.qualifications.splice(index, 1);
  }

  skillNames = [
    "NR 32",
    "NR 35",
    "NR 18",
    "NR 33",
  ];

}
