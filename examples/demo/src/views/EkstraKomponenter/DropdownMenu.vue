<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <xfds-dropdown
          v-model="dropdownVal"
          :options="dropdownOptions" />
        <fds-pre
          header="v-model"
          :json="{ dropdownVal }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Props</th>
              <th>Type</th>
              <th>Default</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td><code>string</code></td>
              <td><code>null (autoid)</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>optionHeader</code></td>
              <td><code>string</code></td>
              <td><code>'Vælg'</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>options</code></td>
              <td><code>Array&lt;FdsOptionItem&gt;</code></td>
              <td><code>[]</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>

    <fds-preview header="Eksempel Formular">
      <fds-preview-item>
        <xfds-validate
          :model-value="dropdownValForm"
          :validations="[hasContent]">
          <xfds-form-dropdown
            v-model="dropdownValForm"
            label="Dropdown form"
            :options="dropdownOptions"
          />
        </xfds-validate>

        <fds-pre
          header="v-model for dropdown"
          :json="{ dropdownValForm }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeForm"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { hasContent, FdsOptionItem } from 'dkfds-vue3-utils';

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
<xfds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

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
<xfds-validate :modelValue="dropdownValForm" :validations="[hasContent]">
  <xfds-form-dropdown
    label="Dropdown form"
    :options="dropdownOptions"
    v-model="dropdownValForm"
  />
</xfds-validate>
  `;
</script>
