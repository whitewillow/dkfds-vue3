<template>
  <a
    v-if="!disabled"
    href="#"
    class="nav-link"
    role="menuitem"
    @click="$event.preventDefault()">
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
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>
