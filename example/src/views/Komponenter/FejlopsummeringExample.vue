<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-fejlopsummering>
        <template #header> template #header </template>
        <ul class="alert-text">
          <li>Egen liste</li>
          <li>Egen liste</li>
        </ul>
      </fds-fejlopsummering>

      <template #description>
        <p class="italic">
          Fejlopsummeringer bruges til at give overblik over fejl eller mangler, der skal rettes på
          en side eller et trin, før brugeren kan komme videre.
        </p>
        <p>
          Benyt entent <code>template #header</code> eller <b>prop </b>
          <code>:header="Fejlopsummering"</code>
        </p>
      </template>
      <template #code>
        <pre v-text="codeManuelt"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const codeManuelt = `
<fds-fejlopsummering>
  <template #header>
    Fejlopsummering
  </template>
  <ul class="alert-text">
    <li>Egen liste</li>
    <li>Egen liste</li>
  </ul>
</fds-fejlopsummering>
`;
</script>
