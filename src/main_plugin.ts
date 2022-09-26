import { App, Plugin } from 'vue';

import FdsIconCollection from '@/components/fds-icon-collection.vue';

import FdsStruktureredeListe from '@/components/fds-strukturerede-liste.vue';

import FdsAlert from '@/components/fds-alert.vue';
import FdsPre from '@/components/fds-pre.vue';

import FdsTooltip from '@/components/fds-tooltip.vue';
import FdsLabel from '@/components/fds-label.vue';
import FdsHint from '@/components/fds-hint.vue';
import FdsInput from '@/components/fds-input.vue';
import FdsInputNumber from '@/components/fds-input-number.vue';
import FdsTextarea from '@/components/fds-textarea.vue';

import FdsCheckbox from '@/components/fds-checkbox.vue';
import FdsCheckboxList from '@/components/fds-checkbox-list.vue';

import FdsToggleSwitch from '@/components/fds-toggle-switch.vue';

import FdsRadio from '@/components/fds-radio.vue';
import FdsRadioToggle from '@/components/fds-radio-toggle.vue';

import FdsDropdown from '@/components/fds-dropdown.vue';

import FdsFejlmeddelelse from '@/components/fds-fejlmeddelelse.vue';
import FdsFejlopsummering from '@/components/fds-fejlopsummering.vue';

import FdsButton from '@/components/fds-button.vue';
import FdsButtonIcon from '@/components/fds-button-icon.vue';
import FdsButtonSpinner from '@/components/fds-button-spinner.vue';

import FdsAccordion from '@/components/fds-accordion.vue';
import FdsAccordionGroup from '@/components/fds-accordion-group.vue';
import FdsAccordionItem from '@/components/fds-accordion-item.vue';

import FdsBadge from '@/components/fds-badge.vue';
import FdsCard from '@/components/fds-card.vue';

import FdsModal from '@/components/fds-modal.vue';

import FdsDatoAngivelse from '@/components/fds-dato-angivelse.vue';

import FdsFileUpload from '@/components/fds-file-upload.vue';
import FdsFileList from '@/components/fds-file-list.vue';

import FdsDetaljer from '@/components/fds-detaljer.vue';

import FdsFunktionslink from '@/components/fds-funktionslink.vue';
import FdsNavLink from '@/components/fds-nav-link.vue';
import FdsTilbageLink from '@/components/fds-tilbage-link.vue';

import FdsSidenavigation from '@/components/fds-sidenavigation.vue';
import FdsSidenavigationList from '@/components/fds-sidenavigation-list.vue';
import FdsSidenavigationSub from '@/components/fds-sidenavigation-sub.vue';

import FdsTrinindikator from '@/components/fds-trinindikator.vue';

import FdsFaneblade from '@/components/fds-faneblade.vue';
import FdsFanebladItem from '@/components/fds-faneblad-item.vue';
import FdsFanebladeList from '@/components/fds-faneblade-list.vue';

import FdsSpinner from '@/components/fds-spinner.vue';

import FdsComponentPreview from '@/components/fds-component-preview.vue';

import XFdsFormInput from '@/components/extra/xfds-form-input.vue';
import XFdsFormRadio from '@/components/extra/xfds-form-radio.vue';
import XFdsFormDropdown from '@/components/extra/xfds-form-dropdown.vue';
import XFdsFormInputNumber from '@/components/extra/xfds-form-input-number.vue';
import XFdsFormTextarea from '@/components/extra/xfds-form-textarea.vue';
import XFdsFormCheckboxList from '@/components/extra/xfds-form-checkbox-list.vue';
import XFdsValidate from '@/components/extra/xfds-validate.vue';
import XFdsFormgroup from '@/components/extra/xfds-formgroup.vue';
import XFdsProgressbar from '@/components/extra/xfds-progressbar.vue';

export * from '@/model/fds.model';
export * from '@/utils/validate-utils';
export * from '@/utils/file-utils';

