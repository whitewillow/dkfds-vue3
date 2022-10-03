<template>
  <section>
    <fds-component-preview header="Eksempel">
      <xfds-formgroup #default="{ formid }">
        <fds-label :id="formid"> Navn </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="user.name" :id="formid"></fds-input>
      </xfds-formgroup>

      <fds-pre header="object data" :json="user" />

      <template #description>
        <p class="italic">Komponenten <code>xfds-formgroup</code> er en wrapper. se koden</p>
        <p class="italic">
          Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen
          validarings-komponent
        </p>
        <p class="italic">
          Komponenten <code>fds-input</code> kan udskiftes med egne komponenter eller eg:
          <code>fds-input-number</code> m.m.
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

const user = ref({
  name: '',
  adress: '',
  city: '',
  search: '',
});
const code = `
  <xfds-formgroup #default="{ formid }">
    <fds-label :id="formid"> Navn </fds-label>
    <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
    <fds-hint>Indtast fornavn</fds-hint>
    <fds-input v-model="user.name" :id="formid"></fds-input>
  </xfds-formgroup>
  `;
</script>
