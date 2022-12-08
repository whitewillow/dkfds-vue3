import { FdsNavigationItem } from "dkfds-vue3-utils";
declare class NavigationService {
    getParent: (key: string, list: Array<FdsNavigationItem>) => FdsNavigationItem | undefined;
    /**
     * gets key eg: "y/z", find parent "x" and add it to key e.g. "x/y/z"
     * @param key
     * @param list
     * @returns "x/y/z"
     */
    resolveKey: (key: string, list: Array<FdsNavigationItem>) => string;
    /**
     * If key x/y/z splits and finds the last key = active key
     * @param e.g: "x/y/z"
     * @param list
     * @returns z
     */
    resolveActiveKey: (key: string) => string;
    /**
     * Clears active chilred recursively
     * @param children
     * @returns
     */
    clearChildren: (children: Array<FdsNavigationItem> | undefined) => Array<FdsNavigationItem> | undefined;
    /**
     * Set item active
     * @param list
     * @param activeItem
     * @returns
     */
    setActive: (list: Array<FdsNavigationItem>, key: string) => Array<FdsNavigationItem>;
    /**
     * Finds first active item, if none - then if navigateFirst - the first item thats not disabled
     * @param list
     * @param navigateFirst
     * @returns
     */
    findFirstActiveItem: (list: Array<FdsNavigationItem>, navigateFirst?: boolean) => FdsNavigationItem | undefined;
}
declare const navigationService: NavigationService;
export default navigationService;
