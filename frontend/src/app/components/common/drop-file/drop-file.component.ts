import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile} from 'ng2-file-drop';

@Component({
    selector: 'drop-file',
    templateUrl: './drop-file.component.html',
    styleUrls: ['./drop-file.component.scss'],
})
export class DropFileComponent {

    @ViewChild('fileInput')
    input;

    @Input()
    supportedFileTypes: string[] = ['image/png', 'image/jpeg', 'image/gif'];

    @Input()
    label: string;

    image: any;
     
    @Input() img: string;

    @Output()
    onChange = new EventEmitter();

    imageShown: boolean;

    dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
        this.processFile(acceptedFile.file);
    }
    
    dragFileRejected(rejectedFile: Ng2FileDropRejectedFile) {
        console.log(rejectedFile.rejectionReason);
    }

    showInput() {
        this.input.nativeElement.click();
    }

    onFileChange(event) {
        this.processFile(this.input.nativeElement.files[0]);
    }

    processFile(file) {
        const fileReader = new FileReader();
        fileReader.onload = ((theFile) => {
            return (e) => {
                this.image = fileReader.result;
                this.imageShown = true;
                this.onChange.emit(this.image);
            }
        })(file);
        fileReader.readAsDataURL(file);
    }
}
