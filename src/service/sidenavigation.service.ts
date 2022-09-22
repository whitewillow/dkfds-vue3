import { FdsNavigationItem } from '@/model/fds.model';

class SidenavigationService {
  getParent = (key: string, list: Array<FdsNavigationItem>): FdsNavigationItem | undefined => {
    return list.find((f) => f.children?.some((s) => s.key === key));
  };

  resolveKey = (key: string, list: Array<FdsNavigationItem>) => {
    const [firstKey] = key.split('/');

    const parent = this.getParent(firstKey, list);
    return parent ? `${parent.key}/${key}` : key;
  };

  clearChildren = (
    children: Array<FdsNavigationItem> | undefined,
  ): Array<FdsNavigationItem> | undefined => {
    if (!children) {
      return children;
    }

    return children.map((m) => ({ ...m, active: false, children: this.clearChildren(m.children) }));
  };

  setActive = (list: Array<FdsNavigationItem>, activeItem: FdsNavigationItem) => {
    return list.map((f) => ({
      ...f,
      active: f.key === activeItem.key,
      children: this.clearChildren(f.children),
    }));
  };

  findFirstActiveItem = (list: Array<FdsNavigationItem>) => {
    const firstActive = list.find((f) => !f.disabled && f.active);
    return firstActive ?? list.find((f) => !f.disabled);
  };
}
const sidenavigationService = new SidenavigationService();
export default sidenavigationService;