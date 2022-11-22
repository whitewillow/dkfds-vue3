<template>
  <select
    class="form-select"
    :class="{ dirty: dirty }"
    :disabled="isDisabled"
    :name="formid"
    :id="formid"
    v-bind="refValue"
    @change="onInput"
    @blur="onDirty">
    <option
      :value="refValue"
      v-if="optionHeader">
      {{ optionHeader }}
    </option>
    <option
      v-for="(o, i) in options"
      :value="o.value"
      :key="i"
      :disabled="o.disabled"
      :selected="o.value === refValue">
      {{ o.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { FdsOptionItem } from '@/model/fds.model';
import getFormId from '@/composable/formId';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  /**
   * Første option - default: Vælg
   * */
  optionHeader: {
    type: String,
    default: 'Vælg',
  },
  /**
   * Disable dropdown
   * */
  isDisabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Dropdown options / valgmuligheder
   * */
  options: {
    type: Array as () => Array<FdsOptionItem>,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'change']);

const refValue = ref(props.modelValue);
const { formid } = getFormId(props.id, true);
const dirty = ref(false);

const onDirty = () => {
  dirty.value = true;
  emit('dirty', true);
};

const onInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>