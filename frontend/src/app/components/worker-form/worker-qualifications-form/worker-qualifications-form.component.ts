import { Component, OnInit } from '@angular/core';
import {Skill} from "../../../mocks/skill/skill";

@Component({
  selector: 'safety-worker-qualifications-form',
  templateUrl: './worker-qualifications-form.template.html',
  styleUrls: ['./worker-qualifications-form.component.scss']
})
export class WorkerQualificationsFormComponent implements OnInit {

  skillList = [];
  maximunLength: number;

  constructor() {
    if (this.skillList.length < 1) this.skillList.push(new Skill());
    this.maximunLength = this.skillNames.length;
  }

  ngOnInit() {
  }

  addSkill() {
    if (this.skillList.length < this.maximunLength) this.skillList.push(new Skill());
  }

  removeSkill(skill: Skill) {
    const index = this.skillList.indexOf(skill);
    if (index > -1) this.skillList.splice(index, 1);
  }

  skillNames = [
    "NR 32",
    "NR 35",
    "NR 18",
    "NR 33",
  ];

}
