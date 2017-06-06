import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toolbox',
    templateUrl: 'toolbox.component.html',
    styleUrls: ['toolbox.component.scss']
})

export class ToolboxComponent {
    @Output() change: EventEmitter<any> = new EventEmitter();

    private selectedTool: string;

    private tools: Array<any> = [
        { name: 'checkpoint', size: [53,51], icon: 'cone', title: 'Cone' },
        { name: 'cup_holders', size: [53,51], icon: 'cup_holders', title: 'Guarda Copos' },
        { name: 'crane', size: [53,51], icon: 'crane', title: 'Grua' },
        { name: 'water', size: [53,51], icon: 'water', title: 'Água' },
        { name: 'wc', size: [53,51], icon: 'wc', title: 'Banheiro' },
        { name: 'er', size: [53,51], icon: 'er', title: 'Primeiros Socorros' },
        { name: 'tray', size: [53,51], icon: 'tray', title: 'Bandejas' },
        { name: 'extinguisher', size: [53,51], icon: 'extinguisher', title: 'Extintor' },
        { name: 'accommodation', size: [53,51], icon: 'accommodation', title: 'Alojamento' },
        { name: 'refectory', size: [53,51], icon: 'refectory', title: 'Refeitório' },
        { name: 'recreation', size: [53,51], icon: 'recreation', title: 'Lazer' },
        { name: 'laundry', size: [53,51], icon: 'laundry', title: 'Lavanderia' },
        { name: 'carpentry', size: [53,51], icon: 'carpentry', title: 'Carpintaria' },
        { name: 'elevator', size: [53,51], icon: 'elevator', title: 'Elevador' },
        { name: 'totem', size: [53,51], icon: 'totem', title: 'Totem' },
    ];
    
    constructor() { }

    changeMark(name: string, size: number[]): void {
        if (this.selectedTool === name) {
            this.selectedTool = '';
            this.change.next({ tool: null });
        } else {
            this.selectedTool = name;
            if (name.length > 0) {
                const tool = { name: name, size: size };
                this.change.next({ tool: tool });
            }
        }
    }

    isSelectedTool(name: string): boolean {
        return name === this.selectedTool;
    }
}