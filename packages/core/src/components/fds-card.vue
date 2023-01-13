<template>
  <div class="card">
    <slot name="custom" />

    <div
      v-if="$slots.content"
      class="card-content">
      <slot name="content" />
    </div>

    <div
      v-if="$slots.header || header"
      class="card-header">
      <slot name="header">
        <component
          :is="headerTag"
          class="header-title">
          {{ header }}
        </component>
        <p
          v-if="subheader"
          class="sub-header">
          {{ subheader }}
        </p>
      </slot>
    </div>

    <div class="card-text">
      <slot />
    </div>

    <div
      v-if="$slots.actions"
      class="card-footer card-action">
      <div class="action-buttons">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for card
 * https://designsystem.dk/komponenter/cards/
 *
 * */
import { defineProps, PropType } from 'vue';

defineProps({
  /**
   * Overskrift
   * */
  header: {
    type: String,
    default: null,
  },
  headerTag: {
    type: String as PropType<'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    default: 'h2',
    validator(value: string) {
      return ['h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
    },
  },
  /**
   * Under overskrift
   * */
  subheader: {
    type: String,
    default: null,
  },
});
</script>
