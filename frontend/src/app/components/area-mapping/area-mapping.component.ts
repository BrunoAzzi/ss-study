import { OutputEmitter } from '@angular/compiler/src/output/abstract_emitter';
import { Construction } from './../../models/construction.model';
import { Component, NgZone, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef, MdButton, MdToolbar } from '@angular/material';
import { ConstructionsService } from './../../services/constructions.service';
import { Icon } from './../../models/icon.model';
import { Marker } from './../../models/marker.model';
import { Floor } from './../../models/floor.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as L from 'leaflet';

@Component({
    selector: 'area-mapping',
    templateUrl: 'area-mapping.component.html',
    styleUrls: ['area-mapping.component.scss']
})

export class AreaMappingComponent {

    @Input() construction: Construction;
    @Output() updateFloor : EventEmitter<Floor> = new EventEmitter();

    public currentFloor: Floor;
    public currentTool: any;

    constructor(public dialog: MdDialog) {}

    onFloorUpdated(floor : Floor) {
        this.currentFloor = floor
        this.updateFloor.next(floor)
    }

    toolChanged(e) {
        this.currentTool = e.tool;
    }

    onFloorChanged(floor : Floor) {
        this.currentFloor = floor;
    }
}

@Component({
  selector: 'demo-content-element-dialog',
  styles: [
    `img {
      max-width: 100%;
    }`
  ],
  template: `
        <form>
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h2>MAPEAR</h2>
                    <span flex></span>
                </div>
            </md-toolbar>

            <md-dialog-content>
                <div class="md-dialog-content">
                    Teste
                </div>
            </md-dialog-content>

            <md-dialog-actions layout="row">
                <span flex></span>
                <button md-button ng-click="answer('not useful')">PRÓXIMO</button>
                <span flex></span>
            </md-dialog-actions>
        </form> 
  `
})
export class ContentElementDialog {
  actionsAlignment: string;

  constructor(public dialog: MdDialog) { }
}