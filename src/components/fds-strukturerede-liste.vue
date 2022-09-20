<template>
  <div class="row row-bordered no-gutters">
    <div class="col-12 col-md-4 weight-semibold">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div
      class="col-12"
      :class="[{ 'col-md-6': $slots.button }, { 'col-md-8': !$slots.button }]">
      <slot />
    </div>
    <div
      class="col-12 col-md-2 align-text-md-right"
      v-if="$slots.button">
      <slot name="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FdsNavigationStep } from '@/model/fds.model';
import {
  computed, defineProps, ref, useSlots,
} from 'vue';

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss"></style>