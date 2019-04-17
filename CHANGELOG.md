# Ignite UI for Angular Change Log

All notable changes for each version of this project will be documented in this file.

## 7.3.0
- `IgxListComponent`
    - **Feature** The `IgxListComponent` now provides the ability to choose a display density from a predefined set of options: **compact**, **cosy** and **comfortable** (default one). It can be set by using the `displayDensity` input of the list.

## 7.2.5
- `igxDrop` 
    - `onEnter`, `onLeave` and `onDrop` events now have new arguments for `originalEvent`, `offsetX` and `offsetY` relative to the container the igxDrop is instanced.
- `IgxList`
    - **Feature** the `index` property is now an `@Input` and can be assigned by structural directives such as `*igxFor`.
    ```html
        <igx-list>
            <div [style.height]="'480px'" [style.overflow]="'hidden'" [style.position]="'relative'">
                <igx-list-item [index]="i" *igxFor="let item of data; index as i; scrollOrientation: 'vertical'; containerSize: '480px'; itemSize: '48px'">
                    <div>{{ item.key }}</div>
                    <div class="contact__info">
                        <span class="name">{{item.name}}</span>
                    </div>
                </igx-list-item>
            </div>
        </igx-list>
    ```
    - The `items` property now returns the collection of child items sorted by their index if one is assigned. This is useful when the `children` order cannot be guaranteed.
- Excel-Style Filtering and Quick Filtering user interfaces now display the date picker's calendar in a dropdown.
- `IgxCard` - The card component has been refactored. It now includes several new supporting components/directives:
    - `igxCardHeaderTitle` - tag your headings placed in the `igx-card-header` container to be displayed as a card title;
    - `igxCardHeaderSubtitle` - tag your headings placed in the `igx-card-header` container to be displayed as a card subtitle;
    - `igxCardThumbnail` - tag anything placed in the `igx-card-header` as a thumb to be placed to the left of your titles;
    - `igx-card-header` - the card header can now detect and automatically position `igx-avatar`s placed in it;
    - `igx-card-media` - wrap images or videos that will be automatically sized for you;
    - `igx-card-actions` - the card actions can now detect and automatically position all `igxButton`s placed in it;
    - The card has a new `type` property. It can be set to `outlined` to get the new outlined card look;
    - The card has a new `horizontal` property. When set to true, the layout will become horizontally aligned;
- New Directive `igx-divider` - The igx-divider is a thin, configurable line that groups content in lists and layouts.

## 7.2.4
### New feature
- [Multi-cell selection](https://github.com/IgniteUI/igniteui-angular/wiki/Grid-Multi-cell-selection-Specification) - Enables range selection of cells in the grid.

### Grids Performance improvements 
- Grid rendering speed
- Grid grouping rendering speed 
- Grid vertical scrolling using the scroll arrows
- Grid horizontal scrolling using the scroll arrows
- Grid cell focusing time
- Typing a character in an inline editor

### Bug fixes
- IgxForOf - Virtual item index with remote data #4455
- If grid has height in %(or no height) and filtering is enabled, then height is not calculated correctly. #4458
- 3rd level child does not scroll with keyboard nav #4447
- When in column group a column is hidden in the excel style filter LEFT and RIGHT buttons are enabled #4412
- Column Moving keydown.escape HostListener needs refactoring #4296
- Hierarchical Grid: scrolled child views remain after the root grid has been destroyed #4440
- When child grids have width in % (or no width) and there is horizontal scrollbar the vertical scrollbar is not visible. #4449
- Opening the Filtering dropdown twice in an igxHierarchicalGrid results in warning messages in the browser console #4436
- for-of init optimizations for grids #4374
- Changing columns dynamically in the Hierarchical Grid resets root column list to contain child columns. #4337
- Cell is not selected on click [IE] #1780
- igx-grid: Uncommitted IME text gets lost when Enter key is pressed in an edit cell template. #4314

## 7.2.3
### Improvements
- `IPinColumnEventArgs` new property - added a new property `isPinned` to the `IPinColumnEventArgs` interface. Now the `onColumnPinning` event emits information whether the column is pinned or unpinned.
- `igxGrid`
    - `igxFilterCellTemplate` directive added that allows retemplating of the filter cell.
    - `IgxColumnComponent` now has `filterCellTemplate` property that can be used to retemplate the filter cell.

### Bug fixes
- Fix auto-generate columns for TreeGrid #4399
- Emiting event when unpinning column #3833
- In Firefox when collapse all groups grid becomes empty #4304
- When transactions are enabled and update a filtered cell there is an error in console #4214
- In IE11 datePicker delete button is not in correct position when open a cell in edit mode #4116
- Refactoring filter cell navigation so that it is handled in the navigation service. Handling special scenarios for hierarchical grid in the hierarchical navigation service. #4267
- Grid: fix sorting in chrome #4397
- An error is returned when add a child for not committed row and summaries are enabled #4317
- Update child summaries correctly when CRUD operations are performed #4408
- Add igxQuickFilterTemplate directive #4377
- Resizing: move resize handle logic in a directive #4378
- No event emitted when column is unpinned #3799 
- When update a cell in the grouped column the child summaries are not updated #4324
- Column Group border is misaligned with its children's in some cases #4387
- Expanding last row of HierarchicalGrid via keyboard(Alt + downArrow) leads to cell losing its focus. #4080
- fix(HierarchicalGrid): Moving onGridCreated to be emitted onInit #4370
- Virtualization of grid not working in tab #4329
- When you pin child column the whole group is not pinned #4278

## 7.2.2
### Features
- **Components' Display Type** - All components now have their CSS display property explicitly set on the host element to ensure width, padding, and margins are applied when set directly on the host selectors.
- **Themes** 
    - Add support for gradients and images as values for component themes via the component theme functions.
    - `Palettes` - added surface color to the palette. The surface color is used by cards, pickers, dialog windows, etc. as the default background.

### Bug fixes
- fix(tabs): Fix for applying styles to tabs group #4371
- igxInput - add ability to toggle required dynamically #4361
- Select sort button only if default template is used #4372
- Public enumerations should not be constants #4364
- fix(hierarchicalGrid): Fix scrollbar not updated when data for children is loaded after initial load. #4334
- fix(date-picker): Fix for re-templating dropdown date-picker #4325
- Remove ngModel from datepicker #4333
- Scrollbar is not updated when load remote data #4209
- IgxGrid cell edit does not update values (onCellEdit) #4055
- Initial GroupBy performance is poor with many columns grouped #4309
- Components' display type #4316
- Including summary row cells in tab sequence for HierarchicalGrid navigation. #4293
- Surface color #4109
- `headerGroupClasses` is marked as hidden #4276
- Update AutoScrollStrategy to reposition elements outside NgZone #4250
- Optimizing post group pipe for 4309 - 7.2.x #4310
- IgxSelect does not close on Shift+Tab #4164
- clone method should have inheritdoc in all position strategies #4265
- Dialog does not emits close event the second time that is opened and closed #4222
- IgxLabelComponent is hidden #4237
- refactor(button-group): Fix the double borders between the buttons #4092
- Allow gradient/image values as backgrounds in component themes #4218
- Time Picker enhancements #4348

## 7.2.1
- `igxGrid`
    - **Breaking Change** The `groupsRecords` property now only returns the visible tree and does not include groups that are children of collapsed parents.
    - **Feature** Column Hiding and Column Pinning components now expose a `disableFilter` property which allows hiding the filter columns input from the UI.

### Improvements
- igxSelect - select-positioning-strategy code cleanup #4019

### Bug fixes
- Tooltip remains opened after clicking its target #4127
- Can not move a column to left if the previous column is column group #4114
- TextHighlight Directive makes the matching spans bold #4129
- IgxDropDownItem still uses deprecated accessors #4167
- Double click in editMode reverts the cell's value #3985
- Navigation with Ctrl+arrow keys does not work in child grids #4120
- In IE11 and Edge when scroll page the excel filter dialog is not moved #4112
- IgxCalendar overlay, rendered from cell in edit mode, goes outside the grid when scrolling #4205
- When using keyboard navigation the child grid does not scroll to next row when next child is empty. #4153
- selectedIndex doesn't switch tab. #4245
- When the last column is hidden button RIGHT for the last visible column should be disabled #4230
- When excel-style-filtering is enabled and press Shift+tab on first cell the scroll should not be moved #4219
- Can not navigate with tab in filtering row if grid has no horizontal scroll #4111
- ExcelFilterStyle , what is the name of the onClick methods for the apply and cancel button ? onFilteringDone doesnt work here #4248
- When you focus an element from the Excel-Style Filtering List in Chrome a blue boarder appears #4269
- Need ability to remove a column filter that was previously set in the grid #4305
- Keyboard navigation inside summaries for hierarchical grid is not working with Ctrl + arrow keys #4176
- ReadMe links are broken on 7.2.0. release note #4251
- Error when scrolling grid with mouse wheel after closing a dialog window in the page #4232
- Circular progress bar throws error on IE11 #3787
- Issue with export excel/csv from grid #3763
- Setting grid data property manually after initial rendering without binding it to the input is not detected. #4242
- When child grids does not have set height and expand a row in child grid scrollbars are not updated and there is empty space on the grid #4239
- [ng add]: Enabling polyfills step doesn't update properly polyfill.ts generated by Angular CLI v7.3.x. #3967
- When change sorting from the excel filter it is not applied for the grouped column #4119
- When grid is filtered and update a cell summaries are not updated #4211
- [igx-date-picker] igxCalendarHeader and igxCalendarSubheader don't work #4223
- [igx-date-picker] unnecessary suffix "日" to the date part of the calendar. #4224
- igxMonthPicker - arrowdown and arrow up not working correctly inside months view #4190
- In Edge resizing indicators are offset incorrectly #3908
- igx-column-group does not fire onColumnVisibilityChanged #4194

## 7.2.0
- `igxCalendar`
    - `igxCalendar` has been refactored to provide the ability to instantiate each view as a separate component.
    - **Feature** advanced keyboard navigation support has been added. Read up more information in the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/calendar/README.md)

- **New component** `IgxMonthPicker`:
    - Provides the ability to pick a specific month. Read up more information in the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/calendar/month-picker/README.md)

- **New component** `IgxHierarchicalGrid`:
    - Provides the ability to represent and manipulate hierarchical data in which each level has a different schema. Each level is represented by a component derived from **igx-grid** and supports most of its functionality. Read up more information about the IgxHierarchicalGrid in the official [documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid.html) or the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/grids/hierarchical-grid/README.md)

- **New component** The `igxSelect` provides an input with dropdown list allowing selection of a single item.
    ```html
    <igx-select #select1 [placeholder]="'Pick One'">
        <label igxLabel>Sample Label</label>
        <igx-select-item *ngFor="let item of items" [value]="item.field">
            {{ item.field }}
        </igx-select-item>
    </igx-select>
    ```

[documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/select.html) or the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/select/README.md)

- **New directive** `igxAutocomplete` - new directive that provides a way to enhance a text input by showing a panel of suggested options, provided by the developer. More information about the IgxAutocomplete is available in the official [documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/autocomplete.html) or the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/directives/autocomplete/README.md).

    ```html
    <input igxInput type="text" [igxAutocomplete]="townsPanel" />
    <igx-drop-down #townsPanel>
        <igx-drop-down-item *ngFor="let town of towns" [value]="town">
            {{town}}
        </igx-drop-down-item>
    </igx-drop-down>
    ```

- `igxGrid` now has `isLoading` input property. When enabled will show loading indicator, until the data is available. It can be best utilized for remote scenarios. Another input property `loadingGridTemplate` allows customizing the loading indicator.

    ```html
    <!-- Example -->
    <igx-grid [isLoading]="true" ...>
    </igx-grid>
    ```

    - `Group By`
        - The collapse/expand icons have new orientantion to display the action that will be performed when clicked. When an icon points up clicking on it would result in collapsing the related group row and when it points down clicking on it would expand the group row.
        - The collapse/expand all icons have also been updated to reflect the new group row icons better.
        - Group rows now can be expanded/collapsed using Alt + Arrow Up/Down to reflect the new icons.
    - `filterMode` input added, which determines the filtering ui of the grid. The default value is `quickFilter`. Other possible value is `excelStyle`, which mimics the filtering in Excel with added functionality for column moving, sorting, hiding and pinning.
    - `IgxColumnComponent` now has `disablePinning` property, which determines wether the column can be pinned from
    the toolbar and whether the column pin will be available in the excel style filter menu. The `disableHiding` input will be used to show/hide the column hiding functionality in the menu.
- `igxTreeGrid`
    - The collapse/expand icons have new orientantion to display the action that will be performed when clicked. When an icon points up clicking on it would result in collapsing the related tree grid level and when it points down clicking on it would expand the tree grid level.
    - Expanding/collapsing tree levels can now be performed also by using Alt + Arrow Up/Down to reflect the new icons.
- `IgxColumnComponent`
    - **Breaking Change** the `gridID` property is now **deprecated**. Please, use `column.grid.id` instead.
- `igxCombo`
    - **Breaking Change** `combo.value` is now only a getter.
    - **Feature** added support for templating the default input group of the component. The `igx-combo` now allows for `igx-prefix`, `igx-suffix`,`igx-hint` and `[igxLabel]` components to be passed as `ng-content` and they will be renderer accordingly on the combo's input. Example:
    ```html
        <!-- customize combo input --->
        <igx-combo #myCombo [data]="myGenres">
            ...
            <label igxLabel>Genres</label>
            <igx-prefix><igx-icon>music_note</igx-icon></igx-prefix>
        </igx-combo>
     ```
    - **Feature** the default combo 'clear' and 'toggle' icons can now be templated. Two new directives are added (with selector `[igxComboClearIcon]` and `[igxComboToggleIcon]`). Passing an `ng-template` with one of the directives will overwrite the default conent of the respective icon. Functionality will remain unaffected. Expample:
    ```html
        <!-- customize combo input --->
        <igx-combo #myCombo [data]="myGenres">
            ...
            <ng-template igxComboToggleIcon let-collapsed>
                <igx-icon>{{ collapsed ? 'remove_circle' : 'remove_circle_outline'}}</igx-icon>
            </ng-template>
        </igx-combo>
    ```
