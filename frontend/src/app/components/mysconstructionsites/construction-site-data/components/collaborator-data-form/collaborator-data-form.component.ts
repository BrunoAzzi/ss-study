import {Component, OnInit} from '@angular/core';
import {CollaboratorService} from '../../../../../services/colaborador/collaborator.service';
import {Collaborator} from '../../../../../models/colLaborator.model';

const includesString = (toCheck, value) => toCheck.toLowerCase().includes(value.toLowerCase());

const filterByString = value =>
    ({name, cpf, occupation}) => [name, cpf, occupation].reduce(((prev, toCheck) => prev || includesString(toCheck, value)), false);

@Component({
    selector: 'collaborator-data-form',
    templateUrl: './collaborator-data-form.component.html',
    styleUrls: ['./collaborator-data-form.component.scss'],
    providers: [CollaboratorService]
})
export class CollaboratorDataFormComponent implements OnInit {

    private collaborators: Array<Collaborator> = [];
    private filteredCollaborators: Array<Collaborator> = [];
    private selectedCollaborators: Array<Collaborator> = [];
    private filteredSelectedCollaborators: Array<Collaborator> = [];
    private selectedToAdd = [];
    private selectedToRemove = [];
    private allSearch: String = '';
    private selectedSearch: String = '';

    constructor(private service: CollaboratorService) {
        service.getAllCollaborators().then(collaborators => {
            this.collaborators = collaborators;
            this.filteredCollaborators = collaborators;
        });
    }

    allSearchChange(value) {
        this.selectedToAdd = [];
        this.filteredCollaborators = this.collaborators.filter(filterByString(value));
    }

    selectedSearchChange(value) {
        this.selectedToRemove = [];
        this.filteredSelectedCollaborators = this.selectedCollaborators.filter(filterByString(value));
    }

    removeSelected() {
        const toRemove = this.selectedToRemove.map(i => this.filteredSelectedCollaborators[i]);
        this.collaborators = this.collaborators.concat(toRemove);
        this.selectedCollaborators = this.selectedCollaborators.filter(({id}) => !toRemove.some(c => c.id === id));
        this.selectedToRemove = [];
        this.selectedSearchChange(this.selectedSearch);
        this.allSearchChange(this.allSearch);
    }

    addSelected() {
        const toAdd = this.selectedToAdd.map(i => this.filteredCollaborators[i]);
        this.selectedCollaborators = this.selectedCollaborators.concat(toAdd);
        this.collaborators = this.collaborators.filter(({id}) => !toAdd.some(c => c.id === id));
        this.selectedToAdd = [];
        this.allSearchChange(this.allSearch);
        this.selectedSearchChange(this.selectedSearch);
    }

    setSelectedToAdd(index) {
        if (this.selectedToAdd.includes(index)) {
            this.selectedToAdd = this.selectedToAdd.filter(i => i !== index);
        } else {
            this.selectedToAdd.push(index);
        }
    }

    setSelectedToRemove(index) {
        if (this.selectedToRemove.includes(index)) {
            this.selectedToRemove = this.selectedToRemove.filter(i => i !== index);
        } else {
            this.selectedToRemove.push(index);
        }
    }

    ngOnInit() {
    }

}
