
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    Renderer2,
    ViewChild
} from '@angular/core';

import {
    IgxListPanState,
    IListChild,
    IgxListBase
} from './list.common';

import { HammerGesturesManager } from '../core/touch';

/**
 * The Ignite UI List Item component is a container intended for row items in the Ignite UI for Angular List component.
 *
 * Example:
 * ```html
 * <igx-list>
 *   <igx-list-item isHeader="true">Contacts</igx-list-item>
 *   <igx-list-item *ngFor="let contact of contacts">
 *     <span class="name">{{ contact.name }}</span>
 *     <span class="phone">{{ contact.phone }}</span>
 *   </igx-list-item>
 * </igx-list>
 * ```
 */
@Component({
    providers: [HammerGesturesManager],
    selector: 'igx-list-item',
    templateUrl: 'list-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxListItemComponent implements IListChild {

    /**
     *@hidden
     */
    private _panState: IgxListPanState = IgxListPanState.NONE;

    /**
     *@hidden
     */
    private panOffset = 0;

    /**
     * @hidden
     */
    private _index: number = null;

    /**
     *@hidden
     */
    private lastPanDir = IgxListPanState.NONE;

    /**
     * Provides a reference to the template's base element shown when left panning a list item.
     * ```typescript
     * const leftPanTmpl = this.listItem.leftPanningTemplateElement;
     * ```
     */
    @ViewChild('leftPanningTmpl')
    public leftPanningTemplateElement;

    /**
     * Provides a reference to the template's base element shown when right panning a list item.
     * ```typescript
     * const rightPanTmpl = this.listItem.rightPanningTemplateElement;
     * ```
     */
    @ViewChild('rightPanningTmpl')
    public rightPanningTemplateElement;

    constructor(
        public list: IgxListBase,
        private elementRef: ElementRef,
        private _renderer: Renderer2) {
    }

    /**
     * Sets/gets whether the `list item` is a header.
     * ```html
     * <igx-list-item [isHeader] = "true">Header</igx-list-item>
     * ```
     * ```typescript
     * let isHeader =  this.listItem.isHeader;
     * ```
     * @memberof IgxListItemComponent
     */
    @Input()
    public isHeader: boolean;

    /**
     * Sets/gets whether the `list item` is hidden.
     * By default the `hidden` value is `false`.
     * ```html
     * <igx-list-item [hidden] = "true">Hidden Item</igx-list-item>
     * ```
     * ```typescript
     * let isHidden =  this.listItem.hidden;
     * ```
     * @memberof IgxListItemComponent
     */
    @Input()
    public hidden = false;

    /**
     * Gets the `role` attribute of the `list item`.
     * ```typescript
     * let itemRole =  this.listItem.role;
     * ```
     * @memberof IgxListItemComponent
     */
    @HostBinding('attr.role')
    public get role() {
        return this.isHeader ? 'separator' : 'listitem';
    }

    /**
     * Sets/gets the `aria-label` attribute of the `list item`.
     * ```typescript
     * this.listItem.ariaLabel = "Item1";
     * ```
     * ```typescript
     * let itemAriaLabel = this.listItem.ariaLabel;
     * ```
     * @memberof IgxListItemComponent
     */
    @HostBinding('attr.aria-label')
    public ariaLabel: string;

    /**
     * Gets the `touch-action` style of the `list item`.
     * ```typescript
     * let touchAction = this.listItem.touchAction;
     * ```
     */
    @HostBinding('style.touch-action')
    public touchAction = 'pan-y';

    /**
     * Indicates whether `list item` should have header style.
     * ```typescript
     * let headerStyle =  this.listItem.headerStyle;
     * ```
     * @memberof IgxListItemComponent
     */
    @HostBinding('class.igx-list__header')
    get headerStyle(): boolean {
        return this.isHeader;
    }

    /**
     * Applies the inner style of the `list item` if the item is not counted as header.
     * ```typescript
     * let innerStyle =  this.listItem.innerStyle;
     * ```
     * @memberof IgxListItemComponent
     */
    @HostBinding('class.igx-list__item-base')
    get innerStyle(): boolean {
        return !this.isHeader;
    }

    /**
     * Returns string value which describes the display mode of the `list item`.
     * ```typescript
     * let isHidden = this.listItem.display;
     * ```
     * @memberof IgxListItemComponent
     */
    @HostBinding('style.display')
    get display(): string {
        return this.hidden ? 'none' : '';
    }

    /**
     *@hidden
     */
    @HostListener('click', ['$event'])
    clicked(evt) {
        this.list.onItemClicked.emit({ item: this, event: evt, direction: this.lastPanDir });
        this.lastPanDir = IgxListPanState.NONE;
    }

    /**
     *@hidden
     */
    @HostListener('panstart', ['$event'])
    panStart(ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
    }

    /**
     *@hidden
     */
    @HostListener('panmove', ['$event'])
    panMove(ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }
        const isPanningToLeft = ev.deltaX < 0;
        if (isPanningToLeft && this.isTrue(this.list.allowLeftPanning)) {
            this.showLeftPanTemplate();
            this.setContentElementLeft(Math.max(this.maxLeft, ev.deltaX));
        } else if (!isPanningToLeft && this.isTrue(this.list.allowRightPanning)) {
            this.showRightPanTemplate();
            this.setContentElementLeft(Math.min(this.maxRight, ev.deltaX));
        }
    }

    /**
     *@hidden
     */
    @HostListener('panend', ['$event'])
    panEnd(ev) {
        if (this.isTrue(this.isHeader)) {
            return;
        }
        if (!this.isTrue(this.list.allowLeftPanning) && !this.isTrue(this.list.allowRightPanning)) {
            return;
        }

        // the translation offset of the current list item content
        const relativeOffset = this.panOffset;
        const widthTriggeringGrip = this.width * this.list.panEndTriggeringThreshold;

        if (relativeOffset === 0) {
            return; // no panning has occured
        }

        const dir = relativeOffset > 0 ? IgxListPanState.RIGHT : IgxListPanState.LEFT;
        this.lastPanDir = dir;

        const oldPanState = this._panState;
        if (Math.abs(relativeOffset) < widthTriggeringGrip) {
            this.setContentElementLeft(0);
            this._panState = IgxListPanState.NONE;
            this.hideLeftAndRightPanTemplates();
            return;
        }

        const args = { item: this, direction: dir, keepItem: false};

        if (dir === IgxListPanState.LEFT) {
            this.list.onLeftPan.emit(args);
        } else {
            this.list.onRightPan.emit(args);
        }

        if (args.keepItem === true) {
            this.setContentElementLeft(0);
            this._panState = IgxListPanState.NONE;
        } else {
            if (dir === IgxListPanState.LEFT) {
                this.setContentElementLeft(this.maxLeft);
                this._panState = IgxListPanState.LEFT;
            } else {
                this.setContentElementLeft(this.maxRight);
                this._panState = IgxListPanState.RIGHT;
            }
        }

        if (oldPanState !== this._panState) {
            const args2 = { oldState: oldPanState, newState: this._panState, item: this };
            this.list.onPanStateChange.emit(args2);
        }
        this.hideLeftAndRightPanTemplates();
    }

    /**
     *@hidden
     */
    private showLeftPanTemplate() {
        this.setLeftAndRightTemplatesVisibility('visible', 'hidden');
    }

    /**
     *@hidden
     */
    private showRightPanTemplate() {
        this.setLeftAndRightTemplatesVisibility('hidden', 'visible');
    }

    /**
     *@hidden
     */
    private hideLeftAndRightPanTemplates() {
        setTimeout(() => {
            this.setLeftAndRightTemplatesVisibility('hidden', 'hidden');
        }, 500);
    }

    /**
     *@hidden
     */
    private setLeftAndRightTemplatesVisibility(leftVisibility, rightVisibility) {
        if (this.leftPanningTemplateElement && this.leftPanningTemplateElement.nativeElement) {
            this.leftPanningTemplateElement.nativeElement.style.visibility = leftVisibility;
        }
        if (this.rightPanningTemplateElement && this.rightPanningTemplateElement.nativeElement) {
            this.rightPanningTemplateElement.nativeElement.style.visibility = rightVisibility;
        }
    }

    /**
     * Gets the `panState` of a `list item`.
     * ```typescript
     * let itemPanState =  this.listItem.panState;
     * ```
     * @memberof IgxListItemComponent
     */
    public get panState(): IgxListPanState {
        return this._panState;
    }

    /**
     * Gets the `index` of a `list item`.
     * ```typescript
     * let itemIndex =  this.listItem.index;
     * ```
     * @memberof IgxListItemComponent
     */
    @Input()
    public get index(): number {
        return this._index !== null ? this._index : this.list.children.toArray().indexOf(this);
    }

    /**
     * Sets the `index` of the `list item`.
     * ```typescript
     * this.listItem.index = index;
     * ```
     * @memberof IgxListItemComponent
     */
    public set index(value: number) {
        this._index = value;
    }

    /**
     * Returns an element reference to the list item.
     * ```typescript
     * let listItemElement =  this.listItem.element.
     * ```
     * @memberof IgxListItemComponent
     */
    public get element() {
        return this.elementRef.nativeElement;
    }

    /**
     * Returns a reference container which contains the list item's content.
     * ```typescript
     * let listItemContainer =  this.listItem.contentElement.
     * ```
     * @memberof IgxListItemComponent
     */
    public get contentElement() {
        const candidates = this.element.getElementsByClassName('igx-list__item-content');
        return (candidates && candidates.length > 0) ? candidates[0] : null;
    }

    /**
     * Returns the `context` object which represents the `template context` binding into the `list item container`
     * by providing the `$implicit` declaration which is the `IgxListItemComponent` itself.
     * ```typescript
     * let listItemComponent = this.listItem.context;
     * ```
     */
    public get context(): any {
        return {
            $implicit: this
        };
    }

    /**
     * Gets the width of a `list item`.
     * ```typescript
     * let itemWidth = this.listItem.width;
     * ```
     * @memberof IgxListItemComponent
     */
    public get width() {
        if (this.element) {
            return this.element.offsetWidth;
        }
    }

    /**
     * Gets the maximum left position of the `list item`.
     * ```typescript
     * let maxLeft = this.listItem.maxLeft;
     * ```
     * @memberof IgxListItemComponent
     */
    public get maxLeft() {
        return -this.width;
    }

    /**
     * Gets the maximum right position of the `list item`.
     * ```typescript
     * let maxRight = this.listItem.maxRight;
     * ```
     * @memberof IgxListItemComponent
     */
    public get maxRight() {
        return this.width;
    }

    /**
     *@hidden
     */
    private setContentElementLeft(value: number) {
        this.panOffset = value;
        this.contentElement.style.transform = 'translateX(' + value + 'px)';
    }

    /**
     *@hidden
     */
    private isTrue(value: boolean): boolean {
        if (typeof (value) === 'boolean') {
            return value;
        } else {
            return value === 'true';
        }
    }
}
