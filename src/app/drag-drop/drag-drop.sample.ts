import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-drag-drop-sample',
    templateUrl: './drag-drop.sample.html',
    styleUrls: ['drag-drop.sample.css']
})
export class DragDropSampleComponent {

    public draggingElem = false;
    public dragEnteredArea = false;
    public draggableElems = ['Suspect 1', 'Suspect 2', 'Suspect 3', 'Suspect 4'];

    constructor(private cdr: ChangeDetectorRef) {
    }

    public onDragStart() {
        this.draggingElem = true;
        this.cdr.detectChanges();
    }

    public onDragCageEnter() {
        this.dragEnteredArea = true;
    }

    public onDragCageLeave() {
        this.dragEnteredArea = false;
    }

    public onDragEnd() {
        this.draggingElem = false;
        this.cdr.detectChanges();
    }

    public elemDrop(event) {
        console.log('Drop x:' + event.offsetX + ' y:' + event.offsetY );
    }

    public elemEnter(event) {
        console.log('Enter x:' + event.offsetX + ' y:' + event.offsetY );
    }

    public elemLeave(event) {
        console.log('Leave x:' + event.offsetX + ' y:' + event.offsetY );
    }
}
