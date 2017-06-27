import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CollaboratorService} from '../../../../services/colaborador/collaborator.service';
import {Collaborator} from '../../../../models/colLaborator.model';

const includesString = (toCheck, value) => toCheck.toLowerCase().includes(value.toLowerCase());

const filterByString = value =>
    ({name, cpf, occupation}) => [name, cpf, occupation].reduce(((prev, toCheck) => prev || includesString(toCheck, value)), false);

@Component({
  selector: 'collaborator-editable-list',
  styleUrls: ['collaborator-editable-list.component.scss'],
  templateUrl: 'collaborator-editable-list.component.html',
  providers: [CollaboratorService]
})

export class CollaboratorEditableList implements OnInit {

  collaborators: Array<Collaborator> = [];
  filteredCollaborators: Array<Collaborator> = [];
  selectedCollaborators: Array<Collaborator> = [];
  filteredSelectedCollaborators: Array<Collaborator> = [];
  
  @Input() data: any;

  @Output() updateCollaboratorList = new EventEmitter<Array<Collaborator>>();

  constructor(private service: CollaboratorService) {
        service.getAllCollaborators().then(collaborators => {
            this.collaborators = collaborators;
            this.filteredCollaborators = collaborators;
        });
    }

  allSearchChange(value) {        
      this.filteredCollaborators = this.collaborators.filter(filterByString(value));
  }

  toggleFilteredSelectedCollaborators(element) {
    if(!this.filteredSelectedCollaborators.includes(element)) {
        this.filteredSelectedCollaborators.push(element);
    }
  }

  toggleSelect = function(event) {      
      this.filteredCollaborators.forEach(element => {                    
          element.selected = !event.target.firstElementChild.checked;         
      });      
  }

  sendData():void { 
        this.filteredSelectedCollaborators  = [];
        this.filteredCollaborators
            .filter( element => element.selected)
            .forEach(element => {                
                this.toggleFilteredSelectedCollaborators(element);
            })        
        this.updateCollaboratorList.emit(this.filteredSelectedCollaborators);
    } 

  ngOnInit() {

  }

}

