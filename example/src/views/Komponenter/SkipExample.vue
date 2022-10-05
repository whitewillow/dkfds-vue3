<template>
  <section>
    <fds-component-preview header="Eksempel">
      <a href="#main-content" class="skipnav" style="position: relative; top: inherit"
        >Gå til sidens indhold</a
      >
      <template #description>
        <p class="italic">
          Benyt som angivet
          <a href="https://designsystem.dk/kode/komponenter/skip-link/">
            https://designsystem.dk/kode/komponenter/skip-link/</a
          >
        </p>
        <p>På sigt, vil denne indgår i layout komponenterne</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
  <a href="#main-content" class="skipnav">Gå til sidens indhold</a>
`;
</script>
