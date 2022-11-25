<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-checkbox v-model="oneChecked" class="mt-2">
          Et valg
          <template #content> Det er muligt at angive indhold </template>
        </fds-checkbox>
        <fds-formgroup>
          <fds-label>Label til tjekboks</fds-label>
          <fds-checkbox v-model="twoChecked" size="small"> Andet valg - small </fds-checkbox>
        </fds-formgroup>
        <fds-pre header="v-model" :json="{ oneChecked, twoChecked }" />
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code2"></pre>
      </fds-preview-code>
    </fds-preview>
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
