<template>
  <section>
    <fds-preview header="Eksempel">
      <fds-preview-item>
        <a href="#main-content" class="skipnav" style="position: relative; top: inherit"
          >Gå til sidens indhold</a
        >

        <fds-preview-code>
          <pre v-text="code"></pre>
        </fds-preview-code>
      </fds-preview-item>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
  <a href="#main-content" class="skipnav">Gå til sidens indhold</a>
`;
</script>
