<template>
  <fieldset>
    <input
      :id="formid"
      type="checkbox"
      class="form-checkbox"
      :checked="refValue"
      :class="{ 'checkbox-large': size === 'large' }"
      v-bind="attrs"
      @input="onInput"
      @blur="$emit('dirty', true)"
    />
    <label
      :for="formid"
      class="hand">
      <slot
        :id="formid"
        class="hand"></slot>
    </label>
    <div
      v-if="$slots.content"
      :id="`collapse-${formid}`"
      :aria-hidden="!refValue"
      class="checkbox-content checkbox-content-large"
    >
      <slot name="content" />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, PropType, useAttrs } from 'vue';
import { formId } from 'dkfds-vue3-utils';

const attrs = useAttrs();

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
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const { formid } = formId(props.id, true);
const refValue = ref(props.modelValue);

const onInput = (event: Event) =>
  emit('update:modelValue', (event?.target as HTMLInputElement).checked);

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
