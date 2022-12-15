import { App, Plugin } from 'vue';

import FdsAccordionGroup from './components/fds-accordion-group.vue';
import FdsAccordion from './components/fds-accordion.vue';
import FdsAlert from './components/fds-alert.vue';
import FdsBadge from './components/fds-badge.vue';
import FdsButtonIcon from './components/fds-button-icon.vue';
import FdsButton from './components/fds-button.vue';
import FdsCardGroup from './components/fds-card-group.vue';
import FdsCard from './components/fds-card.vue';
import FdsCheckbox from './components/fds-checkbox.vue';
import FdsCookiemeddelelse from './components/fds-cookiemeddelelse.vue';
import FdsDatoFelter from './components/fds-dato-felter.vue';
import FdsDatoVaelger from './components/fds-dato-vaelger.vue';
import FdsDetaljer from './components/fds-detaljer.vue';
import FdsDropdown from './components/fds-dropdown.vue';
import FdsFanebladItem from './components/fds-faneblad-item.vue';
import FdsFaneblade from './components/fds-faneblade.vue';
import FdsFejlmeddelelse from './components/fds-fejlmeddelelse.vue';
import FdsFejlopsummering from './components/fds-fejlopsummering.vue';
import FdsFileUpload from './components/fds-file-upload.vue';
import FdsFormgroup from './components/fds-formgroup.vue';
import FdsFunktionslink from './components/fds-funktionslink.vue';
import FdsHint from './components/fds-hint.vue';
import FdsIconCollection from './components/fds-icon-collection.vue';
import FdsInputLimit from './components/fds-input-limit.vue';
import FdsInputNumber from './components/fds-input-number.vue';
import FdsInput from './components/fds-input.vue';
import FdsLabel from './components/fds-label.vue';
import FdsList from './components/fds-list.vue';
import FdsMenuItem from './components/fds-menu-item.vue';
import FdsMenu from './components/fds-menu.vue';
import FdsModal from './components/fds-modal.vue';
import FdsNavLink from './components/fds-nav-link.vue';
import FdsOverflowMenu from './components/fds-overflow-menu.vue';
import FdsPaginering from './components/fds-paginering.vue';
import FdsPre from './components/fds-pre.vue';
import FdsPreviewCode from './components/fds-preview-code.vue';
import FdsPreviewExample from './components/fds-preview-example.vue';
import FdsPreviewItem from './components/fds-preview-item.vue';
import FdsPreview from './components/fds-preview.vue';
import FdsRadioGroup from './components/fds-radio-group.vue';
import FdsRadioItem from './components/fds-radio-item.vue';
import FdsSpinner from './components/fds-spinner.vue';
import FdsSprogVaelger from './components/fds-sprogvaelger.vue';
import FdsStruktureredeListe from './components/fds-strukturerede-liste.vue';
import FdsTag from './components/fds-tag.vue';
import FdsTextarea from './components/fds-textarea.vue';
import FdsTilTop from './components/fds-til-top.vue';
import FdsTilbageLink from './components/fds-tilbage-link.vue';
import FdsToastContainer from './components/fds-toast-container.vue';
import FdsToast from './components/fds-toast.vue';
import FdsToggleSwitch from './components/fds-toggle-switch.vue';
import FdsTooltip from './components/fds-tooltip.vue';
import FdsTrinindikatorGroup from './components/fds-trinindikator-group.vue';

function install(app: App): void {
  app.component('fds-trinindikator-group', FdsTrinindikatorGroup);

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

  app.component('fds-nav-link', FdsNavLink);
  app.component('fds-funktionslink', FdsFunktionslink);

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
}

export default install as unknown as Plugin;

// https://stackoverflow.com/questions/65290358/vue3-typescript-declaration-file
// https://stackoverflow.com/questions/64155229/add-global-properties-to-vue-3-using-typescript

export {
  FdsAccordionGroup,
  FdsAccordion,
  FdsAlert,
  FdsBadge,
  FdsButtonIcon,
  FdsButton,
  FdsCardGroup,
  FdsCard,
  FdsCheckbox,
  FdsCookiemeddelelse,
  FdsDatoFelter,
  FdsDatoVaelger,
  FdsDetaljer,
  FdsDropdown,
  FdsFanebladItem,
  FdsFaneblade,
  FdsFejlmeddelelse,
  FdsFejlopsummering,
  FdsFileUpload,
  FdsFormgroup,
  FdsFunktionslink,
  FdsHint,
  FdsIconCollection,
  FdsInputLimit,
  FdsInputNumber,
  FdsInput,
  FdsLabel,
  FdsList,
  FdsMenuItem,
  FdsMenu,
  FdsModal,
  FdsNavLink,
  FdsOverflowMenu,
  FdsPaginering,
  FdsPre,
  FdsPreviewCode,
  FdsPreviewExample,
  FdsPreviewItem,
  FdsPreview,
  FdsRadioGroup,
  FdsRadioItem,
  FdsSpinner,
  FdsSprogVaelger,
  FdsStruktureredeListe,
  FdsTag,
  FdsTextarea,
  FdsTilTop,
  FdsTilbageLink,
  FdsToastContainer,
  FdsToast,
  FdsToggleSwitch,
  FdsTooltip,
  FdsTrinindikatorGroup,
};
