import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IgxGridComponent, IgxGridCellComponent } from 'igniteui-angular';
import { RemoteService } from '../shared/remote.service';

@Component({
    selector: 'app-grid-row-draggable-sample',
    templateUrl: 'grid-row-draggable.sample.html',
    styleUrls: ['grid-row-draggable.sample.css']
})
export class GridRowDraggableComponent implements AfterViewInit {

    @ViewChild('grid1')
    grid1: IgxGridComponent;
    remote: Observable<any[]>;
    selection = true;
    dragdrop = true;

    constructor(private remoteService: RemoteService, private cdr: ChangeDetectorRef) {
        this.remoteService.urlBuilder = (state) => this.remoteService.url;
     }

    ngAfterViewInit() {
        this.remote = this.remoteService.remoteData;
        this.remoteService.getData(this.grid1.data);
        this.cdr.detectChanges();
    }

    handleRowDrag(args) {
        console.log('RowDrag started!');
    }

    handleRowDrop(args) {
        console.log('Row Drag End!');
    }

    toggle() {
        const currentSelection = this.grid1.selectedRows();
        if (currentSelection !== undefined) {
            const currentSelectionSet = new Set(currentSelection);
            if (currentSelectionSet.has(1) && currentSelectionSet.has(2) && currentSelectionSet.has(5)) {
                this.grid1.deselectRows([1, 2, 5]);
                return;
            }
        }
        this.grid1.selectRows([1, 2, 5], false);
    }
}