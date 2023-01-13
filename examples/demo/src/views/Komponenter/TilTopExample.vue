<template>
  <section>
    <fds-preview
      header="Eksempel"
      href="https://designsystem.dk/komponenter/tilbage-til-top/">
      <fds-preview-item>
        <fds-til-top class="example_tiltop" />

        <p>se også bund højre side</p>
      </fds-preview-item>

      <fds-preview-code>
        <pre v-text="code"></pre>
      </fds-preview-code>
    </fds-preview>
  </section>
</template>

<script setup lang="ts">
const code = `
<footer>
  <fds-til-top />
  ...
</footer>

`;
</script>

<style lang="scss" scoped>
.example_tiltop {
  position: relative;
  right: auto;
  bottom: auto;
  left: auto;
  top: auto;
  z-index: 1;
}
</style>
