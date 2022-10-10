<template>
  <div class="card">
    <slot name="custom" />

    <div class="card-content">
      <slot name="content" />
    </div>
    <div
      class="card-header"
      v-if="header">
      <h2 class="header-title">
        {{ header }}
      </h2>
      <p
        class="sub-header"
        v-if="subheader">
        {{ subheader }}
      </p>
    </div>

    <div class="card-text">
      <slot />
    </div>

    <div class="card-footer card-action">
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
import { defineProps } from 'vue';

defineProps({
  /**
   * Overskrift
   * */
  header: {
    type: String,
    default: null,
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