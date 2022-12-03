<template>
  <textarea
    class="form-input"
    v-model="val"
    :maxlength="maxlength"
    :rows="getRows"
    :name="formid"
    :id="formid"
    @input="handleInput"
    @blur="$emit('dirty', true)"></textarea>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed, watch,
} from 'vue';
import getFormId from '@/composable/formId';

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

const { formid } = getFormId(props.id, true);
const val = ref(props.modelValue);

const handleInput = () => emit('update:modelValue', val.value);

const getRows = computed(() => {
  if (!val.value) {
    return props.rows;
  }
  const newlineRows = val.value.split(/\r?\n/).length;

  const textLengthRow = Math.floor(val.value.length / props.rowlength) + 1;
  const result = newlineRows > textLengthRow ? newlineRows : textLengthRow;

  if (result < props.maxRows) {
    return result < props.rows ? props.rows : result;
  }
  return props.maxRows;
});

watch(
  () => [props.modelValue],
  () => {
    val.value = props.modelValue;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>