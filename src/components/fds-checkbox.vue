<template>
  <fieldset>
    <input
      :id="formid"
      type="checkbox"
      :checked="refValue"
      class="form-checkbox"
      :class="{ 'checkbox-large': size === 'large' }"
      @input="onInput"
      @blur="$emit('dirty', true)"
      :disabled="disabled"/>
    <label
      :for="formid"
      class="hand">
      <slot
        v-bind:id="formid"
        class="hand"></slot>
    </label>
    <div
      :id="`collapse-${formid}`"
      v-if="$slots.content"
      :aria-hidden="!refValue"
      class="checkbox-content checkbox-content-large">
      <slot name="content" />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, watch, PropType,
} from 'vue';
import getFormId from '@/composable/formId';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Vis som lille checkbox
   * */
  size: {
    type: String as PropType<'small' | 'large'>,
    default: 'large',
  },
  /**
   * Skal checkbox være disabled
   * */
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const { formid } = getFormId(props.id, true);
const refValue = ref(props.modelValue);

const onInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).checked);

watch(
  () => [props.modelValue],
  () => {
    refValue.value = props.modelValue;
  },
  {
    immediate: true,
  },
);
</script>