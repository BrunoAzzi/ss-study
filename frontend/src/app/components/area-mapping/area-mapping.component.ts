import { Component, NgZone, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MdDialog, MdDialogRef, MdButton, MdToolbar } from '@angular/material';
import { ConstructionsService } from './../../services/constructions.service';
import { Icon } from './../../models/icon.model';
import { Coordinate } from './../../models/coordinate.model';
import { Floor } from './../../models/floor.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as L from 'leaflet';

@Component({
    selector: 'area-mapping',
    templateUrl: 'area-mapping.component.html',
    styleUrls: ['area-mapping.component.scss']
})

export class AreaMappingComponent {

    barLevelStartIndex: any = new BehaviorSubject('');

    private map: any;
    private mapLayer: L.LayerGroup;
    private imageMap: any;

    private currentMark: any;
    private currentTool: any;
    private currentFloor: Floor;
    private currentPosition: any = { old: null, new: null };

    constructor(public dialog: MdDialog, private _ngZone: NgZone, private service: ConstructionsService) {
        window['angularComponent'] = { removeMark: this.removeMark, zone: this._ngZone };
    }

    toolChanged(e) {
        this.currentTool = e.tool;
        if (this.currentTool !== null && this.currentTool.name.length > 0) {
            this.currentMark = L.icon({
                iconUrl: `assets/maps/markers/${this.currentTool.name}.png`,
                iconSize: this.currentTool.size,
            });
        } else {
            this.currentMark = null;
        }
    }

    floorChanged(e) {
        this.mapLayer.clearLayers();
        this.currentFloor = e.floor;
        if (this.currentFloor !== null) {
            const bounds = new L.LatLngBounds(this.currentFloor.bounds);
            this.imageMap.remove();
            this.imageMap = L.imageOverlay(this.currentFloor.imagePath, bounds);
            this.imageMap.addTo(this.map);
            this.map.fitBounds(bounds);
            this.setMarkByList(this.currentFloor.coordinates);
        }
    }

    changedMap(map) {
        this.map = map;
        this.map.on('click', (e) => { this.setMarkByEvent(e); });
        setTimeout(() => {
            this.barLevelStartIndex.next(0);
        }, 0);
    }

    changedMapLayer(mapLayer) {
        this.mapLayer = mapLayer;
    }

    changedImageMap(imageMap) {
        this.imageMap = imageMap;
    }

    changePositionToRemove(e) {
        const value = e.target.value;
        if (value !== '') {
            const position = value.split(',');
            const latLng = { lat: Number(position[0]), lng: Number(position[1]) };
            this.destroyMark(latLng);
        }
    }

    removeMark(value: string) {
        const el: any = document.getElementById('removePosition');
        el.value = value;
        if ('createEvent' in document) {
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            el.dispatchEvent(evt);
        } else if ('fireEvent' in el) {
            el.fireEvent('onchange');
        }
    }

    private setMarkByEvent(e) {
        let dialogRef = this.dialog.open(ContentElementDialog, { width: '447px'});
        if (this.currentMark) {
            const position = e.latlng;
            const icon = new Icon(this.currentTool.name, this.currentTool.size);
            this.currentFloor.coordinates.push(new Coordinate(position, icon, this.currentTool.name));
            this.service.updateFloor(this.currentFloor);
            this.createMarker(position, this.currentMark);
        }
    }

    private setMarkByList(coordinates: Array<Coordinate>) {
        coordinates.forEach((coordinate, index, array) => {
            const mark = L.icon({
                iconUrl: `assets/maps/markers/${coordinate.icon.name}.png`,
                iconSize: coordinate.icon.size,
            });
            this.createMarker(coordinate.position, mark);
        });
    }

    private createMarker(position: [number, number], mark: any) {
        const marker = L.marker(position, { icon: mark, draggable: true, pane: 'markerPane' });
        marker.bindPopup(`<a onclick="window.angularComponent.removeMark('${position['lat']},${position['lng']}')">Remover</a>`);
        this.mapLayer.addLayer(marker);
        marker.on('move', (event: any) => {
            this.currentPosition = { old: event.oldLatLng, new: event.latlng };
        });
        marker.on('moveend', () => { this.updateMark(); });
    }

    private updateMark() {
        const index = this.currentFloor.coordinates.findIndex(coordinate => coordinate.position === this.currentPosition.old);
        if (index > -1) {
            this.currentFloor.coordinates[index].position = this.currentPosition.new;
        }
    }

    private destroyMark(latLng: any) {
        this.mapLayer.eachLayer((layer: L.Layer) => {
            const layerLatLng = layer['_latlng'];
            if (layerLatLng.lat === latLng.lat && layerLatLng.lng === latLng.lng) {
                layer.remove();
            }
        });

        this.currentFloor.coordinates = this.currentFloor.coordinates.filter(coordinate =>
            coordinate.position['lat'] !== latLng.lat && coordinate.position['lng'] !== latLng.lng
        );
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