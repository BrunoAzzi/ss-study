import { Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector:    'date-range',
    templateUrl: 'date-range.template.html',
    styleUrls:   ['./date-range.component.scss'],
})

export class DateRangeComponent implements OnChanges {
    @Input() disabled: boolean = true;
    @Input() dateRange: object = null;

    range: any;
    model: object;

    ngOnChanges(changes: SimpleChanges) {
           this.range = this.dateRange;
           if(this.range!=null){
        this.model = {beginDate: {year: this.range.beginDate.date.year, month: this.range.beginDate.date.month, day: this.range.beginDate.date.day},
                        endDate: {year: this.range.endDate.date.year, month: this.range.endDate.date.month, day: this.range.endDate.date.day}};
                    }
  }

    disable() {
        let copy                            = this.getCopyOfOptions();
        copy.componentDisabled              = true;
        this.myDateRangePickerOptionsNormal = copy;
    }

    enable() {
        let copy                            = this.getCopyOfOptions();
        copy.componentDisabled              = false;
        this.myDateRangePickerOptionsNormal = copy;
    }

    getDate() {
        return this.selectedTextNormal;
    }

    myDateRangePickerOptionsNormal = {
        dateFormat:               'dd/mmm/yyyy',
        firstDayOfWeek:           'mo',
        sunHighlight:             true,
        height:                   '34px',
        width:                    '250px',
        inline:                   false,
        alignSelectorRight:       false,
        indicateInvalidDateRange: true,
        minYear:                  1900,
        maxYear:                  2200,
        componentDisabled:        true,
        showClearDateRangeBtn:    true,
        showSelectorArrow:        true,
        disableHeaderButtons:     true,
        showWeekNumbers:          false,
        showClearBtn:             true,
        showApplyBtn:             true,
        showSelectDateText:       true,
        openSelectorOnInputClick: false,
        selectBeginDateTxt:       'Selecione a data inicial',
        selectEndDateTxt:         'Selecione a data final',
        monthSelector:            true,
        yearSelector:             true,
        disableDateRanges:        [
            { beginDate: { year: 2016, month: 10, day: 5 }, endDate: { year: 2016, month: 10, day: 7 } },
            { beginDate: { year: 2016, month: 10, day: 10 }, endDate: { year: 2016, month: 10, day: 12 } }
        ],
        dayLabels:                { su: 'Dom', mo: 'Seg', tu: 'Ter', we: 'Qua', th: 'Qui', fr: 'Sex', sa: 'Sab' },
        monthLabels:              { 1: 'Jan', 2: 'Fev', 3: 'Mar', 4: 'Abr', 5: 'Mai', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Set', 10: 'Out', 11: 'Nov', 12: 'Dez' }
    };

    selectedDateRangeNormal = { beginDate: { year: 2018, month: 10, day: 9 }, endDate: { year: 2018, month: 10, day: 19 } };

    selectedTextNormal: string = '';
    border: string             = 'none';

    placeholderTxt: string = 'Período do Mandato';

    constructor() { 
     
    }

    clearDateRange() {
        this.selectedDateRangeNormal = null;
    }

    onDisableComponent(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.componentDisabled              = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onEditableDateField(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.editableDateRangeField         = checked;
        copy.openSelectorOnInputClick       = !checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onAlignSelectorRight(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.alignSelectorRight             = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onShowClearButton(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.showClearDateRangeBtn          = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onShowPlaceholderText(checked: boolean) {
        this.placeholderTxt = checked ? 'Selecione um intervalo entre datas' : '';
    }

    onDisableHeaderButtons(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.disableHeaderButtons           = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onShowWeekNumbers(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.showWeekNumbers                = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onDisableToday(checked: boolean) {
        let date = new Date();

        // Disable/enable today
        let copy                            = this.getCopyOfOptions();
        copy.disableDates                   = checked ? [{ year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() }] : [];
        this.myDateRangePickerOptionsNormal = copy;
    }

    onShowClearBtn(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.showClearBtn                   = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onShowApplyBtn(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.showApplyBtn                   = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onShowSelectDateText(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.showSelectDateText             = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onMonthSelector(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.monthSelector                  = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onYearSelector(checked: boolean) {
        let copy                            = this.getCopyOfOptions();
        copy.yearSelector                   = checked;
        this.myDateRangePickerOptionsNormal = copy;
    }

    onDateRangeChanged(event: any) {
        
        if (event.formatted !== '') {
            this.selectedTextNormal      = event.formatted;
            this.border                  = '1px solid #CCC';
            this.selectedDateRangeNormal = { beginDate: event.beginDate, endDate: event.endDate };
        }
        else {
            this.selectedTextNormal = '';
            this.border             = 'none';
        }
    }

    onInputFieldChanged(event: any) {}

    onCalendarViewChanged(event: any) {}

    onDateSelected(event: any) {}

    getCopyOfOptions(): any {
        return JSON.parse(JSON.stringify(this.myDateRangePickerOptionsNormal));
    }
}
