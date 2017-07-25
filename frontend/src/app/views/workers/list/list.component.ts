import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Worker } from '../../../models/worker.model';
import { WorkerService } from '../../../services/worker.service';

@Component({
    templateUrl: 'list.template.html',
    styleUrls:   ['./list.component.scss'],
})

export class WorkerListComponent implements OnInit {
    LAST_SAVED  = 'last_saved';
    FIRST_SAVED = 'first_saved';

    showSearch            = false;
    selectedOrder: string = this.LAST_SAVED;
    workerList: Worker[]  = [];

    activeFilters = {
        text:       '',
        personal:   false,
        outsourced: false,
    };

    availableOrders = [
        { name: 'Últimos cadastrados', code: this.LAST_SAVED },
        { name: 'Primeiros cadastrados', code: this.FIRST_SAVED }
    ];

    workers: Observable<Array<Worker>>;

    constructor(private router: Router, private route: ActivatedRoute, public service: WorkerService) { }

    ngOnInit() {
        this.workers = this.service.getWorkerList().startWith([]);
        // this.route.data.subscribe(data => this.workerList = data.workerList)
    }

    redirectTo(path) {
        this.router.navigate([path], { relativeTo: this.route });
    }

    toggleSearch() {
        this.showSearch = !this.showSearch;
    }

    getFilteredWorkers(workers: Array<Worker>) {
        return workers.filter(worker => {
            return (
                !(this.activeFilters.personal && !worker.isThirdparty) &&
                !(this.activeFilters.outsourced && worker.isThirdparty) &&
                !(this.activeFilters.text.length > 0 && worker.name.toLowerCase().indexOf(this.activeFilters.text.toLowerCase()) === -1)
            );
        });
    }

    toggleActiveFilter(filterName) {
        this.activeFilters = {
            ...this.activeFilters,
            [filterName]: !this.activeFilters[filterName]
        };
    }

    filterByText(text) {
        this.activeFilters = {
            ...this.activeFilters,
            text: text
        };
    }
}
