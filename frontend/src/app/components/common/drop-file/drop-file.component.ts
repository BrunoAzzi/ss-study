import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile} from 'ng2-file-drop';

@Component({
    selector: 'drop-file',
    templateUrl: './drop-file.component.html',
    styleUrls: ['./drop-file.component.scss'],
})
export class DropFileComponent {

    label = '';

    @ViewChild('fileInput') input;

    @Input() supportedFileTypes: Array<string> = ['image/png', 'image/jpeg', 'image/gif'];
    @Input() hasNgContent: boolean;
    @Input() showPreview = true;
    @Input() ngContentType: string;
    @Input() image: any;

    @Output() fileChanged: EventEmitter<File> = new EventEmitter();

    dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
        this.processFile(acceptedFile.file);
    }

    dragFileRejected(rejectedFile: Ng2FileDropRejectedFile) {
        console.log(rejectedFile.rejectionReason);
    }

    showInput() {
        this.input.nativeElement.click();
    }

    onFileChange() {
        this.processFile(this.input.nativeElement.files[0]);
    }

    processFile(file) {
        const fileReader = new FileReader();
        fileReader.onload = ((theFile) => {
            return (e) => {
                if (this.showPreview) {
                    this.image = fileReader.result;
                }
                this.fileChanged.emit(file);
            };
        })(file);
        fileReader.readAsDataURL(file);
    }
}
