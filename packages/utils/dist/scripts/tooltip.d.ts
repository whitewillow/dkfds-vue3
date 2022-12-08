/**
 * Set tooltip on element
 * @param {HTMLElement} element Element which has tooltip
 */
export default class DKFSTooltip {
    element: HTMLElement;
    constructor(newElement: HTMLElement | undefined | null);
    init(): void;
    /**
     * Close all tooltips
     */
    closeAll(): void;
    addTooltip(trigger: HTMLElement): void;
    /**
     * Create tooltip element
     * @param {HTMLElement} element Element which the tooltip is attached
     * @param {string} pos Position of tooltip (top | bottom)
     * @returns
     */
    createTooltip(element: HTMLElement, pos: string): HTMLDivElement;
    /**
     * Positions the tooltip.
     *
     * @param {object} parent - The trigger of the tooltip.
     * @param {object} tooltip - The tooltip itself.
     * @param {string} posHorizontal - Desired horizontal position of the
     * tooltip relatively to the trigger (left/center/right)
     * @param {string} posVertical - Desired vertical position of the
     * tooltip relatively to the trigger (top/center/bottom)
     *
     */
    positionAt(parent: HTMLElement, tooltip: HTMLDivElement, pos: string): void;
    closeAllTooltips(event: Event, force?: boolean): void;
    static onTooltipHover(e: Event): void;
    static closeHoverTooltip(trigger: HTMLElement): void;
    static removeTooltip(trigger: HTMLElement): void;
}
