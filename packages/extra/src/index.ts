import { App, Plugin } from 'vue';

import XfdsButtonSpinner from './components/xfds-button-spinner.vue';
import XfdsCheckboxList from './components/xfds-checkbox-list.vue';
import XfdsDropdown from './components/xfds-dropdown.vue';
import XfdsFileList from './components/xfds-file-list.vue';
import XfdsFormCheckboxList from './components/xfds-form-checkbox-list.vue';
import XfdsFormDropdown from './components/xfds-form-dropdown.vue';
import XfdsFormGroup from './components/xfds-form-group.vue';
import XfdsFormInputNumber from './components/xfds-form-input-number.vue';
import XfdsFormInput from './components/xfds-form-input.vue';
import XfdsFormRadio from './components/xfds-form-radio.vue';
import XfdsFormTextarea from './components/xfds-form-textarea.vue';
import XfdsMenuSub from './components/xfds-menu-sub.vue';
import XfdsMenu from './components/xfds-menu.vue';
import XfdsProgressbar from './components/xfds-progressbar.vue';
import XfdsRadioToggle from './components/xfds-radio-toggle.vue';
import XfdsRadio from './components/xfds-radio.vue';
import XfdsRange from './components/xfds-range.vue';
import XfdsTrinindikator from './components/xfds-trinindikator.vue';
import XfdsValidate from './components/xfds-validate.vue';

export {
  XfdsButtonSpinner,
  XfdsCheckboxList,
  XfdsDropdown,
  XfdsFileList,
  XfdsFormCheckboxList,
  XfdsFormDropdown,
  XfdsFormGroup,
  XfdsFormInputNumber,
  XfdsFormInput,
  XfdsFormRadio,
  XfdsFormTextarea,
  XfdsMenuSub,
  XfdsMenu,
  XfdsProgressbar,
  XfdsRadioToggle,
  XfdsRadio,
  XfdsRange,
  XfdsTrinindikator,
  XfdsValidate,
};

function install(app: App): void {
  app.component('xfds-button-spinner', XfdsButtonSpinner);
  app.component('xfds-checkbox-list', XfdsCheckboxList);
  app.component('xfds-dropdown', XfdsDropdown);
  app.component('xfds-file-list', XfdsFileList);
  app.component('xfds-form-checkbox-list', XfdsFormCheckboxList);
  app.component('xfds-form-dropdown', XfdsFormDropdown);
  app.component('xfds-form-group', XfdsFormGroup);
  app.component('xfds-form-input-number', XfdsFormInputNumber);
  app.component('xfds-form-input', XfdsFormInput);
  app.component('xfds-form-radio', XfdsFormRadio);
  app.component('xfds-form-textarea', XfdsFormTextarea);
  app.component('xfds-menu-sub', XfdsMenuSub);
  app.component('xfds-menu', XfdsMenu);
  app.component('xfds-progressbar', XfdsProgressbar);
  app.component('xfds-radio-toggle', XfdsRadioToggle);
  app.component('xfds-radio', XfdsRadio);
  app.component('xfds-range', XfdsRange);
  app.component('xfds-trinindikator', XfdsTrinindikator);
  app.component('xfds-validate', XfdsValidate);
}

export default install as unknown as Plugin;

// https://stackoverflow.com/questions/65290358/vue3-typescript-declaration-file
// https://stackoverflow.com/questions/64155229/add-global-properties-to-vue-3-using-typescript