function install (app: App): void {
  app.component('fds-trinindikator', FdsTrinindikator);
  app.component('fds-modal', FdsModal);
  app.component('fds-strukturerede-liste', FdsStruktureredeListe);
  app.component('fds-dato-angivelse', FdsDatoAngivelse);

  app.component('fds-alert', FdsAlert);
  app.component('fds-spinner', FdsSpinner);
  app.component('fds-faneblad-item', FdsFanebladItem);
  app.component('fds-faneblade', FdsFaneblade);
  app.component('fds-faneblade-list', FdsFanebladeList);
  app.component('fds-pre', FdsPre);
  app.component('fds-hint', FdsHint);
  app.component('fds-badge', FdsBadge);
  app.component('fds-card', FdsCard);
  app.component('fds-input', FdsInput);
  app.component('fds-input-number', FdsInputNumber);
  app.component('fds-textarea', FdsTextarea);
  app.component('fds-icon-collection', FdsIconCollection);
  app.component('fds-checkbox', FdsCheckbox);
  app.component('fds-checkbox-list', FdsCheckboxList);
  app.component('fds-radio', FdsRadio);
  app.component('fds-radio-toggle', FdsRadioToggle);
  app.component('fds-dropdown', FdsDropdown);
  app.component('fds-label', FdsLabel);
  app.component('xfds-formgroup', XFdsFormgroup);
  app.component('fds-fejlmeddelelse', FdsFejlmeddelelse);
  app.component('fds-fejlopsummering', FdsFejlopsummering);
  app.component('fds-button', FdsButton);
  app.component('fds-button-icon', FdsButtonIcon);
  app.component('fds-button-spinner', FdsButtonSpinner);
  app.component('fds-toggle-switch', FdsToggleSwitch);
  app.component('fds-accordion', FdsAccordion);
  app.component('fds-accordion-group', FdsAccordionGroup);
  app.component('fds-accordion-item', FdsAccordionItem);
  app.component('fds-file-upload', FdsFileUpload);
  app.component('fds-file-list', FdsFileList);

  app.component('fds-nav-link', FdsNavLink);
  app.component('fds-funktionslink', FdsFunktionslink);
  app.component('fds-sidenavigation-list', FdsSidenavigationList);
  app.component('fds-sidenavigation-sub', FdsSidenavigationSub);
  app.component('fds-sidenavigation', FdsSidenavigation);
  app.component('fds-tooltip', FdsTooltip);
  app.component('fds-detaljer', FdsDetaljer);
  app.component('fds-tilbage-link', FdsTilbageLink);
  app.component('fds-component-preview', FdsComponentPreview);

  app.component('xfds-validate', XFdsValidate);
  app.component('xfds-form-input', XFdsFormInput);
  app.component('xfds-form-input-number', XFdsFormInputNumber);
  app.component('xfds-form-textarea', XFdsFormTextarea);
  app.component('xfds-form-radio', XFdsFormRadio);
  app.component('xfds-form-dropdown', XFdsFormDropdown);
  app.component('xfds-form-checkbox-list', XFdsFormCheckboxList);
  app.component('xfds-progressbar', XFdsProgressbar);
}

export {
  FdsAlert,
  FdsModal,
  FdsSpinner,
  FdsComponentPreview,
  FdsTrinindikator,
  FdsTilbageLink,
  FdsDatoAngivelse,
  FdsTextarea,
  FdsInputNumber,
  FdsFanebladItem,
  FdsStruktureredeListe,
  FdsFaneblade,
  FdsFanebladeList,
  FdsSidenavigationList,
  FdsSidenavigationSub,
  FdsSidenavigation,
  FdsHint,
  FdsDetaljer,
  FdsPre,
  FdsBadge,
  FdsCard,
  FdsInput,
  FdsCheckbox,
  FdsCheckboxList,
  FdsRadio,
  FdsRadioToggle,
  FdsDropdown,
  FdsLabel,
  FdsTooltip,
  XFdsFormgroup,
  FdsFejlmeddelelse,
  FdsFejlopsummering,
  XFdsValidate,
  XFdsFormInput,
  XFdsFormInputNumber,
  XFdsFormRadio,
  XFdsFormDropdown,
  XFdsFormTextarea,
  XFdsFormCheckboxList,
  XFdsProgressbar,
  FdsButton,
  FdsButtonIcon,
  FdsIconCollection,
  FdsToggleSwitch,
  FdsButtonSpinner,
  FdsAccordion,
  FdsAccordionGroup,
  FdsAccordionItem,
  FdsFileUpload,
};
export default install as unknown as Plugin;

// https://stackoverflow.com/questions/65290358/vue3-typescript-declaration-file
// https://stackoverflow.com/questions/64155229/add-global-properties-to-vue-3-using-typescript