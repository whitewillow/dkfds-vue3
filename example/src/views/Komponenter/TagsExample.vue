<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-tag>Bornholm</fds-tag>
      <fds-tag icon="highlight-off"> Sjælland </fds-tag>
      <fds-tag>Fyn</fds-tag>
      <fds-tag>Jylland</fds-tag>

      <template #description>
        <p class="italic">
          <code>fds-tag</code> er en mindre knap, som du kan bruge til at angive metainformation om
          indhold, der kan kategoriseres, filtreres eller på anden vis beskrives med nøgleord. Tags
          forekommer med og uden ikon.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>

    <fds-component-preview header="Tag med icon">
      <fds-tag icon="highlight-off" @click.self="handleKnapClick" @iconClick="handleIconClick">
        Bornholm
      </fds-tag>

      <fds-pre header="Klik event" :json="{ antalIconClick, antalKnapClick }" />

      <template #description>
        <p class="italic">
          <code>fds-tag</code> er en mindre knap, som du kan bruge til at angive metainformation om
          indhold, der kan kategoriseres, filtreres eller på anden vis beskrives med nøgleord. Tags
          forekommer med og uden ikon.
        </p>
      </template>
      <template #code>
        <pre v-text="codeTagIcon"></pre>
      </template>
    </fds-component-preview>
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
