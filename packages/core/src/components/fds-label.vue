<template>
  <label
    class="form-label"
    :for="formid">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { formId } from 'dkfds-vue3-utils';

import { defineProps } from 'vue';

const props = defineProps({
  forId: {
    type: String,
    default: null,
  },
});

const { formid } = formId(props.forId);
</script>

<style scoped lang="scss"></style>
