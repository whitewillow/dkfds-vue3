/**
 * Set tooltip on element
 * @param {HTMLElement} element Element which has tooltip
 */
export default class DKFDSDropdown {
    buttonElement: HTMLElement;
    targetEl: HTMLElement;
    responsiveListCollapseEnabled: boolean;
    static BUTTONCLASS: string;
    static jsDropdownCollapseModifier: string;
    static TARGET: string;
    constructor(newButtonElement: HTMLElement | null | undefined);
    init(): void;
    hide(): void;
    show(): void;
    closeOnEscape(event: KeyboardEvent): void;
    closeAll(event?: Event): void;
    offset(el: HTMLElement): {
        top: number;
        left: number;
    };
    toggleDropdown(event: Event, forceClose?: boolean): void;
    toggle(button: HTMLElement, forceClose?: boolean): void;
    hasParent(child: Element, parentTagName: string): boolean;
    outsideClose(evt: Event): void;
    static doResponsiveCollapse(triggerEl: Element): boolean;
    static getTringuideBreakpoint(button: Element): number;
}
