<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-toggle-switch v-model="toggleswitch" />

        <div>
          <fds-pre header="v-model" :json="{ toggleswitch }" />
        </div>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const toggleswitch = ref(false);

const code = `
<fds-toggle-switch v-model="toggleswitch" />
`;
</script>
