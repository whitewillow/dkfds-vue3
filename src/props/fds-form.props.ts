/**
 * Comon props for FDS Textarea
 */
const xfdsFormGroupProps = {
  validations: {
    type: Array as () => Array<(x?: unknown) => string | null>,
    default: null,
  },
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