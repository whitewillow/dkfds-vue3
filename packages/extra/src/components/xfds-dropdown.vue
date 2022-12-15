<template>
  <select
    :id="formid"
    class="form-select"
    :name="formid"
    v-bind="refValue"
    @change="onInput"
    @blur="onDirty"
  >
    <option
      v-if="optionHeader"
      :value="refValue">
      {{ optionHeader }}
    </option>
    <option
      v-for="(o, i) in options"
      :key="i"
      :value="o.value"
      :disabled="o.disabled"
      :selected="o.value === refValue"
    >
      {{ o.title }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import { FdsOptionItem } from 'dkfds-vue3-utils';
import { formId } from 'dkfds-vue3-utils';

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
   * Dropdown options / valgmuligheder
   * */
  options: {
    type: Array as () => Array<FdsOptionItem>,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'change']);

const refValue = ref(props.modelValue);
const { formid } = formId(props.id, true);

const onDirty = () => {
  emit('dirty', true);
};

const onInput = (event: Event) =>
  emit('update:modelValue', (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>
