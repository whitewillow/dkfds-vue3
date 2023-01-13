<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/spinner/">
      <fds-preview-item>
        <div>
          <fds-spinner></fds-spinner>
        </div>

        <hr />
        <div class="col">
          <fds-spinner>Arbejder</fds-spinner>
        </div>
        <hr />

        <div class="col">
          <fds-spinner class="spinner spinner-small"></fds-spinner>
        </div>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
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
