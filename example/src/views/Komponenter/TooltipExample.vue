<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-tooltip> Hjælpende <b>tekst</b> </fds-tooltip>
      <template #description>
        <p class="italic"><code>fds-tooltip</code> laver et tooltip, med tilhørende tekst</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-tooltip>
  Hjælpende <b>tekst</b>
</fds-tooltip>
`;
</script>
