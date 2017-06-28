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

    constructor() {}

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