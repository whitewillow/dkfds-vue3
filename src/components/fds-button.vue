<template>
  <button
    class="button"
    :class="`button-${variant}`"
    :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { FdsVariantEnum } from '@/model/fds.model';

const props = defineProps({
  variant: {
    type: String as PropType<FdsVariantEnum|string>,
    default: () => FdsVariantEnum.primary,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>