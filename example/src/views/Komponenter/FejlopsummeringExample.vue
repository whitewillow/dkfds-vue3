<template>
  <section>
    <h2>Fejlopsummering</h2>
    <fds-fejlopsummering class="w-percent-lg-80" :list="fejlOpsummering"></fds-fejlopsummering>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FdsErrorListItem } from 'dkfds-vue3/src/model/fds.model';

const fejlOpsummering = ref<FdsErrorListItem[]>([
  {
    anchor: 'anchor',
    text: 'Datoen for udløbsdato på dit pas bør inkludere årstal',
    target: 'asdasda',
  },
  {
    anchor: 'anchor',
    text: 'Indtast postnummer - fx 4000',
    target: 'asdasda',
  },
]);
</script>
