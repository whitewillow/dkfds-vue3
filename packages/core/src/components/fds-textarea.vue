<template>
  <textarea
    :id="formid"
    v-model="inputValue"
    class="form-input"
    :maxlength="maxlength"
    :rows="getRows"
    :name="formid"
    @blur="$emit('dirty', true)"
  ></textarea>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { formId } from 'dkfds-vue3-utils';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  id: {
    type: String,
    default: null,
  },
  rows: {
    type: Number,
    default: 5,
  },
  maxRows: {
    type: Number,
    default: 10,
  },
  rowlength: {
    type: Number,
    default: 80,
  },
  maxlength: {
    type: Number,
    default: 4000,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);

const { formid } = formId(props.id, true);

const getRows = computed(() => {
  if (!props.modelValue) {
    return props.rows;
  }
  const newlineRows = props.modelValue.split(/\r?\n/).length;

  const textLengthRow = Math.floor(props.modelValue.length / props.rowlength) + 1;
  const result = newlineRows > textLengthRow ? newlineRows : textLengthRow;

  if (result < props.maxRows) {
    return result < props.rows ? props.rows : result;
  }
  return props.maxRows;
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
