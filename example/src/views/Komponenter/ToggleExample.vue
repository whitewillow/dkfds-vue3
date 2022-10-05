<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-toggle-switch v-model="toggleswitch" />

      <div>
        <fds-pre header="v-model" :json="{ toggleswitch }" />
      </div>

      <template #description>
        <p class="italic">
          En toggle switch er en digital tænd/sluk-knap. Til forskel fra en radioknap eller tjekboks
          træder valget i kraft i det øjeblik brugerne interagerer med komponenten.
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

const toggleswitch = ref(false);

const code = `
<fds-toggle-switch v-model="toggleswitch" />
`;
</script>
