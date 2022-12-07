import { App, Plugin } from 'vue';

import FdsIconCollection from '@/components/fds-icon-collection.vue';

import FdsStruktureredeListe from '@/components/fds-strukturerede-liste.vue';

import FdsAlert from '@/components/fds-alert.vue';
import FdsPre from '@/components/fds-pre.vue';
import FdsCookiemeddelelse from '@/components/fds-cookiemeddelelse.vue';

import FdsFormgroup from '@/components/fds-formgroup.vue';
import FdsTooltip from '@/components/fds-tooltip.vue';
import FdsLabel from '@/components/fds-label.vue';
import FdsInputLimit from '@/components/fds-input-limit.vue';
import FdsHint from '@/components/fds-hint.vue';
import FdsInput from '@/components/fds-input.vue';
import FdsInputNumber from '@/components/fds-input-number.vue';
import FdsTextarea from '@/components/fds-textarea.vue';

import FdsCheckbox from '@/components/fds-checkbox.vue';

import FdsToggleSwitch from '@/components/fds-toggle-switch.vue';

import FdsRadioGroup from '@/components/fds-radio-group.vue';
import FdsRadioItem from '@/components/fds-radio-item.vue';

import FdsDropdown from '@/components/fds-dropdown.vue';

import FdsFejlmeddelelse from '@/components/fds-fejlmeddelelse.vue';
import FdsFejlopsummering from '@/components/fds-fejlopsummering.vue';

import FdsButton from '@/components/fds-button.vue';
import FdsButtonIcon from '@/components/fds-button-icon.vue';

import FdsAccordion from '@/components/fds-accordion.vue';
import FdsAccordionGroup from '@/components/fds-accordion-group.vue';

import FdsBadge from '@/components/fds-badge.vue';
import FdsTag from '@/components/fds-tag.vue';
import FdsCard from '@/components/fds-card.vue';
import FdsCardGroup from '@/components/fds-card-group.vue';
import FdsTilTop from '@/components/fds-til-top.vue';
import FdsSprogVaelger from '@/components/fds-sprogvaelger.vue';

import FdsOverflowMenu from '@/components/fds-overflow-menu.vue';
import FdsModal from '@/components/fds-modal.vue';
import FdsToastContainer from '@/components/fds-toast-container.vue';
import FdsToast from '@/components/fds-toast.vue';

import FdsDatoVaelger from '@/components/fds-dato-vaelger.vue';

import FdsList from '@/components/fds-list.vue';

import FdsFileUpload from '@/components/fds-file-upload.vue';

import FdsDetaljer from '@/components/fds-detaljer.vue';

import FdsFunktionslink from '@/components/fds-funktionslink.vue';
import FdsNavLink from '@/components/fds-nav-link.vue';
import FdsTilbageLink from '@/components/fds-tilbage-link.vue';
import FdsPaginering from '@/components/fds-paginering.vue';

import FdsTrinindikatorGroup from '@/components/fds-trinindikator-group.vue';
import XFdsTrinindikator from '@/components/extra/xfds-trinindikator.vue';

import FdsFaneblade from '@/components/fds-faneblade.vue';
import FdsFanebladItem from '@/components/fds-faneblad-item.vue';

import FdsSpinner from '@/components/fds-spinner.vue';

import XFdsCheckboxList from '@/components/extra/xfds-checkbox-list.vue';
import XFdsDropdown from '@/components/extra/xfds-dropdown.vue';
import XFdsRadio from '@/components/extra/xfds-radio.vue';
import XFdsRadioToggle from '@/components/extra/xfds-radio-toggle.vue';

import XFdsRange from '@/components/extra/xfds-range.vue';

