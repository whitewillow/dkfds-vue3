<template>
  <input
    :id="formid"
    v-model="value"
    class="form-range d-flex"
    :max="max"
    :min="min"
    :step="step"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="value"
    :name="formid"
    type="range"
    :style="{ backgroundSize: percent }"
    @input="handleInput"
    @blur="$emit('dirty', true)"
  />
</template>

<script setup lang="ts">
/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
 *
 * */
import { defineProps, defineEmits, ref, watch, computed } from 'vue';
import { formId } from 'dkfds-vue3-utils';
const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
});
const emit = defineEmits(['update:modelValue', 'dirty', 'input']);
const { formid } = formId(props.id, true);
const value = ref(Number.isNaN(props.modelValue) ? 0 : Number(props.modelValue));
const percent = computed(
  () => `${((value.value - props.min) * 100) / (props.max - props.min)}% 100%`,
);
const handleInput = () => emit('update:modelValue', value.value);
watch(
  () => [props.modelValue],
  () => {
    value.value = Number.isNaN(props.modelValue) ? 0 : Number(props.modelValue);
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>
