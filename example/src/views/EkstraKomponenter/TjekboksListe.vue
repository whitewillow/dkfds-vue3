<template>
  <section>
    <fds-component-preview header="Eksempel">
      <xfds-form-checkbox-list
        label="Checkbox form"
        :validations="[arrayHasItems]"
        v-model="checkboxListForm"
      />

      <fds-pre :json="checkboxListForm" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-checkbox-list</code> er en samling af komponenter der giver en
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
import { arrayHasItems } from 'dkfds-vue3/src/utils/validate-utils';
import { FdsCheckboxItem } from 'dkfds-vue3/src/model/fds.model';

const checkboxListForm = ref<FdsCheckboxItem[]>([
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
  {
    title: 'Tomat',
    value: 'tomat',
    disabled: true,
  },
]);

const code = `
  <xfds-form-checkbox-list
    label="Checkbox form"
    :validations="[arrayHasItems]"
    v-model="checkboxListForm"
  />
  
  const checkboxListForm = ref<FdsCheckboxItem[]>([
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
    {
      title: 'Tomat',
      value: 'tomat',
      disabled: true,
    },
  ]);`;
</script>
