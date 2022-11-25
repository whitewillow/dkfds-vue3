<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <fds-fejlopsummering header="Fejl">
          <ul class="alert-text">
            <li>Egen liste</li>
            <li>Egen liste</li>
          </ul>
        </fds-fejlopsummering>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="codeManuelt"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const codeManuelt = `
<fds-fejlopsummering header="Fejl">
  <ul class="alert-text">
    <li>Egen liste</li>
    <li>Egen liste</li>
  </ul>
</fds-fejlopsummering>
`;
</script>
