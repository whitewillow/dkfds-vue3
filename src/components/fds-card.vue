<template>
  <div
    class="card"
    :class="{ 'card-align-height': alignHeight }">
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
import {
  computed, defineProps, ref, watch,
} from 'vue';

const props = defineProps({
  alignHeight: {
    type: Boolean,
    default: false,
  },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>