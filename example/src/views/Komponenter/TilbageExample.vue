<template>
  <section>
    <fds-tilbage-link @click="klikEvent" />
    <br />
    <fds-tilbage-link @click="klikEvent"> Egen tekst </fds-tilbage-link>
  </section>
</template>

<script setup lang="ts">
const klikEvent = () => window.confirm('KLIK');
</script>
