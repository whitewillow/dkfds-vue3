<template>
  <div class="card">
    <slot name="custom" />
    <!-- Alt i denne div er blot et eksempel. Visse klasser er ikke en del af FDS. -->

    <div class="card-content">
      <slot name="content" />
    </div>
    <div
      class="card-header"
      v-if="overskrift">
      <h2 class="header-title">
        {{ overskrift }}
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
import { defineProps } from 'vue';

const props = defineProps({
  overskrift: {
    type: String,
    default: null,
  },
  subheader: {
    type: String,
    default: null,
  },
});
</script>