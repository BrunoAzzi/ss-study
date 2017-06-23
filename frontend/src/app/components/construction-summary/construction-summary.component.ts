import { Construction } from './../../models/construction.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'safety-construction-summary',
  templateUrl: './construction-summary.component.html',
  styleUrls: ['./construction-summary.component.scss']
})
export class ConstructionSummaryComponent implements OnInit {

  @Input() construction : Construction;

  constructor() { }

  ngOnInit() {
  }
}