import XFdsFormGroup from '@/components/extra/xfds-form-group.vue';
import XFdsFormInput from '@/components/extra/xfds-form-input.vue';
import XFdsFormRadio from '@/components/extra/xfds-form-radio.vue';
import XFdsFormDropdown from '@/components/extra/xfds-form-dropdown.vue';
import XFdsFormInputNumber from '@/components/extra/xfds-form-input-number.vue';
import XFdsFormTextarea from '@/components/extra/xfds-form-textarea.vue';
import XFdsFormCheckboxList from '@/components/extra/xfds-form-checkbox-list.vue';
import XFdsValidate from '@/components/extra/xfds-validate.vue';
import XFdsProgressbar from '@/components/extra/xfds-progressbar.vue';

import FdsMenu from '@/components/fds-menu.vue';
import FdsMenuItem from '@/components/fds-menu-item.vue';
import XFdsButtonSpinner from '@/components/extra/xfds-button-spinner.vue';

import XFdsMenu from '@/components/extra/xfds-menu.vue';
import XFdsMenuSub from '@/components/extra/xfds-menu-sub.vue';
import FdsPreviewExample from '@/components/fds-preview-example.vue';
import FdsPreviewItem from '@/components/fds-preview-item.vue';
import FdsPreviewCode from '@/components/fds-preview-code.vue';
import FdsPreview from '@/components/fds-preview.vue';
import FdsDatoFelter from '@/components/fds-dato-felter.vue';
import XFdsFileList from '@/components/extra/xfds-file-list.vue';

export * from '@/model/fds.model';
export * from '@/utils/validate-utils';
export * from '@/utils/file-utils';

function install (app: App): void {
  app.component('fds-trinindikator-group', FdsTrinindikatorGroup);
  app.component('xfds-trinindikator', XFdsTrinindikator);

  app.component('fds-modal', FdsModal);
  app.component('fds-cookiemeddelelse', FdsCookiemeddelelse);

  app.component('fds-overflow-menu', FdsOverflowMenu);
  app.component('fds-strukturerede-liste', FdsStruktureredeListe);
  app.component('fds-dato-felter', FdsDatoFelter);
  app.component('fds-dato-vaelger', FdsDatoVaelger);

  app.component('fds-toast-container', FdsToastContainer);
  app.component('fds-toast', FdsToast);

  app.component('fds-alert', FdsAlert);
  app.component('fds-spinner', FdsSpinner);
  app.component('fds-faneblad-item', FdsFanebladItem);
  app.component('fds-faneblade', FdsFaneblade);

  app.component('fds-pre', FdsPre);
  app.component('fds-hint', FdsHint);

  app.component('fds-list', FdsList);

  app.component('fds-badge', FdsBadge);
  app.component('fds-tag', FdsTag);
  app.component('fds-til-top', FdsTilTop);
  app.component('fds-sprogvaelger', FdsSprogVaelger);

  app.component('fds-card', FdsCard);
  app.component('fds-card-group', FdsCardGroup);
  app.component('fds-input', FdsInput);
  app.component('fds-input-number', FdsInputNumber);
  app.component('fds-textarea', FdsTextarea);
  app.component('fds-icon-collection', FdsIconCollection);
  app.component('fds-checkbox', FdsCheckbox);
  app.component('fds-radio-group', FdsRadioGroup);
  app.component('fds-radio-item', FdsRadioItem);

  app.component('xfds-radio-toggle', XFdsRadioToggle);
  app.component('fds-dropdown', FdsDropdown);
  app.component('fds-label', FdsLabel);
  app.component('fds-input-limit', FdsInputLimit);
  app.component('fds-formgroup', FdsFormgroup);
  app.component('fds-fejlmeddelelse', FdsFejlmeddelelse);
  app.component('fds-fejlopsummering', FdsFejlopsummering);
  app.component('fds-button', FdsButton);
  app.component('fds-button-icon', FdsButtonIcon);
  app.component('fds-toggle-switch', FdsToggleSwitch);
  app.component('fds-accordion', FdsAccordion);
  app.component('fds-accordion-group', FdsAccordionGroup);
  app.component('fds-file-upload', FdsFileUpload);
  app.component('xfds-file-list', XFdsFileList);

  app.component('fds-nav-link', FdsNavLink);
  app.component('fds-funktionslink', FdsFunktionslink);
  app.component('xfds-menu-sub', XFdsMenuSub);

  app.component('fds-menu', FdsMenu);
  app.component('fds-menu-item', FdsMenuItem);
  app.component('fds-trinindikator-item', FdsMenuItem);
  app.component('fds-tooltip', FdsTooltip);
  app.component('fds-detaljer', FdsDetaljer);
  app.component('fds-tilbage-link', FdsTilbageLink);
  app.component('fds-paginering', FdsPaginering);

  app.component('fds-preview', FdsPreview);
  app.component('fds-preview-code', FdsPreviewCode);
  app.component('fds-preview-item', FdsPreviewItem);
  app.component('fds-preview-example', FdsPreviewExample);

  app.component('xfds-checkbox-list', XFdsCheckboxList);
  app.component('xfds-dropdown', XFdsDropdown);
  app.component('xfds-radio', XFdsRadio);

  app.component('xfds-range', XFdsRange);

  app.component('xfds-validate', XFdsValidate);
  app.component('xfds-form-group', XFdsFormGroup);
  app.component('xfds-form-input', XFdsFormInput);

  app.component('xfds-form-input-number', XFdsFormInputNumber);

  app.component('xfds-form-textarea', XFdsFormTextarea);
  app.component('xfds-form-radio', XFdsFormRadio);
  app.component('xfds-form-dropdown', XFdsFormDropdown);
  app.component('xfds-form-checkbox-list', XFdsFormCheckboxList);
  app.component('xfds-progressbar', XFdsProgressbar);
  app.component('xfds-button-spinner', XFdsButtonSpinner);
  app.component('xfds-menu', XFdsMenu);
}

