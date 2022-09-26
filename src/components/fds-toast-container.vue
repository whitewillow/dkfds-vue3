<template>
  <div
    class="toast-container"
    :id="id"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  id: {
    type: String,
    default: 'main-toaster',
  },
  position: {
    type: String,
    default: 'top-right',
  },
});
</script>

<style scoped lang="scss"></style>