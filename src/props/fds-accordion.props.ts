/**
 * Comon props for FDS Accordion
 */
const accordionProps = {
  /**
   * Overskrift
   * */
  header: {
    type: String,
  },
  /**
   * Hjælpetekst
   * */
  hint: {
    type: String,
    default: '',
  },
  /**
   * Er Accordion Åben = aktiv
   * */
  active: {
    type: Boolean,
    default: false,
  },
  /**
   * Disabled
   * */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Variant - ikon der vises til højre
   * */
  variant: {
    type: String as () => string | 'success' | 'warning' | 'error',
    default: null,
  },
  /**
   * Tilhørende tekst til varianten
   * */
  variantText: {
    type: String,
    default: 'Fejl',
  },
};
export default accordionProps;