<template>
  <section>
    <fds-component-preview header="Eksempel">
      <fds-til-top class="example_tiltop" />

      <p>se også bund højre side</p>

      <template #description>
        <p class="italic">
          <code>fds-til-top</code> er umiddelt enkeltstående og skal kun inkluderes en gang i
          <code>footer</code>
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
