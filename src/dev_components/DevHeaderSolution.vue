<template>
  <div class="solution-header">
    <div class="container solution-header-inner">
      <div class="solution-heading">
        <slot />
      </div>

      <!--2B: Solution header: Authority name + text -->
      <div class="solution-info">
        <p class="h5 authority-name">Myndighedsnavn</p>
        <p>
          <slot name="myndighed" />
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  skipNavigationsTekst: {
    type: String,
    default: 'Gå til sidens indhold', // primary|secondary|
  },
});
</script>
<style lang="scss" scoped></style>