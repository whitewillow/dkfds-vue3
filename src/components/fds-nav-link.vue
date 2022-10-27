<template>
  <a
    v-if="!isDisabled"
    href="javascript:void(0);"
    class="nav-link"
    role="menuitem">
    <span>
      <slot />
    </span>
  </a>
  <div
    v-else
    class="nav-link nav-link-disabled disabled">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>