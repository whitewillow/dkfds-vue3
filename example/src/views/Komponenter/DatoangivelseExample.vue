<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Indsendelsesfrist </fds-label>
          <fds-dato-angivelse v-model="datoAngiv" @valid="datoAngivValid = $event" />
        </fds-formgroup>
        <fds-pre :json="{ datoAngiv, datoAngivValid }" header="JSON DATE format" />
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
              <td><code>v-model</code></td>
              <td><code>yyyy-mm-dd</code></td>
              <td><code>''</code></td>
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

const datoAngiv = ref('2022-12-01');
const datoAngivValid = ref(true);

const code = `
<fds-dato-angivelse v-model="datoAngiv" />

const datoAngiv = ref('2022-12-01');
const datoAngivValid = ref(true);
`;
</script>
