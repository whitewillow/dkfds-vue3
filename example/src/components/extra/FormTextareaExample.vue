<template>
  <section>
    <fds-component-preview header="Tekstfelter">
      <xfds-form-textarea
        label="Beskrivelse"
        hint="Angiv beskrivelse af produktet"
        placeholder="...Produktet er består af xxx"
        v-model="product.beskrivelse"
        :validations="[hasContent, charactersMinLength(10)]"
      />

      <fds-pre :json="product" />

      <template #description>
        <p class="italic">
          Komponenten <code>xfds-form-textarea</code> er en samling af komponenter der giver en
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
import { numberMin, hasContent, charactersMinLength } from 'dkfds-vue3/src/utils/validate-utils';

const product = ref({
  beskrivelse: '',
});
const code = `
<xfds-form-textarea
  label="Beskrivelse"
  hint="Angiv beskrivelse af produktet"
  placeholder="...Produktet er består af xxx"
  v-model="product.beskrivelse"
  :validations="[hasContent, charactersMinLength(10)]"
/>`;
</script>
