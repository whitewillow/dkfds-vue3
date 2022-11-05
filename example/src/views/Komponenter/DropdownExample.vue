<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-dropdown v-model="dropdownVal">
        <option value="Manuel">Manuel</option>
        <option value="Auto">Auto</option>
      </fds-dropdown>

      <fds-pre header="v-model" :json="{ dropdownVal }" />
      <template #description>
        <p class="italic">
          Anvend kun dropdown menuer, når det er absolut nødvendigt og kun i tilfælde, hvor brugeren
          skal vælge mellem 7 til 15 værdier på en begrænset plads.
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

const dropdownVal = ref('');

const code = `
<fds-dropdown v-model="dropdownVal">
  <option value="Manuel">
    Manuel
  </option>
  <option value="Auto">
    Auto
  </option>
</fds-dropdown>

const dropdownVal = ref('');
`;
</script>
