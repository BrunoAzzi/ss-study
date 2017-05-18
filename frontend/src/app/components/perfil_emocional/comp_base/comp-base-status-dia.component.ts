import { Component, Input } from '@angular/core';

@Component({
  selector: 'comp-base-status-dia',
  templateUrl: 'comp-base-status-dia.template.html',
  styleUrls: ['./comp-base-status-dia.component.scss'],
})
export class CompBaseStatusDia {
  @Input() image: string;
  @Input() label: string;
  @Input() value: number;

  constructor() {}
}
