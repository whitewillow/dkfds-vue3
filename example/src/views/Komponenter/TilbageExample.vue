<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/tilbage-link/">
      <fds-preview-item>
        <fds-tilbage-link @click="klikEvent" />
        <br />
        <fds-tilbage-link @click="klikEvent">Egen tekst</fds-tilbage-link>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>

  <section></section>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-alert
const klikEvent = () => window.confirm('KLIK');

const code = `
<fds-tilbage-link @click="klikEvent" />

<fds-tilbage-link @click="klikEvent">Egen tekst</fds-tilbage-link>
`;
</script>
