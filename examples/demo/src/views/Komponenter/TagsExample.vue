<template>
  <section>
    <fds-preview header="Eksempel" href="https://designsystem.dk/komponenter/tags/">
      <fds-preview-item>
        <fds-tag>Bornholm</fds-tag>
        <fds-tag icon="highlight-off"> Sjælland </fds-tag>
        <fds-tag>Fyn</fds-tag>
        <fds-tag>Jylland</fds-tag>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>

    <fds-preview header="Tag med icon">
      <fds-preview-item>
        <fds-tag icon="highlight-off" @click.self="handleKnapClick" @iconClick="handleIconClick">
          Bornholm
        </fds-tag>

        <fds-pre header="Klik event" :json="{ antalIconClick, antalKnapClick }" />
      </fds-preview-item>
      <fds-preview-code>
        <pre v-text="codeTagIcon"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const antalIconClick = ref(0);
const antalKnapClick = ref(0);
const handleIconClick = () => {
  antalIconClick.value += 1;
};
const handleKnapClick = () => {
  antalKnapClick.value += 1;
};

const code = `
<fds-tag>Bornholm</fds-tag>
`;

const codeTagIcon = `
<fds-tag icon="highlight-off" @click.self="handleKnapClick" @iconClick="handleIconClick">
  Bornholm
</fds-tag>
`;
</script>
