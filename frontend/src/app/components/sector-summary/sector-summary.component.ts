import { Sector } from './../../models/sector.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'safety-sector-summary',
  templateUrl: './sector-summary.component.html',
  styleUrls: ['./sector-summary.component.scss']
})
export class SectorSummaryComponent implements OnInit {

  @Input() sector : Sector;

  constructor() { }

  ngOnInit() {

  }

}
