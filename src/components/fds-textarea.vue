<template>
  <textarea
    class="form-input"
    :class="inputClass"
    v-model="val"
    :maxlength="maxLength"
    :rows="getRows"
    :name="formid"
    :id="formid"
    :placeholder="placeholder"
    @input="handleInput"
    @blur="$emit('dirty', true)"
    :disabled="isDisabled"></textarea>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed, watch,
} from 'vue';
import fdsTextareaProps from '@/props/fds-texarea.props';
import getFormId from '@/composable/formId';

const props = defineProps({ ...fdsTextareaProps });

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);

const { formid } = getFormId(props.id, true);
const val = ref(props.modelValue);

const handleInput = () => emit('update:modelValue', val.value);

const getRows = computed(() => {
  if (!val.value) {
    return props.rows;
  }

  let result = Math.floor(val.value.length / props.rowlength) + 1;
  result = result >= props.rows ? result : props.rows;

  return result <= 10 ? result : 10;
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