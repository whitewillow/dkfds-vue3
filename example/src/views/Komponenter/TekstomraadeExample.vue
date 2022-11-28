<template>
  <section>
    <fds-preview header="Nummer tekstfelt" href="https://designsystem.dk/komponenter/tekstomraade/">
      <fds-preview-item>
        <fds-formgroup>
          <fds-label> Begrundelse </fds-label>
          <fds-hint>Indtast Begrundelse</fds-hint>
          <fds-textarea v-model="txtBegrundelse" />
        </fds-formgroup>

        <fds-pre header="v-model" :json="{ txtBegrundelse }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const txtBegrundelse = ref('');
const code = `
<fds-formgroup>
  <fds-label> Begrundelse </fds-label>
  <fds-hint>Indtast Begrundelse</fds-hint>
  <fds-textarea v-model="txtBegrundelse" />
</fds-formgroup>
`;
</script>
