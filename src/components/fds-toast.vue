<template>
  <teleport :to="`#${target}`">
    <div
      class="toast toast-info show"
      role="status">
      <div class="toast-icon"></div>
      <div class="toast-message">
        <p class="bold">
          Du har fået en besked
        </p>
        <button class="toast-close">
          Luk
        </button>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium.
        </p>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  target: {
    type: String,
    default: 'main-toaster',
  },
});
</script>

<style scoped lang="scss"></style>