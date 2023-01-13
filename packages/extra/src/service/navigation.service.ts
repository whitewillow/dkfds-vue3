import { FdsNavigationItem } from 'dkfds-vue3-utils';

class NavigationService {
  getParent = (key: string, list: Array<FdsNavigationItem>): FdsNavigationItem | undefined => {
    return list.find((f) => f.children?.some((s) => s.key === key));
  };

  /**
   * gets key eg: "y/z", find parent "x" and add it to key e.g. "x/y/z"
   * @param key
   * @param list
   * @returns "x/y/z"
   */
  resolveKey = (key: string, list: Array<FdsNavigationItem>) => {
    const [firstKey] = key.split('/');

    const parent = this.getParent(firstKey, list);
    return parent ? `${parent.key}/${key}` : key;
  };

  /**
   * If key x/y/z splits and finds the last key = active key
   * @param e.g: "x/y/z"
   * @param list
   * @returns z
   */
  resolveActiveKey = (key: string) => {
    const [firstKey] = key.split('/').reverse();
    return firstKey;
  };

  /**
   * Clears active chilred recursively
   * @param children
   * @returns
   */
  clearChildren = (
    children: Array<FdsNavigationItem> | undefined,
  ): Array<FdsNavigationItem> | undefined => {
    if (!children) {
      return children;
    }

    return children.map((m) => ({ ...m, active: false, children: this.clearChildren(m.children) }));
  };

  /**
   * Set item active
   * @param list
   * @param activeItem
   * @returns
   */
  setActive = (list: Array<FdsNavigationItem>, key: string): Array<FdsNavigationItem> => {
    return list.map((f) => ({
      ...f,
      active: f.key === key,
      children: this.clearChildren(f.children),
    }));
  };

  /**
   * Finds first active item, if none - then if navigateFirst - the first item thats not disabled
   * @param list
   * @param navigateFirst
   * @returns
   */
  findFirstActiveItem = (
    list: Array<FdsNavigationItem>,
    navigateFirst = false,
  ): FdsNavigationItem | undefined => {
    const firstActive = list.find((f) => !f.disabled && f.active);
    if (firstActive) {
      return firstActive;
    }
    if (navigateFirst) {
      return list.find((f) => !f.disabled);
    }
    return undefined;
  };
}
const navigationService = new NavigationService();
export default navigationService;
