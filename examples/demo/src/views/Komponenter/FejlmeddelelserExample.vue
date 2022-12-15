<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/fejlmeddelelser/">
      <fds-preview-item>
        <fds-formgroup :is-valid="false">
          <fds-label> Fornavn </fds-label>
          <fds-tooltip class="ml-2">
            Hjælpende <b>tekst</b>
          </fds-tooltip>
          <fds-hint>Indtast fornavn</fds-hint>
          <fds-fejlmeddelelse> Giv dit kursus et navn </fds-fejlmeddelelse>
          <fds-input
            v-model="txtFornavn"
            input-type="name"
            autocomplete="name"></fds-input>
        </fds-formgroup>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>

      <fds-preview-item>
        <table class="table table--compact">
          <thead>
            <tr>
              <th>Inject</th>
              <th>Type</th>
              <th>Beskrivelse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>provideErrorMessage</code></td>
              <td><code>string</code></td>
              <td>lytter efter provideErrorMessage og sættes som default indhold i slot</td>
            </tr>
          </tbody>
        </table>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const txtFornavn = ref('');
const code = `
<fds-formgroup  :is-valid="false">
  <fds-label> Fornavn </fds-label>
  <fds-tooltip class="ml-2">
    Hjælpende <b>tekst</b>
  </fds-tooltip>
  <fds-hint>Indtast fornavn</fds-hint>
  <fds-fejlmeddelelse> Giv dit kursus et navn </fds-fejlmeddelelse>
  <fds-input
    v-model="txtFornavn"
    input-type="name"
    autocomplete="name"
  ></fds-input>
</fds-formgroup>
`;
</script>
