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
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
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