export {
  FdsAlert,
  FdsModal,
  FdsCookiemeddelelse,
  FdsOverflowMenu,
  FdsToastContainer,
  FdsToast,
  FdsList,
  FdsSpinner,
  FdsPreview,
  FdsPreviewCode,
  FdsPreviewItem,
  FdsPreviewExample,
  FdsTrinindikatorGroup,
  FdsTilbageLink,
  FdsPaginering,
  FdsDatoFelter,
  FdsDatoVaelger,
  FdsTextarea,
  FdsInputNumber,
  FdsFanebladItem,
  FdsStruktureredeListe,
  FdsFaneblade,
  FdsMenu,
  FdsMenuItem,
  FdsHint,
  FdsDetaljer,
  FdsPre,
  FdsBadge,
  FdsTilTop,
  FdsSprogVaelger,
  FdsTag,
  FdsCard,
  FdsCardGroup,
  FdsInput,
  FdsCheckbox,
  FdsRadioGroup,
  FdsRadioItem,
  FdsDropdown,
  FdsLabel,
  FdsInputLimit,
  FdsTooltip,
  FdsFormgroup,
  FdsFejlmeddelelse,
  FdsFejlopsummering,
  XFdsTrinindikator,
  XFdsMenu,
  XFdsMenuSub,
  XFdsCheckboxList,
  XFdsDropdown,
  XFdsRadio,
  XFdsRadioToggle,
  XFdsRange,
  XFdsValidate,
  XFdsFormInput,
  XFdsFormInputNumber,
  XFdsFormRadio,
  XFdsFormDropdown,
  XFdsFormTextarea,
  XFdsFormCheckboxList,
  XFdsProgressbar,
  XFdsFormGroup,
  XFdsFileList,
  FdsButton,
  FdsButtonIcon,
  FdsIconCollection,
  FdsToggleSwitch,
  XFdsButtonSpinner,
  FdsAccordion,
  FdsAccordionGroup,
  FdsFileUpload,
};
export default install as unknown as Plugin;

// https://stackoverflow.com/questions/65290358/vue3-typescript-declaration-file
// https://stackoverflow.com/questions/64155229/add-global-properties-to-vue-3-using-typescript