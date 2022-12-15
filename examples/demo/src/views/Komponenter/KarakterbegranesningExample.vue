<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/inputfelter/#karakterbegraensning"
    >
      <fds-formgroup>
        <fds-label> CVR nr. </fds-label>
        <fds-tooltip class="ml-2">
          Hjælpende <b>tekst</b>
        </fds-tooltip>
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="cvr"></fds-input>
        <fds-input-limit
          :model-value="cvr"
          :limit="10" />
      </fds-formgroup>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cvr = ref('');
const code = `
<fds-input v-model="cvr"></fds-input>
<fds-input-limit :modelValue="cvr" :limit="10" />
`;
</script>
