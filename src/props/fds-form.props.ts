/**
 * Comon props for FDS Textarea
 */
const fdsFormProps = {
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
};
export default fdsFormProps;