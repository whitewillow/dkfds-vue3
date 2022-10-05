<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-formgroup #default="{ formid }">
        <fds-label :id="formid"> CVR nr. </fds-label>
        <fds-tooltip class="ml-2" text="Hjælpende <b>tekst</b>" />
        <fds-hint>Indtast fornavn</fds-hint>
        <fds-input v-model="cvr" :id="formid"></fds-input>
        <fds-input-limit :modelValue="cvr" :limit="10" />
      </fds-formgroup>
      <template #description>
        <p class="italic">
          <code>fds-input-limit</code> bruges sammen med et input felt. Viser med tekst
          Karakterbegræsningen for angivet input.
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

const cvr = ref('');
const code = `
<fds-input v-model="cvr" :id="formid"></fds-input>
<fds-input-limit :modelValue="cvr" :limit="10" />
`;
</script>
