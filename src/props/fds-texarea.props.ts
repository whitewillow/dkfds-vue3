/**
 * Comon props for FDS Textarea
 */
const fdsTextareaProps = {
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  id: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 5,
  },
  rowlength: {
    type: Number,
    default: 80,
  },
  maxLength: {
    type: Number,
    default: 4000,
  },
};
export default fdsTextareaProps;