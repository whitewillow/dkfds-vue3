<template>
  <div
    class="form-group"
    :key="formid"
    :class="{ 'form-error': isValid === false }">
    <slot :formid="formid" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, provide, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  isValid: {
    type: Boolean,
    default: true,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>