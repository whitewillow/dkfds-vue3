<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup :is-valid="false">
        <fds-label> Fornavn </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-fejlmeddelelse> Giv dit kursus et navn </fds-fejlmeddelelse>
        <fds-input v-model="txtFornavn" input-type="name" autocomplete="name"></fds-input>
      </fds-formgroup>

      <template #description>
        <p class="italic">
          Udskrive fejlmeddelelse med <code>fds-fejlmeddelelse</code> hertil skal form gruppen og
          vide at der er Fejl. Dette gøre med <code>:is-valid</code>
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const txtFornavn = ref('');
const code = `
<fds-formgroup  :is-valid="false">
  <fds-label> Fornavn </fds-label>
  <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
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
