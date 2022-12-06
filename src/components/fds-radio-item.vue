<template>
  <li>
    <input
      :id="'radio-' + formid + '-' + indexId"
      type="radio"
      :name="'radio' + formid"
      :value="value"
      :checked="value === injGroupValue"
      @change="handleInput"
      @blur="$emit('dirty', true)"
      class="form-radio radio-large"/>
    <label :for="'radio-' + formid + '-' + indexId">
      <slot />
    </label>

    <div
      class="radio-content mt-2 ml-4 py-4"
      v-if="$slots.content && injGroupValue === value.toString()">
      <slot name="content" />
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, inject } from 'vue';
import getFormId from '@/composable/formId';
import getComputedId from '@/composable/getComputedId';

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
const { formid } = getFormId(props.id);
const indexId = getComputedId(props.index);

const handleInput = (event: Event) => {
  emit('dirty', true);
  if (injGroupEmit) {
    injGroupEmit((event?.target as HTMLInputElement).value);
  }
};
</script>

<style scoped lang="scss"></style>