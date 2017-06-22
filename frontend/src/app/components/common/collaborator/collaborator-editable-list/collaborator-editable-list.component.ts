import { Component, OnInit } from '@angular/core';

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
  allSearch: String = '';

  constructor(private service: CollaboratorService) {
        service.getAllCollaborators().then(collaborators => {
            this.collaborators = collaborators;
            this.filteredCollaborators = collaborators;
        });
    }

  allSearchChange(value) {        
      this.filteredCollaborators = this.collaborators.filter(filterByString(value));
  }

  toggleSelect = function(event) {
      this.allCollaborators = event.target.firstChild.checked;      
      this.filteredCollaborators.forEach(element => {
          element.selected = !event.target.firstChild.checked;
      });
  }

  ngOnInit() {

  }

}

