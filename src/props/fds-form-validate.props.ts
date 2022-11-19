/**
 * Comon props for Extra FDS Form Validate
 */
const xfdsFormValidateProps = {
  validations: {
    type: Array as () => Array<(x?: unknown) => string | null>,
    default: null,
  },
};
export default xfdsFormValidateProps;