<template>
  <section>
    <fds-component-preview header="Eksempel">
      <xfds-dropdown :options="dropdownOptions" v-model="dropdownVal" />

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

    <fds-component-preview header="Eksempel Formular">
      <xfds-validate :modelValue="dropdownValForm" :validations="[hasContent]">
        <xfds-form-dropdown
          label="Dropdown form"
          :options="dropdownOptions"
          v-model="dropdownValForm"
        />
      </xfds-validate>

      <fds-pre header="v-model for dropdown" :json="{ dropdownValForm }" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-dropdown</code> er en samling af komponenter der giver en
          samlet funktionalitet.
        </p>
        <p class="italic">Understøtter simpel validering, m.m.</p>
      </template>
      <template #code>
        <pre v-text="codeForm"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { hasContent } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsOptionItem } from 'dkfds-vue3/src/model/fds.model';

const dropdownVal = ref('');
const dropdownValForm = ref('');
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

const codeForm = `
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
