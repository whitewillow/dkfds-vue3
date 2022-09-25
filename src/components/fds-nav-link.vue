<template>
  <li
    role="none"
    :class="[{ current: isActive }]">
    <a
      v-if="!disabled"
      href="javascript:void(0);"
      class="nav-link"
      role="menuitem"
      :title="linkTitle">
      <span>
        <slot />
      </span>
    </a>
    <div
      v-else
      class="nav-link nav-link-disabled disabled">
      <slot />
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  linkTitle: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>