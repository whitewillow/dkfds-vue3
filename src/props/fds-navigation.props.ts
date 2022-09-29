import { FdsNavigationItem } from '@/model/fds.model';

/**
 * Comon props for Navigation
 */
const fdsNavigationProps = {
  modelValue: {
    type: Array as () => Array<FdsNavigationItem>,
    required: true,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  navigateFirst: {
    type: Boolean,
    default: false,
  },
};
export default fdsNavigationProps;