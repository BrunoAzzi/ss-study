import { Component, Input, Output, EventEmitter  } from '@angular/core';

import { AttachmentFile } from './../../../../models/attachmentFile.model';
import { Task } from './../../../../models/task.model';

@Component({
    selector: 'tasks-attachment-files',
    templateUrl: 'tasks-attachment-files.template.html',
    styleUrls: ['./tasks-attachment-files.component.scss']
})

export class TasksAttachmentFiles {

    @Input() task: Task
    @Output() save: EventEmitter<Task> = new EventEmitter();
    
    sendData() {
        this.save.emit(this.task);
    }

    attachmentFileAdded(_imageFile: File) {
        const fileReader = new FileReader();        
        fileReader.onload = ((theFile) => {
          return (e) => {
              const newFile = Object.assign(new AttachmentFile(), {
                  fileName: _imageFile.name,
                  type : _imageFile.type,
                  resource: fileReader.result,
                  resourceFile: _imageFile
              });
              console.log('NEW FILE', newFile);
              this.task.attachmentFiles.push(newFile);
              console.log(this.task.attachmentFiles);
          };
        })(_imageFile);
        fileReader.readAsDataURL(_imageFile);
    }

    attachmentFileEdited(attachmentFile: AttachmentFile, index: number, _imageFile: File) {
        const fileReader = new FileReader();
        attachmentFile.resource = _imageFile;

        fileReader.onload = ((theFile) => {
          return (e) => {
              const updatedFile = Object.assign(new AttachmentFile(), {
                  fileName: _imageFile.name,
                  type : _imageFile.type,
                  resource: fileReader.result,
                  resourceFile: _imageFile
              });
              const newArray = Object.assign([], this.task.attachmentFiles.slice(), { [index]: updatedFile});              
              console.log('UPDATED FILE', updatedFile);              
              this.task.attachmentFiles = newArray;              
          };
        })(_imageFile);
        fileReader.readAsDataURL(_imageFile);
   }

    removeFile(index: number) {
        this.task.attachmentFiles.splice(index, 1);
        console.log(this.task);
    }
}