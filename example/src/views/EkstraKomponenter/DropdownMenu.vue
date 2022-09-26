<template>
  <section>
    <fds-component-preview header="Tekstfelter">
      <xfds-form-dropdown
        label="Radio form"
        :validations="[hasContent]"
        :options="dropdownOptions"
        v-model="dropdownVal"
      />

      <fds-pre :json="{ dropdownVal }" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-dropdown</code> er en samling af komponenter der giver en
          samlet funktionalitet.
        </p>
        <p class="italic">Understøtter simpel validering, m.m.</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { hasContent } from 'dkfds-vue3/src/utils/validate-utils';
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
<xfds-form-dropdown
  label="Radio form"
  :validations="[hasContent]"
  :options="dropdownOptions"
  v-model="dropdownVal"
/>

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
