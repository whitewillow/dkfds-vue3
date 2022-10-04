<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

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
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';

const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);

const code = `
<fds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

const dropdownVal = ref('');
const dropdownOptions = ref<FdsOptionItem[]>([
  {
    title: 'Banan',
    value: 'banan',
  },
  {
    title: 'Melon',
    value: 'melon',
  },
  {
    title: 'Æble',
    value: 'æble',
  },
]);
`;
</script>
