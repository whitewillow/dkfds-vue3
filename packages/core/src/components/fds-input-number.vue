<template>
  <div :class="`${cssClass}`">
    <div
      v-if="prefix"
      class="form-input-prefix"
      aria-hidden="true">
      {{ prefix }}
    </div>
    <input
      :id="formid"
      v-model="inputValue"
      class="form-input d-flex"
      :class="inputClass"
      :name="formid"
      type="number"
      :readonly="props.readonly"
      @blur="$emit('dirty', true)"
      @focus="($event.target as any).select()"
    />
    <div
      v-if="suffix"
      class="form-input-suffix"
      aria-hidden="true">
      {{ suffix }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';
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
  suffix: {
    type: String,
    default: null,
  },
  prefix: {
    type: String,
    default: null,
  },
  inputClass: {
    type: String,
    default: undefined,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);

const { formid } = formId(props.id, true);

const cssClass = computed((): string => {
  if (props.suffix) {
    return 'form-input-wrapper form-input-wrapper--suffix';
  }
  if (props.prefix) {
    return 'form-input-wrapper form-input-wrapper--prefix';
  }
  return 'flex-items-center';
});

const inputValue = computed({
  get() {
    return Number.isNaN(props.modelValue) ? 0 : props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>

<style scoped lang="scss"></style>
