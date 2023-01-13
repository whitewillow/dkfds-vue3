<template>
  <div class="form-group mb-4">
    <input
      :id="formid"
      type="checkbox"
      name="toggle-example"
      :checked="modelValue"
      :disabled="disabled"
      class="form-toggle"
      @input="handleInput"
    />
    <label
      :for="formid"
      class="form-toggle-label"
      :data-toggle-off-text="offText"
      :data-toggle-on-text="onText"
    >
      <section class="pl-2 hand">
        <slot
          :id="formid"
          class="hand">
        </slot></section
      ></label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

import { formId } from 'dkfds-vue3-utils';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  offText: {
    type: String,
    default: 'Fra',
  },
  onText: {
    type: String,
    default: 'Til',
  },
});

const emit = defineEmits(['update:modelValue', 'input']);

const handleInput = (event: Event) =>
  emit('update:modelValue', (event?.target as HTMLInputElement).checked);

const { formid } = formId(props.id, true);

// onMounted(() => {
//   const toggle = new DKFDSToggle(document.getElementById(formid.value));
// });
</script>

<style lang="scss" scoped>
// TODO: scoped virker ikke med npm publish
input[type='checkbox'].form-toggle ~ .form-toggle-label:before {
  content: attr(data-toggle-off-text);
}
input[type='checkbox'].form-toggle:checked ~ .form-toggle-label:before {
  content: attr(data-toggle-on-text);
  left: 27px;
}
</style>
