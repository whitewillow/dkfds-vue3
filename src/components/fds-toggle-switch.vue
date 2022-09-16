<template>
  <div class="form-group mb-4">
    <input
      :id="formId"
      type="checkbox"
      name="toggle-example"
      :checked="modelValue"
      @input="handleInput"
      :disabled="disabled"
      class="form-toggle"/>
    <label
      :for="formId"
      class="form-toggle-label"
      :data-toggle-off-text="toggleOffText"
      :data-toggle-on-text="toggleOnText">
      <section class="pl-2 hand">
        <slot
          v-bind:id="formId"
          class="hand">
        </slot></section></label>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  toggleOffText: {
    type: String,
    default: 'Fra',
  },
  toggleOnText: {
    type: String,
    default: 'Til',
  },
});

const emit = defineEmits(['update:modelValue', 'input']);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).checked);

const formId = computed(() => props.id ?? uuidv4());
</script>

<style scoped lang="scss"></style>