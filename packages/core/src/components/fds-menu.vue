<template>
  <ul
    :class="cssClass"
    role="menu">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps({
  variant: {
    type: String as () => 'venstremenu' | 'trin' | 'submenu',
    default: null,
  },
});

const cssClass = computed(() => {
  if (props.variant === 'submenu') {
    return 'sidenav-sub_list';
  }
  return 'sidenav-list';
});
</script>

<style scoped lang="scss"></style>
