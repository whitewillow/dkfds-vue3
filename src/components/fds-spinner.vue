<template>
  <div
    class="spinner"
    v-bind="$attr"></div>
  <div
    class="spinner-status"
    role="status"
    v-if="$slots.default">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationStep } from '@/model/fds.model';
import {
  computed, defineProps, ref, useSlots,
} from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: null,
  },
});
</script>

<style scoped lang="scss"></style>