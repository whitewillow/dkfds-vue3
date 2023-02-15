<template>
  <div :class="`${cssClass}`">
    <div
      v-if="prefix"
      class="form-input-prefix"
      aria-hidden="true">
      {{ prefix }}
    </div>
    <input
      v-bind="attrs"
      :id="formid"
      v-model="inputValue"
      type="text"
      class="form-input d-flex"
      :name="formid"
      @blur="$emit('dirty', true)"
    />
    <div
      v-if="suffix"
      class="form-input-suffix"
      aria-hidden="true">
      {{ suffix }}
    </div>
    <slot name="button" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, useSlots, useAttrs } from 'vue';
import { formId } from 'dkfds-vue3-utils';

const attrs = useAttrs();

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    default: '',
  },
  suffix: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);
const slots = useSlots();

const { formid } = formId(props.id, true);

const cssClass = computed((): string => {
  if (props.suffix) {
    return 'form-input-wrapper form-input-wrapper--suffix';
  }
  if (props.prefix) {
    return 'form-input-wrapper form-input-wrapper--prefix';
  }
  if (slots.button) {
    return 'search';
  }
  return 'flex-items-center';
});

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>

<style scoped lang="scss"></style>
