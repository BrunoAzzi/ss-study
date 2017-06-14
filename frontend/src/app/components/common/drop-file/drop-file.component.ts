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

    @Output()
    onChange = new EventEmitter();

    private imageShown: boolean;

    private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
        this.processFile(acceptedFile.file);
    }

    private dragFileRejected(rejectedFile: Ng2FileDropRejectedFile) {
        console.log(rejectedFile.rejectionReason);
    }

    private showInput() {
        this.input.nativeElement.click();
    }

    onFileChange(event) {
        this.processFile(this.input.nativeElement.files[0]);
    }

    private processFile(file) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            this.image = fileReader.result;
            this.imageShown = true;
            this.onChange.emit(this.image);
        };
        fileReader.readAsDataURL(file);
    }
}
