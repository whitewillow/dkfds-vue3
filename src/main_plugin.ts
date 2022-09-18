import { App, Plugin } from 'vue';

import FdsAlert from './components/fds-alert.vue';
import FdsPre from './components/fds-pre.vue';
import FdsIconCollection from './components/fds-icon-collection.vue';
import FdsHint from './components/fds-hint.vue';
import FdsInput from './components/fds-input.vue';
import FdsCheckbox from './components/fds-checkbox.vue';
import FdsCheckboxList from './components/fds-checkbox-list.vue';
import FdsToggleSwitch from './components/fds-toggle-switch.vue';
import FdsRadio from './components/fds-radio.vue';
import FdsRadioToggle from './components/fds-radio-toggle.vue';
import FdsDropdown from './components/fds-dropdown.vue';
import FdsLabel from './components/fds-label.vue';
import FdsValidate from './components/fds-validate.vue';
import FdsFormgroup from './components/fds-formgroup.vue';
import FdsErrorMessage from './components/fds-error-message.vue';
import FdsErrorList from './components/fds-error-list.vue';
import FdsFormInput from './components/fds-form-input.vue';
import FdsFormTextarea from './components/fds-form-textarea.vue';
import FdsButton from './components/fds-button.vue';
import FdsButtonIcon from './components/fds-button-icon.vue';
import FdsButtonSpinner from './components/fds-button-spinner.vue';
import FdsAccordion from './components/fds-accordion.vue';
import FdsAccordionGroup from './components/fds-accordion-group.vue';
import FdsAccordionItem from './components/fds-accordion-item.vue';
import FdsBadge from './components/fds-badge.vue';
import FdsCard from './components/fds-card.vue';
import FdsFileUpload from './components/fds-file-upload.vue';
import FdsFileList from './components/fds-file-list.vue';

import FdsFunktionslink from './components/fds-funktionslink.vue';

import FdsNavItemRoute from './components/fds-nav-item-route.vue';

export * from './model/fds.model';
export * from './utils/validate-utils';
export * from './utils/file-utils';

function install (app: App): void {
  app.component('fds-alert', FdsAlert);
  app.component('fds-pre', FdsPre);
  app.component('fds-hint', FdsHint);
  app.component('fds-badge', FdsBadge);
  app.component('fds-card', FdsCard);
  app.component('fds-input', FdsInput);
  app.component('fds-icon-collection', FdsIconCollection);
  app.component('fds-checkbox', FdsCheckbox);
  app.component('fds-checkbox-list', FdsCheckboxList);
  app.component('fds-radio', FdsRadio);
  app.component('fds-radio-toggle', FdsRadioToggle);
  app.component('fds-dropdown', FdsDropdown);
  app.component('fds-label', FdsLabel);
  app.component('fds-validate', FdsValidate);
  app.component('fds-formgroup', FdsFormgroup);
  app.component('fds-error-message', FdsErrorMessage);
  app.component('fds-error-list', FdsErrorList);
  app.component('fds-form-input', FdsFormInput);
  app.component('fds-form-textarea', FdsFormTextarea);
  app.component('fds-button', FdsButton);
  app.component('fds-button-icon', FdsButtonIcon);
  app.component('fds-button-spinner', FdsButtonSpinner);
  app.component('fds-toggle-switch', FdsToggleSwitch);
  app.component('fds-accordion', FdsAccordion);
  app.component('fds-accordion-group', FdsAccordionGroup);
  app.component('fds-accordion-item', FdsAccordionItem);
  app.component('fds-file-upload', FdsFileUpload);
  app.component('fds-file-list', FdsFileList);
  app.component('fds-nav-item-route', FdsNavItemRoute);
  app.component('fds-funktionslink', FdsFunktionslink);
}

export {
  FdsAlert,
  FdsHint,
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
  FdsValidate,
  FdsFormgroup,
  FdsErrorMessage,
  FdsErrorList,
  FdsFormInput,
  FdsFormTextarea,
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