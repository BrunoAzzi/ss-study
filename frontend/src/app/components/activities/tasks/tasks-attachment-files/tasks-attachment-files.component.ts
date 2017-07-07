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
    @Output() bindAttachments: EventEmitter<any> = new EventEmitter();

    attachmentFiles: Array<AttachmentFile> = []
    
    sendData() {
        this.bindAttachments.emit(this.attachmentFiles);        
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
              this.attachmentFiles.push(newFile);
              this.sendData();
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
              const newArray = Object.assign([], this.attachmentFiles.slice(), { [index]: updatedFile});              
              console.log('UPDATED FILE', updatedFile);
              console.log('NEW ARRAY', newArray);
              this.attachmentFiles = newArray;
              this.sendData();
          };
        })(_imageFile);
        fileReader.readAsDataURL(_imageFile);
   }

    removeFile(index: number) {
        this.attachmentFiles.splice(index, 1);        
    }
}