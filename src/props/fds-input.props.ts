/**
 * Comon props for FDS Textarea
 */
const fdsInputProps = {
  modelValue: {
    type: String,
    default: '',
  },
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