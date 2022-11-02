<template>
  <section>
    <fds-component-preview header="Eksempel">
      <div>
        <fds-spinner></fds-spinner>
      </div>

      <hr>
      <div class="col">
        <fds-spinner>Arbejder</fds-spinner>
      </div>
      <hr>

      <div class="col">
        <p class="form-label d-flex justify-content-start">
          <span>Super</span>
          <fds-spinner class="spinner spinner-small d-inline-flex ml-4"></fds-spinner>
        </p>
      </div>

      <template #description>
        <p class="italic">Alm spinner</p>
      </template>
      <template #code>
        <pre v-text="code"></pre>
      </template>
    </fds-component-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<fds-spinner></fds-spinner>

<fds-spinner>Arbejder</fds-spinner>

<p class="form-label d-flex justify-content-start">
  <span>Super</span>
  <fds-spinner class="spinner spinner-small d-inline-flex ml-4"></fds-spinner>
</p>
`;
</script>
