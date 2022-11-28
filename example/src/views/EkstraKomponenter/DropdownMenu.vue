<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

        <fds-pre header="v-model" :json="{ dropdownVal }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Eksempel Formular">
      <fds-preview-item>
        <xfds-validate :modelValue="dropdownValForm" :validations="[hasContent]">
          <xfds-form-dropdown
            label="Dropdown form"
            :options="dropdownOptions"
            v-model="dropdownValForm"
          />
        </xfds-validate>

        <fds-pre header="v-model for dropdown" :json="{ dropdownValForm }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeForm"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { hasContent } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';

const dropdownVal = ref('');
const dropdownValForm = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);

const code = `
<fds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);
`;

const codeForm = `
<xfds-form-dropdown
  label="Radio form"
  :validations="[hasContent]"
  :options="dropdownOptions"
  v-model="dropdownVal"
/>

const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);
  `;
</script>
