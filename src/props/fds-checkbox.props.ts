import { PropType } from 'vue';
import { FdsCheckboxItem } from '@/model/fds.model';

/**
 * Comon props for FDS CheckboxList
 */
const fdsCheckboxProps = {
  modelValue: {
    // eslint-disable-next-line no-undef
    type: Array as PropType<Array<FdsCheckboxItem>>,
    required: true,
    default: () => [],
  },
};
export default fdsCheckboxProps;