- `igxDropDown`
    - `IgxDropDownItemBase` and it's descendants (of which `IgxDropDownItem`) have had their `isSelected` and `isFocused` properties **deprecated**. Instead, use `selected` and `focused` properties.
    - Added an `@Input` for the `index` property (such as the one coming from ngFor) of the `IgxDropDownItem` component. This **deprecates** the automatic index calculation.
    ```html
        <igx-drop-down>
            <igx-drop-down-item *ngFor="let item of items; let i = index" [index]="i">
                {{ item.field }}
            </igx-drop-down-item>
        </igx-drop-down>
    ```
    - **Feature** `IgxDropDownGroupComponent` has been added. It allows for easier grouping of multi-level data, without the need of flattening it. The `igx-drop-down-item-group` tag accepts `igx-drop-down-item`s and displays them in the appropriate grouped fashion.
        ```html
            <igx-drop-down>
                <igx-drop-down-item-group *ngFor="let country of contries" [label]="country.name">
                    <igx-drop-down-item *ngFor="let city of country.cities" [value]='city.refNo'>
                        {{ city.name }}
                    </igx-drop-down-item>
                </igx-drop-down-item-group>
            </igx-drop-down>
        ```
- `Theme Elevations & Shadows` - Components with shadows, set by an elevation level or otherwise, are now fully configurable by the user via schema and/or theme properties. User can also provide a custom elevations set to component themes that support them.
    - **Breaking Change** - The `$search-shadow-color` and `$search-disabled-shadow-color` properties on the `igx-input-group-theme` have been replaced with `$search-resting-shadow` and `$search-disabled-shadow` respectively. Use `ng update` to migrate automatically.
- `IgxTreeGridComponent`
    - We can now search in the treegrid's data by using the `findNext` and the `findPrev` methods and we can clear the search results with the `clearSearch` method.
- `IgxTextHighlightDirective`
    - `IgxTextHighlightDirective.page` input property is **deprecated**. `rowIndex`, `columnIndex` and `page` properties of the `IActiveHighlightInfo` interface are also **deprecated**. Instead, `row` and `column` optional properties are added.
- `igxDragDrop`
    - `dragGhostHost` input property added. Sets the element to which the dragged element will be appended. If not provided, the dragged element is appended to the body.
- `Column Hiding UI`
    - **Behavioral Change** - The UI now hides the columns whose `disableHiding` property is set to true instead of simply disabling them.
