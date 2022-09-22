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
}
const sidenavigationService = new SidenavigationService();
export default sidenavigationService;