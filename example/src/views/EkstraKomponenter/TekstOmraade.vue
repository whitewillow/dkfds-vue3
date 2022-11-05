<template>
  <section>
    <fds-component-preview header="Eksempel">
      <xfds-form-textarea
        label="Beskrivelse"
        hint="Angiv beskrivelse af produktet"
        placeholder="...Produktet er består af xxx"
        v-model="product.beskrivelse"
        :validations="[hasContent, charactersMinLength(10)]"
      />

      <fds-pre header="v-model" :json="product" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-textarea</code> er en samling af komponenter der giver en
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
import { hasContent, charactersMinLength } from 'dkfds-vue3/src/utils/validate-utils';

const product = ref({
  beskrivelse: '',
});
const codeForm = `
  <xfds-form-textarea
    label="Beskrivelse"
    hint="Angiv beskrivelse af produktet"
    placeholder="...Produktet er består af xxx"
    v-model="product.beskrivelse"
    :validations="[hasContent, charactersMinLength(10)]"
  />`;
</script>
