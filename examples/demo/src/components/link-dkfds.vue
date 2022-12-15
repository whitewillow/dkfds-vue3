<template>
  <custom-tooltip tooltip-tekst="Det Fælles Designsystem">
    <slot>
      <a
        class="dkfds-link"
        target="dkfds"
        href="https://designsystem.dk/">
        DKFDS
      </a>
    </slot>
  </custom-tooltip>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.dkfds-link {
  text-decoration: none;
  border-bottom: 2px dashed #0059b3;
  font-weight: 500;
  &:visited {
    color: black;
  }
}
</style>
