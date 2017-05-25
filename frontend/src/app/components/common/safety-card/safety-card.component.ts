import { Component, Input } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'safety-card',
    templateUrl: 'safety-card.template.html',
    styleUrls: ['./safety-card.component.scss'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                height: '0px',
                'padding-top': '0',
                'padding-bottom': '0',
            })),
            state('active', style({
                height: '*'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class SafetyCardComponent {
    state: string = "active";
    private toggleIcon: string = "keyboard_arrow_up"
    @Input() isHidden: boolean = false;
    toggleDisabled: boolean = false;

    @Input()
    set toggleDisable(v: boolean) {
        this.toggleDisabled = this.coerceBooleanProperty(v);
    }

    coerceBooleanProperty(value: any): boolean {
       return value != null && `${value}` !== 'false';
   }

    toggleState() {
        this.isHidden = !this.isHidden;
        if (this.isHidden) {
            this.state = "inactive";
            this.toggleIcon = "keyboard_arrow_down";
        } else {
            this.state = "active";
            this.toggleIcon = "keyboard_arrow_up";
        }
    }
}

@Component({
    selector: 'safety-card-header',
    template: '<ng-content></ng-content>',
    styles: [' :host { width: 100%; display: flex; box-sizing: border-box; width: 100%; flex-direction: row; align-items: center; white-space: nowrap; } ']
})
export class SafetyCardHeaderComponent { }

@Component({
    selector: 'safety-card-content',
    template: '<ng-content></ng-content>',
})
export class SafetyCardContentComponent { }
