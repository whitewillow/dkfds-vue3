/**
 * Comon props for Extra FDS Form group
 */
const xfdsFormGroupProps = {
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  tooltip: {
    type: String,
    default: null,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
    type: String,
    default: null,
  },
};
export default xfdsFormGroupProps;