<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/tooltip/">
      <fds-preview-item>
        <fds-tooltip> Hjælpende <b>tekst</b> </fds-tooltip>
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-tooltip>
  Hjælpende <b>tekst</b>
</fds-tooltip>
`;
</script>