- `igxButton` - **New Button Style** - Include [outlined](https://material.io/design/components/buttons.html#outlined-button) button style to support the latest material spec.
- `igxOverlay`:
    - `igxOverlay.attach()` method added. Use this method to obtain an unique Id of the created overlay where the provided component will be shown. Then call `igxOverlay.show(id, settings?)` method to show the component in overlay. The new `attach` method has two overloads:
      - `attach(element: ElementRef, settings?: OverlaySettings): string` - This overload will create overlay where provided `element` will be shown.
      - `attach(component: Type<any>, settings?: OverlaySettings, moduleRef?: NgModuleRef<any>): string` - Creates a `ComponentRef` from the provided `component` class to show in an overlay. If `moduleRef` is provided the service will use the module's `ComponentFactoryResolver` and `Injector` when creating the `ComponentRef` instead of the root ones.
    - `igxOverlay.show(component, settings)` is **deprecated**. Use `igxOverlay.attach()` method to obtain an Id, and then call `igxOverlay.show(id, settings)` method to show a component in the overlay.
    - `IPositionStrategy` exposes new method `clone` that clones the strategy instance with its settings.

- `igx-date-picker`
    - **Feature** Added `dropdown` `mode` to enable the input field value editing and spinning of the date parts as well as displaying a drop down calendar to select a date. Example:
    ```html
      <igx-date-picker #editableDatePicker1 mode="dropdown" [value]="date" format="dd.MM.y" mask="M/d/y">
      </igx-date-picker>
     ```
 **Components roundness**
- Ignite UI for Angular now allows you to change the shape of components by changing their border-radius.

- Here is the list of all components that have roundness functionality:
* _igx-badge_
* _igx-buttongroup_
* _igx-calendar_
* _igx-card_
* _igx-carousel_
* _igx-chip_
* _igx-dialog_
* _igx-drop-down_
* _igx-expansion-panel_
* _igx-input-group_
* _igx-list_
  * _igx-list-item_
* *igx-navdrawe*r
* _igx-snackbar_
* _igx-toast_
* _igxTooltip_

- **Breaking Change**
- The `$button-roundness` property on the `igx-button-theme` have been replaced for each button type with: `$flat-border-radius`,`$raised-border-radius`,`$outline-border-radius`,`$fab-border-radius`, `$icon-border-radius`.
- The`$roundness` property on the `igx-chip-theme` have been replaced with `$border-radius`.
- The`$roundness` property on the `iigx-tooltip-theme` have been replaced with `$border-radius`.

### Bug Fixes
- All initially pinned columns get unpinned if the grid's width is set as a percentage of its parent #3774
- Expanding a group row while at the bottom of the grid throws error #4179
- Grouping expand/collapse all button is not aligned with the row selector checkbox. #4178
- IgxToggleAction logs deprecated message in the console #4126
- IgxCombo - Calling selectItems([]) incorrectly clears the combo selection #4106
- IgxCombo - Clearing item filter sometimes empties drop down list #4000
- IgxCombo - Keyboard navigation ArrowDown stutters on chunk load #3999
- Row editing overlay banner not shown when enter row editing #4117
- IgxToggle open method always tries to get id even when it has one #3971
- Last (right-aligned) column is cut off when no widths are set for the columns #3396 
- The selection in the last grid column does not span in the whole cell. #1115
- Last column header is a bit wider than the cells #1230

## 7.1.11
### Improvements
- Row and Cell editing Docs improvements #4055 

## 7.1.10
### Features
- Column Hiding and Column Pinning components now expose a `disableFilter` property which allows hiding the filter columns input from the UI.

### Bug Fixes
- Tooltip remains opened after clicking its target #4127
- TextHighlight Directive makes the matching spans bold #4129
- igx-grid: `pinned` property doesn't work when `width` property is set together. #4125
- Double click in editMode reverts the cell's value #3985
- Issue with export excel/csv from grid #3763
- Error when scrolling grid with mouse wheel after closing a dialog window in the page #4232
- Circular progress bar throws error on IE11 #3787
- Setting grid data property manually after initial rendering without binding it to the input is not detected. #4242
- `headerGroupClasses` is marked as hidden #4276
- When you pin child column the whole group is not pinned #4278
- igx-column-group does not fire onColumnVisibilityChanged #4194
- When grid is filtered and update a cell summaries are not updated #4211

## 7.1.9
### Bug Fixes
- igx-grid: Incorrect height calculation when setting height in percent and binding empty data. #3950
- Grid doesn't reflect the applied formatter immediately #3819
- Cannot set chip as selected through API if selectable is false #2383
- IgxCombo - Keyboard navigation in combo with remote data is incorrect #4049
- Setting groupingExpressions run-time has different result than using the UI/methods #3952
- Error on app-shell build in the icon module #4065
- Grid/TreeGrid toolbar dropdowns reopen when trying to close it every other time #4045
- When grid and columns have width in IE the columns are visible outside the grid #3716
- IgxGridToolbarComponent is hidden from the API docs #3974
- igx-grid: row virtualization doesn't work when setting height in percent if you fetch and bind data after initial rendering. #3949
- IgxToggleAction logs deprecated message in the console #4126

## 7.1.8
### Bug Fixes
- Required date picker bound to displayData is shown invalid initially. #3641
- If the columns don't fit the treeGrid viewport, horizontal scrollbar in TreeGrid is gone/disappears #3808
- igxGrid setting autogenerate and groupingExpressions inputs results in errors #3951

## 7.1.7
### Bug fixes
- refactor(card): apply the content color to any text element #3878
- style(linear-bar): Fix text alignment #3862

## 7.1.6
### Bug Fixes
- Calling open() on an already opened IgxDropDown replays the opening animation #3810

## 7.1.5
### Features
- `igxGrid`
    - `Group By`
        - The collapse/expand icons have new orientantion to display the action that will be performed when clicked. When an icon points up clicking on it would result in collapsing the related group row and when it points down clicking on it would expand the group row.
        - The collapse/expand all icons have also been updated to reflect the new group row icons better.
        - Group rows now can be expanded/collapsed using Alt + Arrow Up/Down to reflect the new icons.
- `igxTreeGrid`
    - The collapse/expand icons have new orientantion to display the action that will be performed when clicked. When an icon points up clicking on it would result in collapsing the related tree grid level and when it points down clicking on it would expand the tree grid level.
    - Expanding/collapsing tree levels can now be performed also by using Alt + Arrow Up/Down to reflect the new icons.
- `Remove CSS Normalization` - Some users were complaining we reset too many browser styles - lists and heading styles in particular. We no longer do CSS normalization on an application level. Users who depended on our CSS browser normalization will have to handle that on their own going forward.
- `igxOverlayService` - the height of the shown element/component is not cached anymore. The height will be calculated each time position method of position strategy is called.

- `igxOverlayService`
    - `onClosing` event arguments are of type `OverlayClosingEventArgs` that adds an optional `event` property with the original DOM event. The browser event is available when closing of the overlay is caused by an outside click. This also affects all components and directives that use `igxOverlay` service - `igxToggle`, `igxDropDown`, `igxCombo`, `igxSelect` and `igxAutocomplete`. When they emit their respective `onClosing` event, the arguments are of type `CancelableBrowserEventArgs`, including the optional browser event.

## 7.1.4
### Features
- `Column Hiding UI`
    - **Behavioral Change** - The UI now hides the columns whose `disableHiding` property is set to true instead of simply disabling them.

## 7.1.3
### Bug Fixes
- When search and hide and then show a column the cell values are not correct ([3631](https://github.com/IgniteUI/igniteui-angular/issues/3631))
- When press Ctrl+Arrow down key on a summary cell it should stay active ([3651](https://github.com/IgniteUI/igniteui-angular/issues/3651))
- When summary row is not fully visible and press Tab the last summary cell is not activated ([3652](https://github.com/IgniteUI/igniteui-angular/issues/3652))
- Choosing from a drop down inside a form in a drop down closes the outer drop down ([3673](https://github.com/IgniteUI/igniteui-angular/issues/3673))
- Banner - Calling close method on collapsed panel throws error ([3669](https://github.com/IgniteUI/igniteui-angular/issues/3669))
- Typedoc API task generates non-public exports ([2858](https://github.com/IgniteUI/igniteui-angular/issues/2858))
- column.pin and column.unpin API descriptions need improvement ([3660](https://github.com/IgniteUI/igniteui-angular/issues/3660))
- disabledDates for the calendar and date picker should be an @Input() ([3625](https://github.com/IgniteUI/igniteui-angular/issues/3625))
- There is no way to determinate if a list item was panned in the click event ([3629](https://github.com/IgniteUI/igniteui-angular/issues/3629))
- When search and hide and then show a column the cell values are not correct ([3631](https://github.com/IgniteUI/igniteui-angular/issues/3631))

## 7.1.2
### Features
- `igx-circular-bar` and `igx-linear-bar` now feature an indeterminate input property. When this property is set to true the indicator will be continually growing and shrinking along the track.
- `IgxTimePickerComponent`: in addition to the current dialog interaction mode, now the user can select or edit a time value, using an editable masked input with a dropdown.
- `IgxColumnComponent` now accepts its templates as input properties through the markup. This can reduce the amount of code one needs to write when applying a single template to multiple columns declaratively. The new exposed inputs are:
    + `cellTemplate` - the template for the column cells
    + `headerTemplate` - the template for the column header
    + `cellEditorTemplate` - the template for the column cells when a cell is in edit mode
      ```html
        <!-- Example -->

        <igx-grid ...>
            <igx-column *ngFor="let each of defs" [cellTemplate]="newTemplate" ...></igx-column>
        </igx-grid>

        <ng-template #newTemplate let-value>
            {{ value }}
        </ng-template>
        ```

### Bug Fixes

- When transactions are enabled and delete a row page is changed to first page ([3425](https://github.com/IgniteUI/igniteui-angular/issues/3425))
- Row selectors header is not updated when commit transactions ([3424](https://github.com/IgniteUI/igniteui-angular/issues/3424))
- When a column is sorted and change value in a cell after commit and press enter on selected cell the focus is not in the input ([2801](https://github.com/IgniteUI/igniteui-angular/issues/2801))
- Closing the filter UI cuts the grid on the left ([3451](https://github.com/IgniteUI/igniteui-angular/issues/3451))
- GroupedRecords class should be hidden for doc generation. ([3483](https://github.com/IgniteUI/igniteui-angular/issues/3483))
- Badly formatted table in the JP documentation ([3484](https://github.com/IgniteUI/igniteui-angular/issues/3484))
- Not setting width in percentage on one or more columns results in columns going out of view ([1245](https://github.com/IgniteUI/igniteui-angular/issues/1245))
- Feature Request : locale property on a grid level ([3455](https://github.com/IgniteUI/igniteui-angular/issues/3455))
- Excel cannot open the exported data ([3332](https://github.com/IgniteUI/igniteui-angular/issues/3332))
- API DOC header links on header nav in JP leads to EN product page ([3516](https://github.com/IgniteUI/igniteui-angular/issues/3516))
- IgxGridHeaderGroupComponent should have preset min width ([3071](https://github.com/IgniteUI/igniteui-angular/issues/3071))
- Adding a custom svg to snackbar ([3328](https://github.com/IgniteUI/igniteui-angular/issues/3328))
- Feature request: Using text field input for date and time picker ([2337](https://github.com/IgniteUI/igniteui-angular/issues/2337))
- Summaries Keyboard navigation issues ([3407](https://github.com/IgniteUI/igniteui-angular/issues/3407))
- IgxRipple - animate() function not supported in Safari ([3506](https://github.com/IgniteUI/igniteui-angular/issues/3506))
- Faulty link in Typedoc ([3531](https://github.com/IgniteUI/igniteui-angular/issues/3531))
- [IE11] igx-grid - Filtering is cleared when clicking filtering chip if resourceString.igx_grid_filter_row_placeholder is set to Japanese character. ([3504](https://github.com/IgniteUI/igniteui-angular/issues/3504))
- Setting required IgxInput's value not via typing does not clear the invalid style. ([3550](https://github.com/IgniteUI/igniteui-angular/issues/3550))
- Add bodyTemplate as @Input() for igx-column ([3562](https://github.com/IgniteUI/igniteui-angular/issues/3562))
- Horizontal scrollbar is not shown when column's width is set to a percentage value. ([3513](https://github.com/IgniteUI/igniteui-angular/issues/3513))
- When select a date filter the date is not previewed in the input ([3362](https://github.com/IgniteUI/igniteui-angular/issues/3362))
- Missing locale errors on a browser with non-en language ([3569](https://github.com/IgniteUI/igniteui-angular/issues/3569))
- igx-action-icon is not vertically aligned in IgxNavbar ([3584](https://github.com/IgniteUI/igniteui-angular/issues/3584))
- [IE11] igx-grid filtering condition is reverted when typing Japanese character in the filtering textbox. ([3577](https://github.com/IgniteUI/igniteui-angular/issues/3577))
- TreeGrid has empty space when Summaries are enabled and expand/collapse ([3409](https://github.com/IgniteUI/igniteui-angular/issues/3409))
- Filtering row: no chip is created while typing Japanese characters on Edge ([3599](https://github.com/IgniteUI/igniteui-angular/issues/3599))
- PowerShell script should be added in order to apply some rules for deployment of the API DOCS (sassdoc, typedoc) ([3618](https://github.com/IgniteUI/igniteui-angular/issues/3618))
- igx-grid isn't displayed properly in IE11 when it is inside an igx-tabs-group. ([3047](https://github.com/IgniteUI/igniteui-angular/issues/3047))
- Cells' content is shown twice when entering edit mode after searching. ([3637](https://github.com/IgniteUI/igniteui-angular/issues/3637))
- ng add improvements ([3528](https://github.com/IgniteUI/igniteui-angular/issues/3528))

## 7.1.1
### Bug Fixes
* onSortingDone is not fired when sorting indicator of a header in the group by area is clicked ([#3257](https://github.com/IgniteUI/igniteui-angular/issues/3257))
* igx-grid isn't displayed properly in IE11 when it is inside an igx-tabs-group ([#3047](https://github.com/IgniteUI/igniteui-angular/issues/3047))
* Preventing wrap-around for scrollNext and scrollPrev([#3365](https://github.com/IgniteUI/igniteui-angular/issues/3365))
* IgxTreeGrid does not respect its parent container height ([#3467](https://github.com/IgniteUI/igniteui-angular/issues/3467))
* Include grid's unpinnedWidth and totalWidth in cell width calculation ([#3465](https://github.com/IgniteUI/igniteui-angular/issues/3465))

### Other
* update typedoc-plugin-localization version to 1.4.1 ([#3440](https://github.com/IgniteUI/igniteui-angular/issues/3440))

## 7.1.0
### Features
- **New component** `IgxBannerComponent`:
    - Allows the developer to easily display a highly templateable message that requires minimal user interaction (1-2 actions) to be dismissed. Read up more information about the IgxBannerComponent in the official [documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner.html) or the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/banner/README.md)
- `igxGrid`
    - Added a new `igxToolbarCustomContent` directive which can be used to mark an `ng-template` which provides a custom content for the IgxGrid's toolbar ([#2983](https://github.com/IgniteUI/igniteui-angular/issues/2983))
    - Summary results are now calculated and displayed by default for each row group when 'Group By' feature is enabled.
    - `clearSummaryCache()` and `recalculateSummaries()` methods are deprecated. The grid will clear the cache and recalculate the summaries automatically when needed.
	- `locale` property added. Default value is `en`. All child components will use it as locale.
    - **Breaking change** `IgxSummaryOperand.operate()` method is called with empty data in order to calculate the necessary height for the summary row. For custom summary operands, the method should always return an array of `IgxSummaryResult` with proper length.
- `IgxIconModule`:
    - **Breaking change** `igxIconService` is now provided in root (providedIn: 'root') and `IgxIconModule.forRoot()` method is deprecated.
    - **Breaking change** `glyphName` property of the `igxIconComponent` is deprecated.
- `IgxColumnComponent`:
    - **Breaking change** the `filters` input now expects `IgxFilteringOperand` instance, instead of class ref. This way custom `IgxFilteringOperands` no longer need to be singleton, with defined `instance` method.
- `IgxMask`:
    - `placeholder` input property is added to allow developers to specify the placeholder attribute of the host input element that the `igxMask` is applied on;
    - `displayValuePipe` input property is provided that allows developers to additionally transform the value on blur;
    - `focusedValuePipe` input property is provided that allows developers to additionally transform the value on focus;
- `IgxTreeGrid`:
    - Batch editing - an injectable transaction provider accumulates pending changes, which are not directly applied to the grid's data source. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.
    - You can now export the tree grid both to CSV and Excel.
    - The hierarchy and the records' expanded states would be reflected in the exported Excel worksheet.
    - Summaries feature is now supported in the tree grid. Summary results are calculated and displayed for the root level and each child level by default.
- `IgxOverlayService`:
    - `ElasticPositioningStrategy` added. This strategy positions the element as in **Connected** positioning strategy and resize the element to fit in the view port in case the element is partially getting out of view.


## 7.0.5
### Bug Fixes

* igx-grid isn't displayed properly in IE11 when it is inside an igx-tabs-group. ([#3047](https://github.com/IgniteUI/igniteui-angular/issues/3047))
* igx-slider max-value defaults to min-value ([#3418](https://github.com/IgniteUI/igniteui-angular/issues/3418))
* Inconsistency in scrollNext and scrollPrev ([#3365](https://github.com/IgniteUI/igniteui-angular/issues/3365))
* The header link in the api docs page should be to the product page ([#3423](https://github.com/IgniteUI/igniteui-angular/issues/3423))
* Error thrown when edit primaryKey cell in Tree Grid ([#3329](https://github.com/IgniteUI/igniteui-angular/issues/3329))
* IgxGridHeaderGroupComponent should have preset min width ([#3071](https://github.com/IgniteUI/igniteui-angular/issues/3071))
* Pressing ESC on a cell in an editable column throws an error ([#3429](https://github.com/IgniteUI/igniteui-angular/issues/3429))
* Cell foreground is white on hover with the default theme ([#3384](https://github.com/IgniteUI/igniteui-angular/issues/3384))
* [IE] Grid toolbar's buttons and title are misaligned ([#3371](https://github.com/IgniteUI/igniteui-angular/issues/3371))
* Dialog window does not hold the focus when opened ([#3199](https://github.com/IgniteUI/igniteui-angular/issues/3199))
* refactor(themes): don't include contrast colors in the palettes ([#3166](https://github.com/IgniteUI/igniteui-angular/issues/3166))

### Other
* update typedoc-plugin-localization version to 1.4.1 ([#3440](https://github.com/IgniteUI/igniteui-angular/issues/3440))
* Move all keyboard navigation tests in a separate file ([#2975](https://github.com/IgniteUI/igniteui-angular/issues/2975))


## 7.0.4
### Bug fixes
- Fix(igx-grid): revert row editing styles ([#2672](https://github.com/IgniteUI/igniteui-angular/issues/2672))
- Revert "fix(grid): set min width to header groups programmatically"  status: verified version: 7.0.x
([#3357](https://github.com/IgniteUI/igniteui-angular/issues/3357))


## 7.0.3
### Bug fixes
- ng add igniteui-angular adds igniteui-cli package to both dependencies and devDependencies ([#3254](https://github.com/IgniteUI/igniteui-angular/issues/3254))
- Group column header is not styled correctly when moving that column ([#3072](https://github.com/IgniteUI/igniteui-angular/issues/3072))
- igx-grid: Filter row remains after disabling filtering feature ([#3255](https://github.com/IgniteUI/igniteui-angular/issues/3255))
- [igxGrid] Keyboard navigation between cells and filtering row with MCH ([#3179](https://github.com/IgniteUI/igniteui-angular/issues/3179))
- Argument $color of red($color) must be a color ([#3190](https://github.com/IgniteUI/igniteui-angular/issues/3190))
- Shell strings localization ([#3237](https://github.com/IgniteUI/igniteui-angular/issues/3237))
- Tabbing out of the combo search input not possible ([#3200](https://github.com/IgniteUI/igniteui-angular/issues/3200))
- Localization (i18n) not available for inputs/buttons on the grid filtering dialog ([#2517](https://github.com/IgniteUI/igniteui-angular/issues/2517))
- When in the tree grid are pinned columns and scroll horizontal the cells text is over the pinned text #3163
- Request for update of shell strings in Japanese ([#3163](https://github.com/IgniteUI/igniteui-angular/issues/3163))
- Refactor(themes): remove get-function calls ([#3327](https://github.com/IgniteUI/igniteui-angular/issues/3327))
- Fix(grid): recalculate grid body size when changing allowFiltering dynamically ([#3321](https://github.com/IgniteUI/igniteui-angular/issues/3321))
- Fix - Combo - Hide Search input when !filterable && !allowCustomValues - 7.0.x ([#3314](https://github.com/IgniteUI/igniteui-angular/issues/3314))
- Fixing column chooser column updating - 7.0.x ([#3235](https://github.com/IgniteUI/igniteui-angular/issues/3235))
- Disable combo checkbox animations on scroll ([#3303](https://github.com/IgniteUI/igniteui-angular/issues/3303))
- Added validation if last column collides with grid's scroll. ([#3028](https://github.com/IgniteUI/igniteui-angular/issues/3028)) ([#3100](https://github.com/IgniteUI/igniteui-angular/issues/3100))
- Use value instead of ngModel to update editValue for checkbox and calendar in igxCell ([#3225](https://github.com/IgniteUI/igniteui-angular/issues/3225))
- Add @inheritdoc, create ScrollStrategy abstract class and fix method signatures 7.0.x ([#3222](https://github.com/IgniteUI/igniteui-angular/issues/3222))
- When scroll with the mouse wheel the value in datePicker editor for edited cell is empty ([#2958](https://github.com/IgniteUI/igniteui-angular/issues/2958))
- igxToolbar should have the option to add custom template ([#2983](https://github.com/IgniteUI/igniteui-angular/issues/2983))
- fix(grid): mark grid for check inside NgZone when resizing ([#2792](https://github.com/IgniteUI/igniteui-angular/issues/2792)) ([#3277](https://github.com/IgniteUI/igniteui-angular/issues/3277))
- IgxGridHeaderGroupComponent should have preset min width ([#3071](https://github.com/IgniteUI/igniteui-angular/issues/3071))
- Tree grid selection ([#3334](https://github.com/IgniteUI/igniteui-angular/issues/3334))

## 7.0.2
### Features
- `ng add igniteui-angular` support :tada:
    - You can now add Ignite UI for Angular to existing Angular CLI projects - simply run `ng add igniteui-angular` in your project.
    This will install the package and all needed dependencies, add Ignite UI CLI so you can even quickly add components.
- **New component** `IgxBannerComponent`:
    - Allows the developer to easily display a highly templateable message that requires minimal user interaction (1-2 actions) to be dismissed. Read up more information about the IgxBannerComponent in the official [documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner.html) or the [ReadMe](https://github.com/IgniteUI/igniteui-angular/tree/master/projects/igniteui-angular/src/lib/banner/README.md)
- `igxNavbar`:
    - Added a new `igx-action-icon` directive that can be used to provide a custom template to be used instead of the default action icon on the left-most part of the navbar.
    (If `igx-action-icon` is provided, the default action icon will not be used.)

### Bug fixes

- `igxGrid`
    - Filter row does not close when click button cancel, if the entered text is deleted ([#3198](https://github.com/IgniteUI/igniteui-angular/issues/3198))
    - Prevent a potential memory leak ([#3033](https://github.com/IgniteUI/igniteui-angular/issues/3033))
    - Filtering: Open dropdown on Alt+down, fixes input being populated on keyboard action ([#3202](https://github.com/IgniteUI/igniteui-angular/issues/3202))
    - Row Selection: selected checkboxes are flickering on vertical scrolling ([#2523](https://github.com/IgniteUI/igniteui-angular/issues/2523))
    - Row editing overlay animation should be bottom - top, when overlay is placed over the row ([#3184](https://github.com/IgniteUI/igniteui-angular/issues/3184))


## 7.0.1
### Bug fixes
- Removed the `GridHammerConfig` provider which broke touch events for other components. (Fixed #3185, Reopens #2538)


## 7.0.0
- Updated package dependencies to Angular 7 ([#3000](https://github.com/IgniteUI/igniteui-angular/pull/3000))
- Themes: Add dark schemas and mixins (PR [#3025](https://github.com/IgniteUI/igniteui-angular/pull/3025))

## 6.2.12
### Bug fixes
- igx-grid: `pinned` property doesn't work when `width` property is set together. #4125
- When you pin child column the whole group is not pinned #4278

## 6.2.11
### Bug Fixes
- igx-grid: Incorrect height calculation when setting height in percent and binding empty data. #3950
- Cannot set chip as selected through API if selectable is false #2383
- Setting groupingExpressions run-time has different result than using the UI/methods #3952
- igx-grid: row virtualization doesn't work when setting height in percent if you fetch and bind data after initial rendering. #3949

## 6.2.10
### Bug Fixes
- Cells position is changed when scroll vertical #3094
- igxGrid setting autogenerate and groupingExpressions inputs results in errors #3951

## 6.2.9
### Features
- `igxGrid`
    - `Group By`
        - The collapse/expand icons have new orientantion to display the action that will be performed when clicked. When an icon points up clicking on it would result in collapsing the related group row and when it points down clicking on it would expand the group row.
        - The collapse/expand all icons have also been updated to reflect the new group row icons better.
        - Group rows now can be expanded/collapsed using Alt + Arrow Up/Down to reflect the new icons.
- `igxTreeGrid`
    - The collapse/expand icons have new orientantion to display the action that will be performed when clicked. When an icon points up clicking on it would result in collapsing the related tree grid level and when it points down clicking on it would expand the tree grid level.
    - Expanding/collapsing tree levels can now be performed also by using Alt + Arrow Up/Down to reflect the new icons.

### Bug Fixes
- Add additional ways of expanding/collapsing in Tree Grid/Group By to reflect new icons #3841

## 6.2.8
### Bug Fixes
- Tree Grid collapse icon is updated to material standards #3780
- Change collapse/expand all icon on GroupBy #3298

## 6.2.7
### Bug Fixes
- igx-grid editing: Japanese inputs are not committed on enter or press key in edit mode #2525

## 6.2.6
### Bug Fixes/Other
- Add GA to API docs ([3596](https://github.com/IgniteUI/igniteui-angular/issues/3596))
- Modify gulp api docs tasks in order to follow the build steps ([3681](https://github.com/IgniteUI/igniteui-angular/issues/3681))

## 6.2.5
### Bug Fixes
- Setting required IgxInput's value not via typing does not clear the invalid style ([3550](https://github.com/IgniteUI/igniteui-angular/issues/3550))
- igx-grid isn't displayed properly in IE11 when it is inside an igx-tabs-group ([3047](https://github.com/IgniteUI/igniteui-angular/issues/3047))
- igxGrid minimal body height when no total height is set or inferred ([1693](https://github.com/IgniteUI/igniteui-angular/issues/1693))
- Horizontal scrollbar is not shown when column's width is set to a percentage value ([3513](https://github.com/IgniteUI/igniteui-angular/issues/3513))
- Visible @hidden tag due to comment structure ([3523](https://github.com/IgniteUI/igniteui-angular/issues/3523))
- Faulty link in Typedoc ([3531](https://github.com/IgniteUI/igniteui-angular/issues/3531))
- Several warnings on app launch 6.2.0 RC1 and now 7.0.2 ([2915](https://github.com/IgniteUI/igniteui-angular/issues/2915))
- For_of directive doesn't scroll to next elements in some cases ([3482](https://github.com/IgniteUI/igniteui-angular/issues/3482))
- Not setting width in percentage on one or more columns results in columns going out of view ([1245](https://github.com/IgniteUI/igniteui-angular/issues/1245))
- Calendar test is failing because of wrong selector ([3508](https://github.com/IgniteUI/igniteui-angular/issues/3508))
- When transactions are enabled and delete a row page is changed to first page ([3425](https://github.com/IgniteUI/igniteui-angular/issues/3425))
- When a column is sorted and change value in a cell after commit and press enter on selected cell the focus is not in the input ([2801](https://github.com/IgniteUI/igniteui-angular/issues/2801))
- igxFor with scrollOrientation: horizontal - Almost all the items are not rendered when they don't have width property ([3087](https://github.com/IgniteUI/igniteui-angular/issues/3087))
- Pressing ESC on a cell in an editable column throws an error ([3429](https://github.com/IgniteUI/igniteui-angular/issues/3429))

## 6.2.4
### Bug Fixes
* onSortingDone is not fired when sorting indicator of a header in the group by area is clicked ([#3257](https://github.com/IgniteUI/igniteui-angular/issues/3257))
* igx-grid isn't displayed properly in IE11 when it is inside an igx-tabs-group ([#3047](https://github.com/IgniteUI/igniteui-angular/issues/3047))
* Preventing wrap-around for scrollNext and scrollPrev([#3365](https://github.com/IgniteUI/igniteui-angular/issues/3365))
* IgxTreeGrid does not respect its parent container height ([#3467](https://github.com/IgniteUI/igniteui-angular/issues/3467))
* The header link in the api docs page should be to the product page ([#3423](https://github.com/IgniteUI/igniteui-angular/issues/3423))
* fix(dialog): dialog gets focus when is opened ([#3276](https://github.com/IgniteUI/igniteui-angular/issues/3276))
* IgxTreeGrid - Add row editing + transactions to tree grid ([#2908](https://github.com/IgniteUI/igniteui-angular/issues/2908))
* Regular highlight makes the highlighted text unreadable when the row is selected. ([#1852](https://github.com/IgniteUI/igniteui-angular/issues/1852))
* Use value instead of ngModel to update editValue for checkbox and calendar in igxCell ([#3224](https://github.com/IgniteUI/igniteui-angular/issues/3224))
* Disable combo checkbox animations on scroll ([#3300](https://github.com/IgniteUI/igniteui-angular/issues/3300))
* "Select/Unselect All" checkbox is checked after deleting all rows ([#3068](https://github.com/IgniteUI/igniteui-angular/issues/3068))
* Fixing column chooser column updating ([#3234](https://github.com/IgniteUI/igniteui-angular/issues/3234))
* Fix - Combo - Hide Search input when !filterable && !allowCustomValues ([#3315](https://github.com/IgniteUI/igniteui-angular/issues/3315))
* Add @inheritdoc ([#2943](https://github.com/IgniteUI/igniteui-angular/issues/2943))
* refactor(displayDensity): Code cleanup in display density base class #3280
* Calculating updated grid height when rebinding columns ([#3285](https://github.com/IgniteUI/igniteui-angular/issues/3285))
* Fix - Combo, Drop Down - Fix TAB key navigation ([#3206](https://github.com/IgniteUI/igniteui-angular/issues/3206))
* Added validation if last column collides with grid's scroll ([#3142](https://github.com/IgniteUI/igniteui-angular/issues/3142))
* When in the tree grid are pinned columns and scroll horizontal the cells text is over the pinned text ([#3163](https://github.com/IgniteUI/igniteui-angular/issues/3163))
* refactor(themes): don't include contrast colors in the palettes ([#3166](https://github.com/IgniteUI/igniteui-angular/issues/3166))

### Code enhancements
* Fix the logic calculating test results ([#3461](https://github.com/IgniteUI/igniteui-angular/issues/3461))
* Update typedoc version and localize some shell strings ([#3237](https://github.com/IgniteUI/igniteui-angular/issues/3237))
* fix(toolbar): including custom content in the show toolbar check ([#2983](https://github.com/IgniteUI/igniteui-angular/issues/2983))
* docs(toolbar): adding more API docs ([#2983](https://github.com/IgniteUI/igniteui-angular/issues/2983))

### Other
* update typedoc-plugin-localization version to 1.4.1 ([#3440](https://github.com/IgniteUI/igniteui-angular/issues/3440))
* Update contributing document with localization ([#3313](https://github.com/IgniteUI/igniteui-angular/issues/3313))
* docs(*): add 6.2.3 missing changes and bug fixes to changelog ([#3251](https://github.com/IgniteUI/igniteui-angular/issues/3251))
* Docs - Expansion Panel - Add comments and README([#3245](https://github.com/IgniteUI/igniteui-angular/issues/3245))
* Move all keyboard navigation tests in a separate file ([#2975](https://github.com/IgniteUI/igniteui-angular/issues/2975))


## 6.2.3
- `igxGrid`
    - `resourceStrings` property added, which allows changing/localizing strings for component. If a new instance is set,
    the changes will be applied to the particular instance of the component:
    ```typescript
        this.grid.resourceStrings = {
            igx_grid_filter: 'My filter',
            igx_grid_filter_row_close: 'My close'
        };
    ```
    If only a value is updated, all component instances will be updated:
    ```typescript
        this.grid.resourceStrings.igx_grid_filter = 'My filter';
    ```
- `igxTimePicker`:
    - `resourceStrings` property added, which allows changing/localizing strings for component.
- Localization
    - Added an util function `changei18n` that takes `IResourceStrings` object as parameter. Its values will be used as resource strings for all components
    in the application.
    - Added an util function `getCurrentResourceStrings` that returns current resource strings for all components.
- `ISortingEpression`:
    - The `ignoreCase` and `strategy` properties are moved back to optional, and the `DefaultSortingStrategy` is now injected by the `IgxSorting`, instead of being mandatory to pass to expressions.

### Bug fixes

- `igxGrid`
    - Filter row does not close when click button cancel, if the entered text is deleted ([#3198](https://github.com/IgniteUI/igniteui-angular/issues/3198))
    - Prevent a potential memory leak ([#3033](https://github.com/IgniteUI/igniteui-angular/issues/3033))
    - Filtering: Open dropdown on Alt+down, fixes input being populated on keyboard action ([#3202](https://github.com/IgniteUI/igniteui-angular/issues/3202))
    - Row Selection: selected checkboxes are flickering on vertical scrolling ([#2523](https://github.com/IgniteUI/igniteui-angular/issues/2523))
    - Row editing overlay animation should be bottom - top, when overlay is placed over the row ([#3184](https://github.com/IgniteUI/igniteui-angular/issues/3184))


## 6.2.2
- `igx-checkbox`:
    - Added a new input property - `disableTransitions`. It allows disabling all CSS transitions on the `igx-checkbox` component for performance optimization.
### Bug fixes
- Removed the `GridHammerConfig` provider which broke touch events for other components. (Fixed #3185, Reopens #2538)

## 6.2.1
### Features
- `igxGrid`, `igxChip`: Add display density DI token to igxGrid and igxChip ([#2804](https://github.com/IgniteUI/igniteui-angular/issues/2804))
- `igxGrid`
    - Quick filter auto close ([#2979](https://github.com/IgniteUI/igniteui-angular/issues/2979))
    - Group By: Added title to chip in Group By area ([#3035](https://github.com/IgniteUI/igniteui-angular/issues/3035))
    - Improve UX for boolean and date columns, ([#3092](https://github.com/IgniteUI/igniteui-angular/issues/3092))
- `igxCombo`:
    - Added a new input property - `displayDensity`. It allows configuring the `displayDensity` of the combo's `value` and `search` inputs. (PR [#3007](https://github.com/IgniteUI/igniteui-angular/pull/3007))
- `igxDropDown`
    - Added a new property `maxHeight`, defining the max height of the drop down. ([#3001](https://github.com/IgniteUI/igniteui-angular/issues/3001))
- Added migrations for Sass theme properties changes in 6.2.0 ([#2994](https://github.com/IgniteUI/igniteui-angular/issues/2994))
- Themes
    - Introducing schemas for easier bootstrapping of component themes.
    - **Breaking change** removed $variant from `igx-checkbox-theme`, `igx-ripple-theme`, `igx-switch-theme`, `igx-input-group-theme`, `igx-slider-theme`, and `igx-tooltip-theme`. Use the `$schema` prop, now available on all component themes to change the look for a specific theme. See the [Theming](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes/schemas.html) documentation to learn more.


### Bug fixes

- `igxGrid`
    - Filtering condition icon is not updated for boolean columns ([#2936](https://github.com/IgniteUI/igniteui-angular/issues/2936))
    - Batch editing: Updating a cell with a value that evaluates to false does not mark it as dirty ([#2940](https://github.com/IgniteUI/igniteui-angular/issues/2940))
    - Filtering input accepts value from calendar for unary conditions ([#2937](https://github.com/IgniteUI/igniteui-angular/issues/2937))
    - When a number filter's value is deleted the grid is not refreshed ([#2945](https://github.com/IgniteUI/igniteui-angular/issues/2945))
    - Improve keyboard navigation in filtering ([#2951](https://github.com/IgniteUI/igniteui-angular/issues/2951), [#2941](https://github.com/IgniteUI/igniteui-angular/issues/2941))
    - Group By: Alt+ Arrow left/Right keys should not toggle the group row ([#2950](https://github.com/IgniteUI/igniteui-angular/issues/2950))
    - Multi Column Header can be grouped ([#2944](https://github.com/IgniteUI/igniteui-angular/issues/2944))
    - Group By: groupsRecords is not updated yet at the time of onGroupingDone event. ([#2967](https://github.com/IgniteUI/igniteui-angular/issues/2967))
    - Paging: Blank space in rows area after vertical scrolling and navigating to next page ([#2957](https://github.com/IgniteUI/igniteui-angular/issues/2957))
    - When date or boolean cell is in edit mode and press arrowUp or arrowDown key the page is scrolled ([#2507](https://github.com/IgniteUI/igniteui-angular/issues/2507))
    - When deleting a row the Row Editing dialog should be closed ([#2977](https://github.com/IgniteUI/igniteui-angular/issues/2977))
    - Group header with columns which width is defined as number throws an exception ([#3020](https://github.com/IgniteUI/igniteui-angular/issues/3020))
    - Refactor header and filter cell components, Closes [#2972](https://github.com/IgniteUI/igniteui-angular/issues/2972), [#2926](https://github.com/IgniteUI/igniteui-angular/issues/2926), [#2923](https://github.com/IgniteUI/igniteui-angular/issues/2923), [#2917](https://github.com/IgniteUI/igniteui-angular/issues/2917), [#2783](https://github.com/IgniteUI/igniteui-angular/issues/2783), [#3027](https://github.com/IgniteUI/igniteui-angular/issues/3027), [#2938](https://github.com/IgniteUI/igniteui-angular/issues/2938)
    - Filter's UI dropdown is hidden under the bottom level of the grid ([#2928](https://github.com/IgniteUI/igniteui-angular/issues/2928))
    - Cell is not editable on iOS ([#2538](https://github.com/IgniteUI/igniteui-angular/issues/2538))
- `IgxTreeGrid`
    - Cell selection wrong behavior when collapsing rows ([#2935](https://github.com/IgniteUI/igniteui-angular/issues/2935))
- `igxCombo`
    - Keyboard doesn't scroll virtualized items ([#2999](https://github.com/IgniteUI/igniteui-angular/issues/2999))
- `igxDatePicker`
    - Error emitting when  value property is initialized with empty string. ([#3021](https://github.com/IgniteUI/igniteui-angular/issues/3021))
- `igxOverlay`
    - Drop-down flickers in IE and EDGE ([#2867](https://github.com/IgniteUI/igniteui-angular/issues/2867))
- `igxTabs`
    - Tabs don't not handle width change ([#3030](https://github.com/IgniteUI/igniteui-angular/issues/3030))
- `igxCalendar`
    - make all css class names unique ([#2287](https://github.com/IgniteUI/igniteui-angular/issues/2287))
- Fixed runtime errors when using the package in applications targeting es2015(es6) and newer ([#3011](https://github.com/IgniteUI/igniteui-angular/pull/3011))

## 6.2.0
- Updated typography following the Material guidelines. Type system is now also optional and can be applied via class to the desired containers. [#2112](https://github.com/IgniteUI/igniteui-angular/pull/2112)
  - **Breaking change:** Applications using Ignite UI for Angular now require the `igx-typography` class to be applied on wrapping element, like the body element for instance.

- Display density can be specified by using the injection token `DisplayDensityToken` and providing a value (comfortable, cosy or compact) on an application or a component level.

    Setting display density on a component level:
    ```typescript
    @Component({
    ...
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.compact} }]
    })
    ```
- `igx-input-group`
    - The `igx-input-group` control's display density can be explicitly set by using the `displayDensity` input.
    ```html
    <igx-input-group [displayDensity]="'cosy'"> ... </igx-input-group>
    ```
- `igx-drop-down`:
    - Added a new boolean argument `cancel` to the `onSelection` `ISelectionEventArgs`. Its default value is false, in case it is set to true, the drop down selection is invalidated.
- `igxIcon`:
    - **Breaking change** `glyphName` property is removed from `IgxIconComponent`. For `Material` icons the icon name should be explicitly defined between the opening and closing tags. `Font Awesome` icons should use the `name` property now.
    - Added support for custom SVG icons. Register the SVG icons with the `IgxIconService` and use `IgxIconComponent`'s `name` and `fontSet` properties to visualize the icon.
- Transaction Provider - `TransactionService` is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.
For more detailed information, see the [README](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/services/transaction/README.md).
- `igxTreeGrid`:
    - New `IgxTreeGridComponent` added.
    - The `igxTreeGrid` is used to display and manipulate hierarchical data with consistent schema, formatted as a table and provides a line of advanced features such as sorting, filtering, editing, column pinning, column moving, column hiding, paging and others.
    - The `igxTreeGrid` provides two ways of defining the relations among our data objects - by using a **child collection** for every data object or by using **primary and foreign keys** for every data object.
    - For more details on using the `igxTreeGrid`, take a look at the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid.html).
- `igxGrid`:
    - **Breaking change** `onGroupingDone` - The array of `ISortingExpression` can now be accessed through the `expressions` event property. Two new properties have been added to the event arguments - `groupedColumns` and `ungroupedColumns`. They provide references to arrays of `IgxColumnComponent` that hold the columns which have changed their state because of the **last** grouping/ungrouping operation.

    - **Breaking change** `onEditDone` event is renamed to `onCellEdit` and new cell editing events are introduced: `onCellEditEnter` and `onCellEditCancel`. When row editing is enabled, the corresponding events are emitted by the grid - `onRowEditEnter`, `onRowEdit`, `onRowEditCancel`. All these events have arguments that are using the `IGridEditEventArgs` interface.

    - Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.

        ```html
        <igx-grid [data]="data" [rowEditable]="true">
            <igx-column field="ProductName"></igx-column>
            <igx-column field="ReleaseDate"></igx-column>
        </igx-grid>
        ```

    - Batch editing - an injectable transaction provider accumulates pending changes, which are not directly applied to the grid's data source. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.

        ```typescript
        @Component({
            providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
            selector: "app-grid-with-transactions",
            template: "<ng-content></ng-content>"
        })
        export class GridWithTransactionsComponent { }
        ```
    - A new boolean `hideGroupedColumns` input controls whether the grouped columns should be hidden as well (defaults to false).
    - **Breaking change** `cellClasses` input on `IgxColumnComponent` now accepts an object literal to allow conditional cell styling.
    - Exposing a mechanism for cells to grow according to their content.
    - `sortStrategy` input exposed to provide custom sort strategy for the `IgxColumnComponent`. The custom strategy should implement the `ISortingStrategy` interface, or can extend the base `SortingStrategy` class and override all or some of its public/protected members.
    - New quick filtering functionality is implemented. Filtering icon is removed from column header and a filtering row is introduced in the grid's header.
- `igxFor`
    - Added support for variable heights.
- `igx-datePicker` selector is deprecated. Use `igx-date-picker` selector instead.
- `igxOverlay`:
    - `OverlaySettings` now also accepts an optional `outlet` to specify the container where the overlay should be attached.
    - when `show` and `hide` methods are called `onAnimation` event fires. In the arguments of this event there is a reference to the `animationPlayer`, `animationType` (either `open` or `close`) and to the overlay id.
    - if you call `show`/`hide` methods of overlay, while opening/closing animation is still ongoing, the animation will stop and respective open/close animation will start.
- `igxToggleAction` new `outlet` input controls the target overlay element should be attached. Provides a shortcut for `overlaySettings.outlet`.
- `IgxOverlayOutlet` directive introduced to mark an element as an `igxOverlay` outlet container. [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/toggle/README.md)
- `igxButtonGroup`
    - Added the ability to define buttons directly in the template
- `igx-time-picker`:
    - `igxTimePickerTemplate` - new directive which should be applied on the child `<ng-template>` element when `IgxTimePickerComponent`'s input group is retemplated.
- `igx-datePicker`:
    - `igxDatePickerTemplate` - new directive which should be applied on the child `<ng-template>` element when `IgxDatePickerComponent`'s input group is retemplated.
    - Introduced `disabledDates`. This property is exposed from the `igx-calendar` component.
    - Introduced `specialDates`. This property is exposed from the `igx-calendar` component.
    - Introduced `deselectDate` method added that deselects the calendar date.
- `IgxTextHighlightDirective`: The `highlight` method now has a new optional parameter called `exactMatch` (defaults to false).
    - If its value is false, all occurrences of the search text will be highlighted in the group's value.
    - If its value is true, the entire group's value should equals the search text in order to be highlighted (caseSensitive argument is respected as well).
- `IgxGrid`: The `findNext` and `findPrev` methods now have a new optional parameter called `exactMatch` (defaults to false).
    - If its value is false, all occurrences of the search text will be highlighted in the grid's cells.
    - If its value is true, the entire value of each cell should equals the search text in order to be highlighted (caseSensitive argument is respected as well).
- `IgxChip`
    - Introduced event argument types to all `EventEmitter` `@Output`s.
    - **Breaking change** `onSelection`'s EventEmitter interface property `nextStatus` is renamed to `selected`.
    - **Breaking change** Move the location of where the chip `suffix` is positioned. Now it is between the content and the `remove button` making the button last element if visible by default.
    - **Breaking change** Remove the chip `connector` rendered when using the `igxConnector` directive that is also removed.
    - **Breaking change** The chip theme has been rewritten. Most theme input properties have been renamed for consistency
    and better legibility. New properties have been added. Please, refer to the updated igx-chip-theme documentation to see all updates.
    - Exposed original event that is responsible for triggering any of the events. If triggered by the API it is by default `null`.
    - Added `data` input for storing any data related to the chip itself.
    - Added `select icon` with show/hide animation to indicate when a chip is being selected with ability to customize it while retaining the chip Material Design styling.
    - Added `selectIcon` input to set custom template for the `select icon`.
    - Update chip styling to match Material Design guidelines.
    - Rework of the chip content styling so now by default text inside is styled to match the chip Material Design styling.
    - Rework of the `remove button` rendered and now has the ability to customize its icon while retaining the chip Material Design.
    - Added `removeIcon` input so a custom template cane be set for the remove button icon.
- `IgxChipArea`
    - Introduced event argument types to all `EventEmitter` `@Output`s.
    - Exposed original event that is responsible for triggering any of the events. If triggered by the API it is by default `null`.
- `IgxCombo`
    - Added the following directives for `TemplateRef` assignment for combo templates (item, footer, etc.):
        - Added `IgxComboItemDirective`. Use `[igxComboItem]` in markup to assing a TemplateRef to `combo.itemTemplate`.
        - Added `IgxComboHeaderDirective`. Use `[igxComboHeader]` in markup to assing a TemplateRef to `combo.headerTemplate`.
        - Added `IgxComboFooterDirective`. Use `[igxComboFooter]` in markup to assing a TemplateRef to `combo.footerTemplate`.
        - Added `IgxComboEmptyDirective`. Use `[igxComboEmpty]` in markup to assing a TemplateRef to `combo.emptyTemplate`.
        - Added `IgxComboAddItemirective`. Use `[igxComboAddItem]` in markup to assing a TemplateRef to `combo.addItemTemplate`.
        - Added `IgxComboHeaderItemDirective`. Use `[igxComboHeaderItem]` in markup to assing a TemplateRef to `combo.headerItemTemplate`.
    - **Breaking change** Assigning templates with the following template ref variables is now deprecated in favor of the new directives:
            `#itemTemplate`, `#headerTemplate`, `#footerTemplate`, `#emptyTemplate`, `#addItemTemplate`, `#headerItemTemplate`.
    - **Breaking change** `height` property is removed. In the future `IgxInputGroup` will expose an option that allows custom sizing and then `IgxCombo` will use the same functionality for proper styling and better consistency.

- `IgxDropDown`
    - **Breaking change** `allowItemsFocus` default value is changed to `false`.
    - Added `value` input to `IgxDropDownItemComponent` definition. The property allows data to be bound to a drop-down item so it can more easily be retrieved (e.g. on selection)
- `igx-calendar`:
    - Introduced `disabledDates` property which allows a user to disable dates based on various rules: before or after a date, weekends, workdays, specific dates and ranges. The disabled dates cannot be selected and have a distinguishable style.
    - Introduced `specialDates` property which allows a user to mark dates as special. They can be set by using various rules. Their style is distinguishable.
    - Introduced `deselectDate` method added that deselects date(s) (based on the selection type)
- `igxExpansionPanel`:
    - component added. `igxExpansionPanel` provides a way to display more information after expanding an item, respectively show less after collapsing it. For more detailed information see the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/expansion_panel.html).
- `IgxList`:
    - the control now supports **ng-templates** which are shown "under" a list item when it is left or right panned. The templates are distinguished using the `igxListItemLeftPanning` and `igxListItemRightPanning` directives set on the templates.
    - the IgxList's `onLeftPan` and `onRightPan` events now have an argument of type `IListItemPanningEventArgs` (instead of `IgxListItemComponent`). The event argument has the following fields:
        - **item** of type `IgxListItemComponent`
        - **direction** of type `IgxListPanState`
        - **keepItem** of type `boolean`
- `igxTooltip` and `igxTooltipTarget` directives:
    - Added `IgxTooltipDirective`.
        - An element that uses the `igxTooltip` directive is used as a tooltip for a specific target (anchor).
        - Extends `IgxToggleDirective`.
        - Exported with the name **tooltip**.
    - Added `IgxTooltipTargetDirective`.
        - An element that uses the `igxTooltipTarget` directive is used as a target (anchor) for a specific tooltip.
        - Extends `IgxToggleActionDirective`.
        - Exported with the name **tooltipTarget**.
    - Both new directives are used in combination to set a tooltip to an element. For more detailed information, see the [README](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/tooltip/README.md).
- `igxToggle`:
    - Introduced reposition method which allows a user to force toggle to reposition according its position strategy.
- `IgxDrag` and `IgxDrop` directives available.
    - `IgxDrag` allows any kind of element to be moved/dragged around the page without changing its position in the DOM. Supports Desktop/Mixed/Touch environments.
    - `IgxDrop` allows any element to act as a drop area where any `igxDrag` element can be dragged into and dropped. Includes default logic that moves the dropped element from its original position to a child of the `igxDrop` element.
    - Combined they provide a way to move elements around the page by dragging them. For more detail see the [README](https://github.com/IgniteUI/igniteui-angular/blob/master/projects/igniteui-angular/src/lib/directives/dragdrop/README.md).
- `IgxGrid` keyboard navigation
When you focus a specific cell and press one of the following key combinations, the described behaviour is now performed:
    - `Ctrl + Arrow Key Up` - navigates to the first cell in the current column;
    - `Ctrl + Arrow Down` - navigates to the last cell in the current column;
    - `Home` - provide the same behavior as Ctrl + Arrow Left - navigates to the first cell from the current row;
    - `End` - provide the same behavior as Ctrl + Arrow Right - navigates to the last cell from the current row;
    - `Ctrl + Home` - navigates to the first cell in the grid;
    - `Ctrl + End` - navigates to the last cell in the grid;
    - `Tab` - sequentially move the focus over the next cell on the row and if the last cell is reached move to next row. If next row is group row the whole row is focused, if it is data row, move focus over the first cell;
    - `Shift + Tab` - sequentially move focus to the previous cell on the row, if the first cell is reached move the focus to the previous row. If previous row is group row focus the whole row or if it is data row, focus the last cell of the row;
    - `Space` over Cell - if the row is selectable, on keydown space triggers row selection
    - `Arrow Left` over GroupRow - collapse the group row content if the row is not already collapsed;
    - `Arrow Right` over GroupRow - expand the group row content if the row is not already expanded;
    - on mouse `wheel` the focused element is blurred;
    - **Breaking change**  `space` handler for the group row has been removed; so `Space` does not toggle the group row;
    - **Breaking change** cell selection is preserved when the focus is moved to group row.
    - Introduced `onFocusChange` event. The event is cancelable and output argument from type `IFocusChangeEventArgs`;
    - For more detailed information see the [official keyboard navigation specification](https://github.com/IgniteUI/igniteui-angular/wiki/igxGrid-Specification#kb-navigation).

## 6.1.9

### General

- `sortStrategy` input exposed to provide custom sort strategy for the `IgxColumnComponent`. The custom strategy should implement the `ISortingStrategy` interface, or can extend the base `DefaultSortingStrategy` class and override all or some of its public/protected members.
- The previously optional `ignoreCase` and `strategy` of the `ISortingExpression` interface are no longer optional. In order to use our default sorting strategy in expressions built programmatically, you need to pass `DefaultSortingStrategy.instance()` or any implementation of the `ISortingStrategy` interface.
- `groupingComparer` input exposed to provide custom grouping compare function for the `IgxColumnComponent`. The function receives two values and should return `0` if they are to considered members of the same group.

## 6.1.8

### Bug fixes

- Fix sorting and groupby expression not syncing when there are already sorted columns. #2786
- GroupBy Chip sorting direction indicator is not changed if sorting direction is changed #2765
- Failing tests caused by inconsistent behavior when sorting a column with equal values #2767
- IgxGridComponent.groupingExpressions is of type any #2758

## 6.1.7

### Bug Fixes
- IgxSelectionAPIService allows to add items with id which is undefined #2581
- FilteredSortedData collection holds the original data after first filtering operation is done #2611
- Calendar improvement of "selected" getter #2687
- Improve igxCalendar performance #2675
- Add Azure Pipelines CI and PR builds #2605
- The igxDatePicker changes the time portion of a provided date #2561
- IgxChip remove icon has wrong color #2573
- Chip has intrinsic margin #2662
- IgxChip remove icon has wrong color #2573
- ChipsArea's OnSelection output is not emitted on initialization #2640

## 6.1.6

### Bug Fixes
- IgxChip raises onSelection before onRemove #2612
- Summaries are shown on horizontal scrolling when Row Selectors are enabled #2522
- Bug - IgxCombo - Combo does not bind properly with [(ngModel)] and simple data (e.g. string[]) #2620
- Missing backtick in comment #2537
- IgxSelectionAPIService allows to add items with id which is undefined #2581
- Circular bar text is clipped #2370
- Update all angular async Calendar tests to await async #2582
- InvalidPipeArgument: 'inable to convert "" into a date for pipe 'DatePipe' #2520
- All cells in the row enter in edit mode if igx-columns are recreated. #2516

## 6.1.5
- **General**
    - `IgxChip`
        - Introduced event argument types to all `EventEmitter` `@Output`s.
        - A chip can now be selected with the API with the new `selected` input. The `selected` input overrides the `selectable` input value.
        - **Breaking change** `onSelection`'s EventEmitter interface property `nextStatus` is renamed to `selected`.
    - `IgxChipArea`
        - Introduced event argument types to all `EventEmitter` `@Output`s.
    - `igxFor`
        - Adding inertia scrolling for touch devices. This also affects the following components that virtualize their content via the igxFor - `igxGrid`, `igxCombo`.
    - `igxGrid`
        - Adding inertia scrolling for touch devices.
    - `igxCombo`
        - Adding inertia scrolling for touch devices.
    - `IgxCalendar` - `deselectDate` method added that deselects date(s) (based on the selection type)
    - `IgxDatePicker` - `deselectDate` method added that deselects the calendar date.

### Bug Fixes
- igx-tabs : When you move the tab key, the contents of other tabs are displayed. #2550
- Prevent default scroll behavior when using keyboard navigation. #2496
- Error is thrown on ng serve --prod #2540
- onSelection event is not fired when a cell in last visible row is row is selected and press arrow Down #2509
- Add deselect method to igxCalendar #2424
- Time starts from 03 minutes instead of 00 #2541
- Replace EventEmitter<any> with the respective interface for the event #2481
- Cannot scroll last item in view #2504
- Japanese character is redundantly inserted into textbox on filter dialog on Safari #2316
- Improve row selection performance #1258
- igxRipple - Mousedown event doesn't bubble up when igxRipple is attached to elements. #2473
- Add default formatting for numbers in igx-grid #1197
- An error is returned when update a filtered cell #2465
- Grid Keyboard navigation performance issue #1923
- Vertical scrolling performance is slower when grouping is applied. #2421

## 6.1.4

### Bug Fixes

- Bottom of letters fall of in the label of igx-tabs-group #1978
- The search highlight and info are not updated correctly after editing a cell value of the grid #2388
- Cannot set chip as selected through API if selectable is false #2383
- Pressing 'Home/End' keys is not moving the focus to the first/last item #2332
- Cannot set igxChip as selected #2378
- Scrolling using touch is not working on Edge and Internet Explorer 11 #1639
- IgxCombo - Selection - Cannot override combo selection through the onSelectionChange event #2440
- igx-grid - `updateCell` method doesn't update cells that are not rendered. #2350

## 6.1.3
- **General**
    - Added ES7 polyfill for Object for IE. This should be added to the polyfills in order for the igxGrid to render under IE.
        ```
        import 'core-js/es7/object';
        ```

- `igxTabs`
    - `selectedIndex` property has an `@Input` setter and can be set both in markup and in code behind.
- `igxDropDownItem`
    - `isSelected` has a public setter and is now an `@Input` property that can be used for template binding.
- `igxGrid`
    - **Breaking change** `applyNumberCSSClass` and `columnType` getters are removed.
    - `isUnary` property added to IFilteringOperation
    - `igxColumn`
        - The footerTemplate property is removed.
    - `igxColumnGroup`
        - The footerTemplate property is removed.
    - exposed `autosize()` method on `IgxColumnComponent`. It allows the user to programatically change the size of a column according to it's largest visible cell.
    - Initializing an `igxGrid` component without setting height, inside a container without height defined, now causes the grid to render 10 records from the data view or all of the records if there are fewer than 10 available.
- `igxCombo`
    - **Breaking change** igxCombo default `width` is set to 100%
    - **Breaking change** `itemsMaxWidth` is renamed to `itemsWidth`
- `igxLinearBar` and `igxCircularBar`
    - exposed `step` input which determines the update step of the progress indicator. By default it is one percent of the maximum value.
    - `IgxCircularBar` `text` input property exposed to set the text to be displayed inside the circular bar.

### Bug fixes

- igx-grid - cannot auto-size columns by double-clicking in IE11 #2025
- Animation for removing item from list is very quick, must be more smoothly. #2306
- circular and linear bars - prevent progress exceeding, smooth update when operate with big nums, allow floating point nums, expose step input #2163
- Blank space on the right of igxGrid when there is a hidden column and grid width is 100% #2249
- Igx Combo throws errors when data is set to null or undefined #2300
- Top cell is not positioned aligned to the header, after keyboard navigation #1185
- In carousel when call method remove for selected slide it is still previewed #2182
- In grid paging paginate and page should check if the page is greater than the totalPages #2288
- Typos and inaccuracies in IgxSnackbar's readme. #2250
- The grid enables all the columns to be declared as pinned in the template #1612
- Combo - Keyboard Navigation - Add Item button fires on Keydown.Space #2266
- Reduce the use of MutationObservers in the IgxTextHighlightDirective #2251
- Improve row selection performance #1258
- Filter UI dialog redraws #2038
- Can't navigate from first row cell to selection checkbox with key combination #1937
- Incorrect position pinning of Navigation Drawer #2013
- Keyboard navigation not working correctly whith column moving and cell selection #2086
- Grid Layout is broken when you hide column #2121
- IgxDateFilteringOperand's operation "doesNotEqual" doesn't work if the "equals" operation is localized(modified). #2202
- aside in igx-nav-drawer surpasses height of igx-nav-drawer #1981
- The button for collapse/expand all in groupby is not working correctly #2200
- IgxDropDown Item cannot be set as selected. #2061
- IgxBooleanFilteringOperand doesn't work if the operation 'all' is localized(modified). #2067
- columnMove doesn't work if no data is loaded. #2158
- Combo's clear button should be just an icon #2099
- Default combo width should be 100% #2097
- The combo list disappears after disabling Filtering at runtime #2108
- igx-slider - slider comes to not work well after changing maxValue. #920
- Search match highlight not always scrolled into view #1886
- When groupby row is focused and spacebar is pressed the browser scrolls down, everywhere except Chrome, although it should only collapse the group #1947
- Grid data bind fails initially until window resize #1614
- Localization (i18n) for grid grouping area string #2046
- When delete all records in the last page pager should be changed #2014
- Filter icon in the header changes its position #2036

## 6.1.2
- `igxCombo` improvements
    - Remote Data Binding fixes - selection preserving and keyboard navigation.

    For more detailed information see the [official igxCombo documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/combo.html).

**General**
- Added `jsZip` as a Dependency.

### Bug Fixes

- Grid Layout is broken when you change displayDensity runtime #2005
- Add empty grid template #2035
- Page Up/Page Down buttons don't scroll the grid #606
- Icon component is not properly exported #2072
- Adding density to chip doesn't make the density style to apply when it is dragged #1846
- Update jszip as dependency #2043
- No message is displayed when there is empty grid data without filtering enabled. #2001
- The only possible range of setting minValue to igxSlider is between [0..99] #2033
- Bootstrap & IgniteUI issues #1548
- Remove tabs from collection -> TabCollectionChange Output #1972
- 6.1.1 error on npm install #2023
- Remote binding combo doesn't store the selected fields when scrolled or collapsed #1944
- Exception is thrown when hovering a chip with a column header #1813
- IgxCombo - Remote Virtualization Keyboard Navigation #1987

## 6.1.1
- `igxTimePicker` changes
    - `onClose` event added.

### Bug Fixes

- Exit edit mode when move column through grid API #1932
- IgxListItemComponent and the two template directives are missing from public_api.ts. #1939
- Add Item button disappears after adding same item twice successively. #1938
- onTabItemDeselected is called for every not selected tab item #1952
- Exit edit mode when pin/unpin column through grid API #1933
- Selected combo item doesn't have the proper focused styles #1948
- Time-picker does not open on button-press. #1949
- Custom cell not rendering with grid searching functionality #1931
- Regular highlight makes the highlighted text unreadable when the row is selected. #1852
- DatePicker focus is wrong on select date value #1965
- add sass docs, grid document updates and input-group theme-related fixes #1993
- DatePicker focus handler and AoT build #1994
- Change displayDensity runtime #1974
- Change IgxGrid display density runtime #1998
- Error is thrown when using igx-grid theme without $content-background #1996
- Update npm deploy token #2002

## 6.1.0
- `igxOverlay` service added. **igxOverlayService** allows you to show any component above all elements in page. For more detailed information see the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay_main.html)
- Added **igxRadioGroup** directive. It allows better control over its child `igxRadio` components and support template-driven and reactive forms.
- Added `column moving` feature to `igxGrid`, enabled on a per-column level. **Column moving** allows you to reorder the `igxGrid` columns via standard drag/drop mouse or touch gestures.
    For more detailed information see the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_moving.html).
- `igx-tab-bar` selector removed from `IgxBottomNavComponent`.
- `igxGrid` filtering operands
- `igxGrid`
    - **Breaking change** `filter_multiple` method is removed. `filter` method and `filteringExpressionsTree` property could be used instead.
    - **Breaking change** `filter` method has new signature. It now accepts the following parameters:
        - `name` - the name of the column to be filtered.
        - `value` - the value to be used for filtering.
        - `conditionOrExpressionTree` - (optional) this parameter accepts object of type `IFilteringOperation` or `IFilteringExpressionsTree`. If only a simple filtering is required a filtering operation could be passes (see bellow for more info). In case of advanced filtering an expressions tree containing complex filtering logic could be passed.
        - `ignoreCase` - (optional) - whether the filtering would be case sensitive or not.
    - **Breaking change** `onFilteringDone` event now have only one parameter - `IFilteringExpressionsTree` which contains the filtering state of the filtered column.
    - `filter_global` method clears all existing filters and applies the new filtering condition to all grid's columns.
    - filtering operands:
        - **Breaking change** `IFilteringExpression` condition property is no longer a direct reference to a filtering condition method, instead it's a reference to an `IFilteringOperation`
        - 5 filtering operand classes are now exposed
            - `IgxFilteringOperand` is a base filtering operand, which can be inherited when defining custom filtering conditions
            - `IgxBooleanFilteringOperand` defines all default filtering conditions for `boolean` types
            - `IgxNumberFilteringOperand` defines all default filtering conditions for `numeric` types
            - `IgxStringFilteringOperand` defines all default filtering conditions for `string` types
            - `IgxDateFilteringOperand` defines all default filtering conditions for `Date` types
        - `IgxColumnComponent` now exposes a `filters` property, which takes an `IgxFilteringOperand` class reference
            - Custom filters can now be provided to grid columns by populating the `operations` property of the `IgxFilteringOperand` with operations of `IFilteringOperation` type
```
export class IgxCustomFilteringOperand extends IgxFilteringOperand {
    // Making the implementation singleton
    private static _instance: IgxCustomFilteringOperand = null;

    protected constructor() {
        super();
        this.operations = [{
            name: 'custom',
            logic: (target: string) => {
                return target === 'My custom filter';
            }
        }].concat(this.operations); // Keep the empty and notEmpty conditions from base
    }

    // singleton
    // Must implement this method, because the IgxColumnComponent expects it
    public static instance(): IgxCustomFilteringOperand {
        return this._instance || (this._instance = new this());
    }
}
```

- `igxGrid` now supports grouping of columns enabling users to create criteria for organizing data records. To explore the functionality start off by setting some columns as `groupable`:
    ```html
    <igx-grid [data]="data">
        <igx-column [field]="'ProductName'"></igx-column>
        <igx-column [field]="'ReleaseDate'" [groupable]="true"></igx-column>
    </igx-grid>
    ```
   For more information, please head over to `igxGrid`'s [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/grid/README.md) or the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_groupby.html).

- `igxGrid` now supports multi-column headers allowing you to have multiple levels of columns in the header area of the grid.
    For more information, head over to [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_multi_column_headers.html)
- `igxGrid` theme now has support for alternating grid row background and text colors.
- `igxGrid` now has a toolbar (shown using the `showToolbar` property) which contains the following features:
  - title (specified using the `toolbarTitle` property)
  - column hiding feature (enabled using the `columnHiding` property)
  - column pinning feature (enabled using the `columnPinning` property)
  - export to excel (enabled using the `exportExcel` property)
  - export to CSV (enabled using the `exportCsv` property)
- `igxColumn` changes:
    - **Breaking change** filteringExpressions property is removed.
- `igxGrid` API is updated
    - **Breaking change** deleteRow(rowSelector: any) method will delete the specified row only if the primary key is defined. The method accept rowSelector as a parameter,  which is the rowID.
    - **Breaking change** updateRow(value: any, rowSelector: any) method will update the specified row only if the primary key is defined. The method accept value and rowSelector as a parameter, which is the rowID.
    - **Breaking change** updateCell(value: any, rowSelector: any, column: string) method will update the specified cell only if the primary key is defined. The method accept  value, rowSelector,which is the rowID and column name.
    - getCellByKey(rowSelector: any, columnField: string) method is added to grid's API. This method retuns a cell or undefined only if primary key is defined and search for the specified cell by the rowID and column name.
    - getCellByColumn(rowIndex: number, columnField: string) method is updated. This method returns a cell or undefined by using rowIndex and column name.
- `IgxGridRow` API is updated:
    - update(value: any) method is added. The method takes as a parameter the new value, which is to be set to the specidied row.
    - delete() method is added. The method removes the specified row from the grid's data source.

- `igxCell` default editing template is changed according column data type. For more information you can read the [specification](https://github.com/IgniteUI/igniteui-angular/wiki/Cell-Editing) or the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_editing.html)
- `igxCombo` component added

    ```html
    <igx-combo #combo [data]="towns" [displayKey]="'townName'" [valueKey]="'postCode'" [groupKey]="'province'"
        [allowCustomValues]="true" placeholder="Town(s)" searchPlaceholder="Search town..."></igx-combo>
    ```

    igxCombo features:

        - Data Binding
        - Value Binding
        - Virtualized list
        - Multiple Selection
        - Filtering
        - Grouping
        - Custom values
        - Templates
        - Integration with Template Driven and Reactive Forms
        - Keyboard Navigation
        - Accessibility compliance

    For more detailed information see the [official igxCombo documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/combo.html).
- `igxDropdown` component added

    ```html
    <igx-drop-down (onSelection)="onSelection($event)" (onOpening)="onOpening($event)">
        <igx-drop-down-item *ngFor="let item of items" disabled={{item.disabled}} isHeader={{item.header}}>
                {{ item.field }}
        </igx-drop-down-item>
    </igx-drop-down>
    ```

    **igxDropDown** displays a scrollable list of items which may be visually grouped and supports selection of a single item. Clicking or tapping an item selects it and closes the Drop Down.

    A walkthrough of how to get started can be found [here](https://www.infragistics.com/products/ignite-ui-angular/angular/components/drop_down.html)

    igxDropdown features:

        - Single Selection
        - Grouping
        - Keyboard Navigation
        - Accessibility compliance

- `igxChip` and `igxChipsArea` components added

    ```html
    <igx-chips-area>
        <igx-chip *ngFor="let chip of chipList" [id]="chip.id">
            <label igxLabel>{{chip.text}}</label>
        </igx-chip>
    </igx-chips-area>
    ```

    For more detailed information see the [official igxChip documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/chip.html).

- `igxToggle` changes
    - `onOpening` event added.
    - `onClosing` event added.
- `igxToggleAction` new `overlaySettings` input controls how applicable targets display content. Provides defaults with positioning based on the host element. The `closeOnOutsideClick` input is deprecated in favor of the new settings and will be removed in the future.

- `igxList` now supports a 'loading' template which is shown when the list is empty and its new `isLoading` property is set to `true`. You can redefine the default loading template by adding an `ng-template` with the `igxDataLoading` directive:

    ```html
    <igx-list [isLoading]="true">
        <ng-template igxDataLoading>
            <p>Please wait, data is loading...</p>
        </ng-template>
    </igx-list>
    ```

- **Breaking changes**:
    - Removed submodule imports. All imports are now resolved from the top level `igniteui-angular` package.
    - `igxGrid` changes:
        - sort API now accepts params of type `ISortingExpression` or `Array<ISortingExpression>`.
    - `igxToggle` changes
        - `collapsed` now read-only, markup input is removed.
        - `onOpen` event renamed to `onOpened`.
        - `onClose` event renamed to `onClosed`.
        - `open` method does not accept fireEvents optional boolean parameter. Now it accepts only overlaySettings optional parameter of type `OverlaySettings`.
        - `close` method does not accept fireEvents optional boolean parameter.
        - `toggle` method does not accept fireEvents optional boolean parameter. Now it accepts only overlaySettings optional parameter of type `OverlaySettings`.
    - `igxDialog` changes
        - `open` method does not accept fireEvents boolean parameter. Now it accepts only overlaySettings optional parameter of type `OverlaySettings`.
- **Breaking change** All properties that were named `isDisabled` have been renamed to `disabled` in order to acheive consistency across our component suite. This affects: date-picker, input directive, input-group, dropdown-item, tabbar and time-picker.
- The **deprecated** `igxForRemote` input for the `igxFor` directive is now removed. Setting the required `totalItemCount` property after receiving the first data chunk is enough to trigger the required functionality.

## 6.0.4
- **igxRadioGroup** directive introduced. It allows better control over its child `igxRadio` components and support template-driven and reactive forms.
- Fixed ReactiveForms validations support for IgxInputGroup. Related [issue](https://github.com/IgniteUI/igniteui-angular/issues/1144).

## 6.0.3
- **igxGrid** exposing the `filteredSortedData` method publicly - returns the grid data with current filtering and sorting applied.

## 6.0.2
- **igxGrid** Improve scrolling on mac [#1563](https://github.com/IgniteUI/igniteui-angular/pull/1563)
- The `ng update igniteui-angular` migration schematics now also update the theme import path in SASS files. [#1582](https://github.com/IgniteUI/igniteui-angular/issues/1582)

## 6.0.1
- Introduced migration schematics to integrate with the Angular CLI update command. You can now run

  `ng update igniteui-angular`

  in existing projects to both update the package and apply any migrations needed to your project. Make sure to commit project state before proceeding.
  Currently these cover converting submodule imports as well as the deprecation of `igxForRemote` and rename of `igx-tab-bar` to `igx-bottom-nav` from 6.0.0.
- **Breaking changes**:
    - Removed submodule imports. All imports are now resolved from the top level `igniteui-angular` package. You can use `ng update igniteui-angular` when updating to automatically convert existing submodule imports in the project.
    - Summary functions for each IgxSummaryOperand class has been made `static`. So now you can use them in the following way:
    ```typescript
    import { IgxNumberSummaryOperand, IgxSummaryOperand } from "igniteui-angular";
    class CustomSummary extends IgxSummaryOperand {
    constructor() {
      super();
    }
    public operate(data?: any[]) {
      const result = super.operate(data);
      result.push({
        key: "Min",
        label: "Min",
        summaryResult: IgxNumberSummaryOperand.min(data)
      });
      return result;
    }
  }
    ```


## 6.0.0
- Theming - You can now use css variables to style the component instances you include in your project.
- Added `onDoubleClick` output to `igxGrid` to emit the double clicked cell.
- Added `findNext`, `findPrev` and `clearSearch` methods to the IgxGridComponent which allow easy search of the grid data, even when the grid is virtualized.
- Added `IgxTextHighlightDirective` which highlights parts of a DOM element and keeps and updates "active" highlight.
- Added `All` option to the filter UI select for boolean columns
- Update to Angular 6

## 5.3.1
- igx-dialog changes
    - Dialog title as well as dialog actions (buttons) can be customized. For more information navigate to the [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/dialog/README.md).
- Filtering a boolean column by `false` condition will return only the real `false` values, excluding `null` and `undefined`. Filtering by `Null` will return the `null` values and filtering by `Empty` will return the `undefined`.
- The `Filter` button in the filtering UI is replaced with a `Close` button that is always active and closes the UI.
- Filtering UI input displays a `X` icon that clears the input.

## 5.3.0
- Added `rowSelectable` property to `igxGrid`
    - Setting `rowSelectable` to `true` enables multiple row selection for the `igx-grid` component. Adds a checkbox column that allows (de)selection of one, multiple or all (via header checkbox) rows.
    - For more information about the `rowSelectable` property and working with grid row, please read the `igxGrid`'s [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/grid/README.md) about selection or see the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid-selection.html)
- Added `onContextMenu` output to `igxGrid` to emit the clicked cell.
- `igx-datePicker`: Added `onClose` event.
- `igxTextSelection` directive added
    - `igxTextSelection` directive allows you to select the whole text range for every element with text content it is applied.
- `igxFocus` directive added
    - `igxFocus` directive allows you to force focus for every element it is applied.
- `igx-time-picker` component added
    - `igx-time-picker` allows user to select time, from a dialog with spinners, which is presented into input field.
    - For more information navigate to the [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/time-piker/README.md).
- `igx-tab-bar` changes
    - **Breaking changes**: `IgxTabBarComponent` is renamed to `IgxBottomNavComponent` and `IgxTabBarModule` is renamed to `IgxBottomNavModule`.
    - `igx-tab-bar` selector is deprecated. Use `igx-bottom-nav` selector instead.
- `igx-tabs` component added
    - `igx-tabs` allows users to switch between different views. The `igx-tabs` component places the tabs headers at the top and allows scrolling when there are multiple tab items outside the visible area. Tabs are ordered in a single row above their associated content.
    - For more information navigate to [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/tabs/README.md).
- Added column pinning in the list of features available for `igxGrid`. Pinning is available though the API. Try the following:
   ```typescript
   const column = this.grid.getColumnByName(name);
   column.pin();
   ```
   For more information, please head over to `igxGrid`'s [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/grid/README.md) or the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_column_pinning.html).
- Added `summaries` feature to `igxGrid`, enabled on a per-column level. **Grid summaries** gives you a predefined set of default summaries, depending on the type of data in the column.
    For more detailed information read `igxGrid`'s [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/grid/README.md) or see the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_summaries.html).
- Added `columnWidth` option to `igxGrid`. The option sets the default width that will be applied to columns that have no explicit width set. For more detailed information read `igxGrid`'s [ReadMe](https://github.com/IgniteUI/igniteui-angular/blob/master/src/grid/README.md)
- Added API to `igxGrid` that allows for vertical remote virtualization. For guidance on how to implement such in your application, please refer to the [official documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid_virtualization.html)
- Added smooth scrolling for the `igxForOf` directive making the scrolling experience both vertically and horizontally much more natural and similar to a native scroll.
- Added `onCellClick` event.
- `igxForOf` now requires that its parent container's `overflow` is set to `hidden` and `position` to `relative`. It is recommended that its height is set as well so that the display container of the virtualized content can be positioned with an offset inside without visually affecting other elements on the page.
    ```html
    <div style='position: relative; height: 500px; overflow: hidden'>
        <ng-template igxFor let-item [igxForOf]="data" #virtDirVertical
                [igxForScrollOrientation]="'vertical'"
                [igxForContainerSize]='"500px"'
                [igxForItemSize]='"50px"'
                let-rowIndex="index">
                <div style='height:50px;'>{{rowIndex}} : {{item.text}}</div>
        </ng-template>
    </div>
    ```
- Removed the `dirty` local template variable previously exposed by the `igxFor` directive.
- The `igxForRemote` input for the `igxFor` directive is now **deprecated**. Setting the required `totalItemCount` property after receiving the first data chunk is enough to trigger the required functionality.
- the `igx-icon` component can now work with both glyph and ligature-based icon font sets. We've also included a brand new Icon Service, which helps you create aliases for the icon fonts you've included in your project. The service also allows you to define the default icon set used throughout your app.
- Added the option to conditionally disable the `igx-ripple` directive through the `igxRippleDisabled` property.
- Updated styling and interaction animations of the `igx-checkbox`, `igx-switch`, and `igx-radio` components.
- Added `indeterminate` property and styling to the `igx-checkbox` component.
- Added `required` property to the `igx-checkbox`, `igx-radio`, and `igx-switch` components.
- Added `igx-ripple` effect to the `igx-checkbox`, `igx-switch`, and `igx-radio` components. The effect can be disabled through the `disableRipple` property.
- Added the ability to specify the label location in the `igx-checkbox`, `igx-switch`, and `igx-radio` components through the `labelPosition` property. It can either be `before` or `after`.
- You can now use any element as label on the `igx-checkbox`, `igx-switch`, and `igx-radio` components via the aria-labelledby property.
- You can now have invisible label on the `igx-checkbox`, `igx-switch`, and `igx-radio` components via the aria-label property.
- Added the ability to toggle the `igx-checkbox` and `igx-switch` checked state programmatically via `toggle` method on the component instance.
- Added the ability to select an `igx-radio` programmatically via `select` method on the component instance.
- Fixed a bug on the `igx-checkbox` and `igx-radio` components where the click event was being triggered twice on click.
- Fixed a bug where the `igx-checkbox`, `igx-switch`, and `igx-radio` change event was not being triggered on label click.
- `igxМask` directive added
    - `igxМask` provide means for controlling user input and formatting the visible value based on a configurable mask rules. For more detailed information see [`igxMask README file`](https://github.com/IgniteUI/igniteui-angular/blob/master/src/directives/mask/README.md)
- `igxInputGroup` component added - used as a container for the `igxLabel`, `igxInput`, `igxPrefix`, `igxSuffix` and `igxHint` directives.
- `igxPrefix` directive added - used for input prefixes.
- `igxSuffix` directive added - used for input suffixes.
- `igxHint` directive added - used for input hints.
- `igxInput` directive breaking changes:
    - the directive should be wrapped by `igxInputGroup` component
    - `IgxInputGroupModule` should be imported instead of `IgxInputModule`
- `igxExcelExportService` and `igxCSVExportService` added. They add export capabilities to the `igxGrid`. For more information, please visit the [igxExcelExportService specification](https://github.com/IgniteUI/igniteui-angular/wiki/IgxExcelExporterService-Specification) and the [igxCSVExportService specification](https://github.com/IgniteUI/igniteui-angular/wiki/CSV-Exporter-Service-Specification).
- **General**
    - Added event argument types to all `EventEmitter` `@Output`s. #798 #740
    - Reviewed and added missing argument types to the following `EventEmitter`s
        - The `igxGrid` `onEditDone` now exposes arguments of type `IGridEditEventArgs`. The arguments expose `row` and `cell` objects where if the editing is performed on a cell, the edited `cell` and the `row` the cell belongs to are exposed. If row editing is performed, the `cell` object is null. In addition the `currentValue` and `newValue` arguments are exposed. If you assign a value to the `newValue` in your handler, then the editing will conclude with the value you've supplied.
        - The `igxGrid` `onSelection` now correctly propagates the original `event` in the `IGridCellEventArgs`.
    - Added `jsZip` as a Peer Dependency.
- `primaryKey` attribute added to `igxGrid`
    - `primaryKey` allows for a property name from the data source to be specified. If specified, `primaryKey` can be used instead of `index` to indentify grid rows from the `igxGrid.rowList`. As such, `primaryKey` can be used for selecting rows for the following `igxGrid` methods - `deleteRow`, `updateRow`, `updateCell`, `getCellByColumn`, `getRowByKey`
    - `primaryKey` requires all of the data for the specified property name to have unique values in order to function as expected.
    - as it provides a unique identifier for each data member (and therefore row), `primaryKey` is best suited for addressing grid row entries. If DOM virtualization is in place for the grid data, the row `index` property can be reused (for instance, when filtering/sorting the data), whereas `primaryKey` remains unique. Ideally, when a persistent reference to a row has to be established, `primaryKey` should be used.
- **Theming**
    - Added a `utilities` module to the theming engine to allow for easier import of theming functions and mixins, such as igx-color, igx-palette, igx-elevation, etc. To import the utilities do ```@import '~igniteui-angular/core/styles/themes/utilities';```

## 5.2.1
- `hammerjs` and `@types/hammerjs` are removed from `peerDependencies` and were added as `dependencies`. So if you are using Igniteui-Angular version 5.2.1 or above it is enough to run `npm install igniteui-angular` in your project for getting started. For more detailed information see [`Ignite UI for Angular Getting Started`](https://www.infragistics.com/products/ignite-ui-angular/getting-started)
- `web-animations-js` is added as Peer Dependency.
- `Theming` bug fixes and improvements.
- Use the following command to generate `Ignite UI for Angular Themes` documentation - `npm run build:docs`. Navigate to `dist/docs/sass` and open `index.html` file.

## 5.2.0
- `igxForOf` directive added
    - `igxForOf` is now available as an alternative to `ngForOf` for templating large amounts of data. The `igxForOf` uses virtualization technology behind the scenes to optimize DOM rendering and memory consumption. Virtualization technology works similar to Paging by slicing the data into smaller chucks which are swapped from a container viewport while the user scrolls the data horizontally/vertically. The difference with the Paging is that virtualization mimics the natural behavior of the scrollbar.
- `igxToggle` and `igxToggleAction` directives added
    - `igxToggle` allows users to implement toggleable components/views (eg. dropdowns), while `igxToggleAction` can control the
      `igxToggle` directive. Refer to the official documentation for more information.
    - `igxToggle` requires `BrowserAnimationsModule` to be imported in your application.
- [`Ignite UI for Angular Theming`](https://www.infragistics.com/products/ignite-ui-angular/angular/components/themes.html) - comprehensive set of **Sass** functions and mixins will give the ability to easily style your entire application or only certain parts of it.
    - Previously bundled fonts, are now listed as external dependencies. You should supply both the [Material Icons](http://google.github.io/material-design-icons/) and [Titillium Web](https://fonts.google.com/selection?selection.family=Titillium+Web:300,400,600,700) fonts yourself by either hosting or using CDN.
- `igx-grid` changes
    - The component now uses the new `igxForOf` directive to virtualize its content both vertically and horizontally dramatically improving performance for applications displaying large amounts of data.
    - Data-bound Input property `filtering` changed to `filterable`:

    ```html
    <igx-grid [data]="data">
        <igx-column [field]="'ReleaseDate'" [header]="'ReleaseDate'"
            [filterable]="true" dataType="date">
        </igx-column>
    </igx-grid>
    ```

    - @HostBinding `min-width` added to `IgxGridCellComponent` and `IgxGridHeaderCell`
    - The IgxGridCellComponent no longer has a value setter, but instead has an `update` modifier.

    ```html
    <ng-template igxCell let-cell="cell">
        {{ cell.update("newValue") }}
    </ng-template>
    ```
    - Class `IgxGridFiltering` renamed to `IgxGridFilteringComponent `
    - The grid filtering UI dropdowns are now controlled by the `igxToggle` directive.
      - Make sure to import `BrowserAnimationsModule` inside your application module as `igxToggle` uses animations for state transition.
    - `state` input
        - filtering expressions and sorting expressions provided
    - Removed `onCellSelection` and `onRowSelection` event emitters, `onSelection` added instead.
    - Removed `onBeforeProcess` event emitter.
    - Removed `onMovingDone` event emitter.
    - Removed methods `focusCell` and `focusRow`.
    - Renamed method `filterData` to `filter`.
    - New methods `filterGlobal` and `clearFilter`.
    - New method `clearSort`.
    - Renamed method `sortColumn` to `sort`.
    - New Input `sortingIgnoreCase` - Ignore capitalization of words.
- `igx-navigation-drawer` changes
    - `NavigationDrawer` renamed to `IgxNavigationDrawerComponent`
    - `NavigationDrawerModule` renamed to `IgxNavigationDrawerModule`
    - `IgxNavigationDirectives` renamed to `IgxNavigationModule`
    - `NavigationService` renamed to `IgxNavigationService`
    - `NavigationToggle` renamed to `IgxNavigationToggleDirective`
    - `NavigationClose` renamed to `IgxNavigationCloseDirective`
    - Content selector `ig-drawer-content` replaced with `<ng-template igxDrawer>`
    - Content selector `ig-drawer-mini-content` replaced with `<ng-template igxDrawerMini>`
    - CSS class `ig-nav-drawer-overlay` renamed to `igx-nav-drawer__overlay`
    - CSS class `ig-nav-drawer` renamed to `igx-nav-drawer`
- `igxInput` changes
    - CSS class `ig-form-group` to `igx-form-group`
- `igxBadge` changes
    - From now on, the Badge position is set by css class, which specifies an absolute position as well as top/bottom/left/right properties. The Badge position input should not be used.
- `igx-avatar` changes
    - [Initials type avatar is using SVG element from now on](https://github.com/IgniteUI/igniteui-angular/issues/136)
- `igx-calendar` changes
    - `formatViews` - Controls whether the date parts in the different calendar views should be formatted according to the provided `locale` and `formatOptions`.
    - `templating` - The **igxCalendar** supports now templating of its header and subheader parts.
    - `vertical` input - Controls the layout of the calendar component. When vertical is set to `true` the calendar header will be rendered to the side of the calendar body.

- `igx-nav-bar` changes
    -   Currently `isActionButtonVisible` resolves to `false` if actionButtonIcon is not defined.
- `igx-tab-bar` changes
    - custom content can be added for tabs

    ```html
    <igx-bottom-nav>
        <igx-tab-panel>
            <ng-template igxTab>
                <igx-avatar initials="T1">
                </igx-avatar>
            </ng-template>
            <h1>Tab 1 Content</h1>
        </igx-tab-panel>
    </igx-bottom-nav>
    ```

- `igx-scroll` component deleted
    - `igx-scroll` component is not available anymore due newly implemented `igxForOf` directive.

- [`igx-list` changes](https://github.com/IgniteUI/igniteui-angular/issues/528)
    - `igxEmptyList` directive added
        The list no longer has `emptyListImage`, `emptyListMessage`, `emptyListButtonText`, `emptyListButtonClick` and `hasNoItemsTemplate` members.
        Instead of them, the `igxEmptyListTemplateDirective` can be used for templating the list when it is empty (or use the default empty template).
        ```html
        <igx-list>
            <ng-template igxEmptyList>
                <p>My custom empty list template</p>
            </ng-template>
        </igx-list>
        ```
    - `onItemClicked` event emitter added
        ```html
        <igx-list (onItemClicked)="itemClicked()">
            <igx-list-item>Item 1</igx-list-item>
            <igx-list-item>Item 2</igx-list-item>
            <igx-list-item>Item 3</igx-list-item>
        </igx-list>
        ```
    - Removed `emptyListImage` property from `IgxListComponent`.
    - Removed `emptyListMessage` property from `IgxListComponent`.
    - Removed `emptyListButtonText` property from `IgxListComponent`.
    - Removed `emptyListButtonClick` event emitter from `IgxListComponent`.
    - Removed `hasNoItemsTemplate` property from `IgxListComponent`.
    - Removed `options` property from `IgxListItemComponent`.
    - Removed `left` property from `IgxListItemComponent`.
    - Removed `href` property from `IgxListItemComponent`.
    - New `emptyListTemplate` input for `IgxListComponent`.
    - New `onItemClicked` event emitter for `IgxListComponent`.
    - New `role` property for `IgxListComponent`.
    - New `innerStyle` property for `IgxListComponent`.
    - New `role` property for `IgxListItemComponent`.
    - New `element` property for `IgxListItemComponent`.
    - New `list` property for `IgxListItemComponent`.
    - New `headerStyle` property for `IgxListItemComponent`.
    - New `innerStyle` property for `IgxListItemComponent`.

- [Renaming and restructuring directives and components](https://github.com/IgniteUI/igniteui-angular/issues/536) based on the [General Angular Naming Guidelines](https://angular.io/guide/styleguide#naming):
    - `IgxAvatar` renamed to `IgxAvatarComponent`
    - `IgxBadge` renamed to `IgxBadgeComponent`
    - `IgxButton` renamed to `IgxButtonDirective`
    - `IgxButtonGroup` renamed to `IgxButtonGroupComponent`
    - `IgxCardHeader` renamed to `IgxCardHeaderDirective`
    - `IgxCardContent` renamed to `IgxCardContentDirective`
    - `IgxCardActions` renamed to `IgxCardActionsDirective`
    - `IgxCardFooter` renamed to `IgxCardFooterDirective`
    - `IgxCarousel` renamed to `IgxCarouselComponent`
    - `IgxInput` renamed to `IgxInputModule`
    - `IgxInputClass` renamed to `IgxInputDirective`
    - `IgxCheckbox` renamed to `IgxCheckboxComponent`
    - `IgxLabel` renamed to `IgxLabelDirective`
    - `IgxIcon` renamed to `IgxIconComponent`
    - `IgxList` renamed to `IgxListComponent`
    - `IgxListItem` renamed to `IgxListItemComponent`
    - `IgxSlide` renamed to `IgxSlideComponent`
    - `IgxDialog` renamed to `IgxDialogComponent`
    - `IgxLayout` renamed to `IgxLayoutModule`
    - `IgxNavbar` renamed to `IgxNavbarComponent`
    - `IgxCircularProgressBar` renamed to `IgxCircularProgressBarComponent`
    - `IgxLinearProgressBar ` renamed to `IgxLinearProgressBarComponent`
    - `IgxRadio` renamed to `IgxRadioComponent`
    - `IgxSlider` renamed to `IgxSliderComponent`
    - `IgxSnackbar` renamed to `IgxSnackbarComponent`
    - `IgxSwitch ` renamed to `IgxSwitchComponent`
    - `IgxTabBar` renamed to `IgxBottomNavComponent`
    - `IgxTabPanel` renamed to `IgxTabPanelComponent`
    - `IgxTab` renamed to `IgxTabComponent`
    - `IgxToast` renamed to `IgxToastComponent`
    - `IgxLabelDirective` moved inside `../directives/label/` folder
    - `IgxInputDirective` moved inside `../directives/input/` folder
    - `IgxButtonDirective` moved inside `../directives/button/` folder
    - `IgxLayoutDirective` moved inside `../directives/layout/` folder
    - `IgxFilterDirective` moved inside `../directives/filter/` folder
    - `IgxDraggableDirective` moved inside `../directives/dragdrop/` folder
    - `IgxRippleDirective` moved inside `../directives/ripple/` folder
    - Folder `"./navigation/nav-service"` renamed to `"./navigation/nav.service"`

