<template>
  <header class="header">
    <div id="top"></div>
    <a
      class="skipnav"
      href="#main-content">
      {{ skipNavigationsTekst }}
    </a>
    <slot />
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  skipNavigationsTekst: {
    type: String,
    default: 'Gå til sidens indhold', // primary|secondary|
  },
});
</script>
<style lang="scss" scoped></style>