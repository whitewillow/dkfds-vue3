<template>
  <input
    class="form-range d-flex"
    :max="max"
    :min="min"
    :step="step"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="value"
    v-model="value"
    :id="formid"
    :name="formid"
    type="range"
    :style="{ backgroundSize: percent }"
    @input="handleInput"
    @blur="$emit('dirty', true)"/>
</template>

<script setup lang="ts">
/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
 *
 * */
import {
  defineProps, defineEmits, ref, watch, useAttrs, computed,
} from 'vue';
import getFormId from '@/composable/formId';

const attrs = useAttrs();

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
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

const { formid } = getFormId(props.id, true);
const value = ref(Number.isNaN(props.modelValue) ? 0 : props.modelValue);
const percent = computed(
  () => `${((value.value - props.min) * 100) / (props.max - props.min)}% 100%`,
);
const handleInput = () => emit('update:modelValue', value.value);

watch(
  () => [props.modelValue],
  () => {
    value.value = props.modelValue;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>