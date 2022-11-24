<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-checkbox v-model="oneChecked" class="mt-2">
        Et valg
        <template #content> Det er muligt at angive indhold </template>
      </fds-checkbox>
      <fds-formgroup>
        <fds-label>Label til tjekboks</fds-label>
        <fds-checkbox v-model="twoChecked" size="small"> Andet valg - small </fds-checkbox>
      </fds-formgroup>
      <fds-pre header="v-model" :json="{ oneChecked, twoChecked }" />
      <template #description>
        <p class="italic"><code>fds-checkbox </code> Enkeltstående checkboxe</p>
      </template>
      <template #code>
        <pre v-text="code2"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const oneChecked = ref(false);
const twoChecked = ref(false);

const code2 = `
<fds-checkbox v-model="oneChecked" class="mt-2">
  Et valg
  <template #content> Det er muligt at angive indhold </template>
</fds-checkbox>

<fds-formgroup>
  <fds-label>Label til tjekboks</fds-label>
  <fds-checkbox v-model="twoChecked" size="small"> Andet valg - small </fds-checkbox>
</fds-formgroup>
`;
</script>
