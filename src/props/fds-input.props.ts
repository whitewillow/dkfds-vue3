/**
 * Comon props for FDS Textarea
 */
const fdsInputProps = {
  id: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: '',
  },
  inputType: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'text',
  },
  inputClass: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
};
export default fdsInputProps;