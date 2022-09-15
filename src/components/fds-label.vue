<template>
  <label class="form-label" :for="id"> <slot /> </label>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="scss"></style>