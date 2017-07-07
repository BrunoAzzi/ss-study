import { Component, Inject, OnInit } from '@angular/core';
import { MdSnackBar, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { AttachmentFile } from './../../../../models/attachmentFile.model';
import { Task } from './../../../../models/task.model';
import { User } from './../../../../models/user.model';
import { TasksService } from './../../../../services/tasks.service';

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

    bindFiles(_attachmentFiles: any) {        
        this.attachmentFiles = _attachmentFiles;
    }

    saveTask() {        
        if(this.task.title && this.task.description && this.task.deadline && this.task.responsible && this.task.author) {
            if(this.task.author instanceof User && this.task.responsible instanceof User ) {
                this.tasksService.saveTask(this.task).subscribe(
                        savedTask => {
                            console.log("SAVED TASK", savedTask);
                            console.log(this.attachmentFiles);
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
        console.log(this.attachmentFiles);
        if(attachmentFiles && attachmentFiles.length > 0) {
            attachmentFiles.forEach( file => {
                let formData = new FormData();                
                let type = '';
                type = file.type.includes("image") ? "image" : "";
                type = file.type.includes("video") ? "video" : "";
                formData.append('file', file.resource);
                console.log(file);

                this.tasksService.uploadFile(savedTask.id, formData, file.type)
                    .subscribe( response => {
                        console.log(response);
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