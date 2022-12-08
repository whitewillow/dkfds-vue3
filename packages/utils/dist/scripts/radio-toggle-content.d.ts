export default class DKFDSToggle {
    TOGGLE_ATTRIBUTE: string;
    radioGroup: HTMLElement;
    radioEls: Array<HTMLInputElement>;
    /**
     * Adds click functionality to radiobutton collapse list
     * @param {HTMLElement} containerElement
     */
    constructor(containerElement: HTMLElement | null);
    /**
     * Set events
     */
    init(): void;
    /**
     * Toggle radiobutton content
     * @param {HTMLInputElement} radioInputElement
     */
    toggle(radioInputElement: HTMLInputElement): void;
    /**
     * Expand radio button content
     * @param {} radioInputElement Radio Input element
     * @param {*} contentElement Content element
     */
    expand(radioInputElement: HTMLInputElement, contentElement: HTMLElement): void;
    /**
     * Collapse radio button content
     * @param {} radioInputElement Radio Input element
     * @param {*} contentElement Content element
     */
    collapse(radioInputElement: HTMLInputElement, contentElement: HTMLElement): void;
}
