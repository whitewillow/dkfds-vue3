<template>
  <section>
    <fds-tilbage-link @click="klikEvent" />
    <br />
    <fds-tilbage-link @click="klikEvent"> Egen tekst </fds-tilbage-link>
  </section>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-alert
const klikEvent = () => window.confirm('KLIK');
</script>
