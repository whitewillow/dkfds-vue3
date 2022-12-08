/**
 * Add mobile menu functionality
 */
declare class Navigation {
    static selectStuff: (selector: string) => any[];
    /**
     * Check if mobile menu is active
     * @returns true if mobile menu is active and false if not active
     */
    static isActive: () => boolean;
    /**
     * Trap focus in mobile menu if active
     * @param {HTMLElement} trapContainer
     */
    static focusTrapInit(trapContainer: HTMLElement): {
        enable(): void;
        release(): void;
    };
    static toggleNav(incActive: boolean | Event): boolean;
    /**
     * Add functionality to mobile menu
     */
    mobileMenu(): void;
    /**
     * Set events
     */
    init(): void;
    /**
     * Remove events
     */
    teardown(): void;
}
export default Navigation;
