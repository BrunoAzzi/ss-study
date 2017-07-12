import { Component, Inject, OnInit } from '@angular/core';
import { MdSnackBar, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { AttachmentFile } from './../../../../models/attachmentFile.model';
import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model';
import { TasksService } from './../../../../services/task.service';

@Component({
    selector: 'tasks-dialog',
    templateUrl: 'tasks-dialog.template.html',
    styleUrls: ['./tasks-dialog.component.scss']
})

export class TasksDialogComponent implements OnInit {

    title: string
    task: Task
    users: Array<User>
    attachmentFiles: Array<AttachmentFile> = []

    constructor(
        public dialogRef: MdDialogRef<TasksDialogComponent>,
        public tasksService: TasksService,
        public snackBar: MdSnackBar,
        @Inject(MD_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {
        this.title = this.data.task.id ? this.data.task.description : "NOVA TAREFA";
        this.task = this.data.task.id ? this.data.task : new Task();
        this.users = this.data.users;

        if(!this.data.task.id && this.data.currentUser) {
            this.task = new Task();
            this.task.author = new User().initializeWithJSON(this.data.currentUser);
        }
    }

    save(_task) {
        this.task = _task;
    }

    bindFiles(_attachmentFiles) {                
        this.attachmentFiles = _attachmentFiles;
    }

    saveTask() {        
        if(this.task.title && this.task.description && this.task.deadline && this.task.responsible && this.task.author) {
            if(this.task.author instanceof User && this.task.responsible instanceof User ) {
                this.tasksService.saveTask(this.task).subscribe(
                        savedTask => {
                            console.log("SAVED TASK", savedTask);
                            console.log("ATTACHMENT FILES", this.attachmentFiles);
                            this.saveAttachmentFiles(savedTask, this.attachmentFiles);
                            this.snackBar.open('Sucesso ao salvar!', null, { duration: 3000 });                    
                        },
                        error => {
                            this.handleError(error);
                        }
                );
                this.dialogRef.close();
            } else {
                this.snackBar.open('Erro no servidor!', null, { duration: 3000 });
            }            
        } else  {
            this.snackBar.open('Deve preencher todos os campos obrigatórios', null, { duration: 3000 });
        }   
    }

    saveAttachmentFiles(savedTask: Task, attachmentFiles: Array<AttachmentFile>) {        
        if(attachmentFiles && attachmentFiles.length > 0) {
            attachmentFiles.forEach( file => {
                const formData = new FormData();                
                let type = "";
                type = file.type.indexOf("image") !== -1 ? "image" : "";
                type = file.type.indexOf("video") !== -1 ? "video" : "";
                formData.append('file', file.resourceFile);

                if(file.type.includes("image")) {
                    type = "image";
                } else if (file.type.includes("video")) {
                    type = "video";
                }

                this.tasksService.uploadFile(savedTask.id, formData, type)
                    .subscribe( response => {
                        console.log("UPLOAD FILE RESPONSE", response);
                });
            })
        }
    }

    handleError(error) {
        if (error.json() && error.json().errors && error.json().errors.length > 0) {
            this.snackBar.open(error.json().errors[0].message, null, { duration: 3000 });
            console.log(error.json().errors[0].message);
        } else {
            this.snackBar.open('Erro no servidor!', null, { duration: 3000 });
            console.log('Erro no servidor!');
        }
    }
   
}