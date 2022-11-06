<template>
  <div class="row row-bordered no-gutters">
    <div
      class="col-12 col-md-4"
      v-if="$slots.header || header">
      <slot name="header">
        <span class="weight-semibold">
          {{ header }}
        </span>
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
import { defineProps, provide, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  header: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
});
/**
 * Form id der bruges i slots
 * eg. label for input element
 */
const formid = ref(props.id ?? uuidv4());
/**
 * Provide for underliggende elementer
 * eg. label for input element
 */
provide('formid', formid);
</script>

<style scoped lang="scss"></style>