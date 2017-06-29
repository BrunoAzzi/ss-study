import { Component, AfterContentChecked, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, NgZone } from '@angular/core';
import { MdDialog, MdDialogRef} from '@angular/material';

import { MappingDialog } from './../area-mapping/cone/mapping-dialog/mapping-dialog.component';
import { Icon } from './../../models/icon.model'
import { Marker } from './../../models/marker.model'
import { Observable } from 'rxjs/Observable'
import { Floor } from './../../models/floor.model'
import * as L from 'leaflet'

@Component({
    selector: 'blueprint',
    templateUrl: 'blueprint.component.html',
    styleUrls: ['blueprint.component.scss']
})

export class BlueprintComponent implements AfterContentChecked, OnChanges {

    @Input() mapType: string
    @Input() filteredMarkers : Array<any>
    @Input() floor : Floor
    @Input() tool : any

    @Output() updateFloor : EventEmitter<any> = new EventEmitter()

    private map: any
    private mapLayer: L.LayerGroup
    private imageMap: any
    private firstTime = true

    private currentPosition: any = { old: null, new: null }
    private currentMark: any

    constructor(private _ngZone: NgZone, public dialog: MdDialog) {
        window['angularComponent'] = { removeMark: this.removeMark, zone: this._ngZone };
    }

    ngOnChanges() {
        if (!this.firstTime) {
            this.changeFloor(this.floor)
            this.changeTool(this.tool)
        }
    }

    ngAfterContentChecked(): void {
        const element = document.getElementById(`sheet${this.mapType}`)
        if (this.firstTime && element !== null && element !== undefined) {
            this.firstTime = false

            this.map = L.map(`sheet${this.mapType}`, {
                crs: L.CRS.Simple,
                maxZoom: 3
            })
            this.map.on('click', (e) => { 
                this.setMarkByEvent(e) 
            })

            const bounds = new L.LatLngBounds([0, 0], [413, 186])
            this.imageMap = L.imageOverlay('', bounds)
            this.imageMap.addTo(this.map)
            this.map.fitBounds(bounds)

            this.mapLayer = new L.LayerGroup([])
            this.mapLayer.addTo(this.map)

            this.changeFloor(this.floor)
            this.changeTool(this.tool)
        }
    }

    changeTool(tool: any) {
        if (tool && tool.name.length > 0) {
            this.currentMark = L.icon({
                iconUrl: `assets/maps/markers/${tool.name}.png`,
                iconSize: tool.size,
            })
        } else {
            this.currentMark = null
        }
    }

    changeFloor(floor : Floor) {
        if (floor) {
            this.mapLayer.clearLayers()
            const bounds = new L.LatLngBounds(floor.bounds)
            this.imageMap.remove()
            this.imageMap = L.imageOverlay(floor.imagePath, bounds)
            this.imageMap.addTo(this.map)
            this.map.fitBounds(bounds)
            this.setMarkByList(floor.markers)
        }
    }

    changePositionToRemove(e) {
        const value = e.target.value
        if (value !== '') {
            const position = value.split(',')
            const latLng = { lat: Number(position[0]), lng: Number(position[1]) }
            this.destroyMark(latLng)
        }
    }

    removeMark(value: string) {
        const el: any = document.getElementById('removePosition')
        el.value = value
        if ('createEvent' in document) {
            const evt = document.createEvent('HTMLEvents')
            evt.initEvent('change', false, true)
            el.dispatchEvent(evt)
        } else if ('fireEvent' in el) {
            el.fireEvent('onchange')
        }
    }

    private filterCoordinates(coordinates) {
        return this.filteredMarkers ? coordinates.filter(coordinate => {
            return (this.filteredMarkers.map(filter => filter.name).indexOf(coordinate.type) === -1)
        }) : coordinates
    }

    private setMarkByList(coordinates: Array<Marker>) {
        this.filterCoordinates(coordinates).forEach((coordinate, index, array) => {
            const mark = L.icon({
                iconUrl: `assets/maps/markers/${coordinate.icon.name}.png`,
                iconSize: coordinate.icon.size,
            })
            this.createMarker(coordinate.position, mark)
        })
    }

    private isEditable() {
        return (this.mapType === "Mapping")
    }

    private createMarker(position: [number, number], mark: any) : void {
        const marker = L.marker(position, { icon: mark, draggable: this.isEditable(), pane: 'markerPane' })

        if (this.isEditable()){
            marker.bindPopup(`<a onclick="window.angularComponent.removeMark('${position['lat']},${position['lng']}')">Remover</a>`)
            marker.on('move', (event: any) => {
                this.currentPosition = { old: event.oldLatLng, new: event.latlng }
            })
            marker.on('moveend', () => { this.updateMark() })
        } else {
            marker.bindPopup(`
                <h1>JoÃ£o da Silva Antunes</h1>
                <p>10:09 - 10/05</p>
                <p>Cone 02381</p>
            `)
            marker.on('mouseover', function (e) {
                this.openPopup()
            })
            marker.on('mouseout', function (e) {
                this.closePopup()
            })
        }

        this.mapLayer.addLayer(marker)
    }

    private updateMark() {
        const index = this.floor.markers.findIndex(coordinate => coordinate.position === this.currentPosition.old)
        if (index > -1) {
            this.floor.markers[index].position = this.currentPosition.new
        }
    }

    private setMarkByEvent(e) {
        if (this.currentMark) {
            const position = e.latlng
            const icon = new Icon(this.tool.name, this.tool.size)
            this.floor.markers.push(new Marker(position, icon, this.tool.name))
            this.updateFloor.next(this.floor)
            this.createMarker(position, this.currentMark)

            if(icon.name === "checkpoint") {
                let dialogRef = this.dialog.open(MappingDialog); 
            }
            //this.updateFloor.next(this.floor)
            //this.createMarker(position, this.currentMark);
        }
    }

    private destroyMark(latLng: any) {
        this.mapLayer.eachLayer((layer: L.Layer) => {
            const layerLatLng = layer['_latlng']
            if (layerLatLng.lat === latLng.lat && layerLatLng.lng === latLng.lng) {
                layer.remove()
            }
        })

        this.floor.markers = this.floor.markers.filter(coordinate =>
            coordinate.position['lat'] !== latLng.lat && coordinate.position['lng'] !== latLng.lng
        )
    }
}