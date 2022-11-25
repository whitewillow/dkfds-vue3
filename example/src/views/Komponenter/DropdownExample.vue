<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-dropdown v-model="dropdownVal">
          <option value="Manuel">Manuel</option>
          <option value="Auto">Auto</option>
        </fds-dropdown>

        <fds-pre header="v-model" :json="{ dropdownVal }" />
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
              <td><code>formid</code></td>
              <td>Se form gruppe</td>
            </tr>
            <tr>
              <td><code>v-model</code></td>
              <td><code>string</code></td>
              <td><code>''</code></td>
              <td></td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td><code>false</code></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dropdownVal = ref('');

const code = `
<fds-dropdown v-model="dropdownVal">
  <option value="Manuel">
    Manuel
  </option>
  <option value="Auto">
    Auto
  </option>
</fds-dropdown>

const dropdownVal = ref('');
`;
</script>
