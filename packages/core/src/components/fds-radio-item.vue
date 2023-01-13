<template>
  <li>
    <input
      :id="'radio-' + formid + '-' + indexId"
      type="radio"
      :name="'radio' + formid"
      :value="value"
      :checked="value === injGroupValue"
      class="form-radio radio-large"
      @change="handleInput"
      @blur="$emit('dirty', true)"
    />
    <label :for="'radio-' + formid + '-' + indexId">
      <slot />
    </label>

    <div
      v-if="$slots.content && injGroupValue === value.toString()"
      class="radio-content mt-2 ml-4 py-4"
    >
      <slot name="content" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, inject } from 'vue';
import { formId } from 'dkfds-vue3-utils';

import { generateId } from 'dkfds-vue3-utils';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['dirty']);
const injGroupEmit = inject<(x: string) => void>('provideGroupEmit');
const injGroupValue = inject<string | null>('provideGroupValue');
const { formid } = formId(props.id);
const indexId = generateId(props.index);

const handleInput = (event: Event) => {
  emit('dirty', true);
  if (injGroupEmit) {
    injGroupEmit((event?.target as HTMLInputElement).value);
  }
};
</script>

<style scoped lang="scss"></style>
