<template>
  <section>
    <fds-component-preview header="Eksempel">
      <p>
        <fds-badge class="mr-4"> Normal </fds-badge>
        <fds-badge size="small"> small </fds-badge>
      </p>
      <p>
        <fds-badge class="mr-4" variant="success"> success </fds-badge>
        <fds-badge class="mx-4" variant="info"> success </fds-badge>
        <fds-badge class="mx-4" variant="warning"> warning </fds-badge>
        <fds-badge class="mx-4" variant="error"> error </fds-badge>
      </p>

      <template #description>
        <p class="italic">
          Badges er grafiske markører, som du kan bruge til at gøre opmærksom på nyt eller vigtigt
          indhold.
        </p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-badge class="mr-4"> Normal </fds-badge>
<fds-badge size="small"> Normal small </fds-badge>
<fds-badge variant="success"> success </fds-badge>
<fds-badge variant="info"> success </fds-badge>
<fds-badge variant="warning"> warning </fds-badge>
<fds-badge variant="error"> error </fds-badge>

`;
</script>
