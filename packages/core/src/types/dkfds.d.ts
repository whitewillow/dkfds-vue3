/**
 * Type Definitions for DKFDS
 * Lavet med https://github.com/microsoft/dts-gen
 *
 * Eks på Gen:
 *
 * git clone https://github.com/microsoft/dts-gen.git
 * cd dts-gen
 * npm install dkfds
 * npx serve docs
 * Indtast DKFDS i tekstfelt
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint max-classes-per-file: 'off' */
declare module 'dkfds' {
  class Accordion {
    constructor($accordion: any);

    bulkEvent(): void;

    eventOnClick($button: any, e: any): void;

    init(): void;

    toggleButton(button: any, expanded: any, ...args: any[]): void;
  }
  class Alert {
    constructor(alert: any);

    hide(): void;

    init(): void;

    show(): void;
  }
  class BackToTop {
    constructor(backtotop: any);

    init(): void;
  }
  class CharacterLimit {
    constructor(containerElement: any);

    charactersLeft(): any;

    handleBlur(e: any): void;

    handleFocus(e: any): void;

    handleKeyUp(e: any): void;

    init(): void;

    resetScreenReaderMessage(): void;

    updateMessages(e: any): void;

    updateScreenReaderMessage(): void;

    updateVisibleMessage(): void;
  }
  class CheckboxToggleContent {
    constructor(checkboxElement: any);

    collapse(triggerEl: any, targetEl: any): void;

    expand(checkboxElement: any, contentElement: any): void;

    init(): void;

    toggle(): void;
  }
  class Dropdown {
    constructor(buttonElement: any);

    hide(): void;

    init(): void;

    show(): void;
  }
  class DropdownSort {
    constructor(container: any);

    init(): void;

    onOptionClick(e: any): void;

    updateSelectedValue(): void;
  }
  class ErrorSummary {
    constructor(element: any);

    focusTarget($target: any): any;

    getAssociatedLegendOrLabel($input: any): any;

    getFragmentFromUrl(url: any): any;

    handleClick(event: any): void;

    init(): void;
  }
  class Modal {
    constructor($modal: any);

    hide(): void;

    init(): void;

    show(...args: any[]): void;
  }
  class Navigation {
    constructor();

    init(): void;

    teardown(): void;
  }
  class RadioToggleGroup {
    constructor(containerElement: any);

    collapse(radioInputElement: any, contentElement: any): void;

    expand(radioInputElement: any, contentElement: any): void;

    init(): void;

    toggle(radioInputElement: any): void;
  }
  class TableSelectableRows {
    constructor(table: any, ...args: any[]);

    getCheckboxList(): any;

    getGroupCheckbox(): any;

    init(): void;
  }
  class Tabnav {
    constructor(tabnav: any);

    activateTab(tab: any, setFocus: any): void;

    init(): void;
  }
  class Toast {
    constructor(element: any);

    hide(): void;

    show(): void;
  }
  class Tooltip {
    constructor(element: any);

    init(): void;
  }
  function InputRegexMask(element: any): void;
  function ResponsiveTable(table: any): void;
  function init(options?: any): void;
  namespace datePicker {
    function add(element: any): void;
    function disable(el: any): void;
    function enable(el: any): void;
    function getDatePickerContext(el: any): any;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    function init(root: any): void;
    function isDateInputInvalid(el: any): any;
    function off(...args: any[]): void;
    function on(...args: any[]): void;
    function remove(element: any): void;
    function renderCalendar(el: any, _dateToDisplay: any): any;
    function setCalendarValue(el: any, dateString: any): void;
    function updateCalendarIfVisible(el: any): void;
    function validateDateInput(el: any): void;
  }
}
