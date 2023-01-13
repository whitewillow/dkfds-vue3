<template>
  <select
    :id="formid"
    ref="refElement"
    class="form-select"
    :class="{ dirty: dirty }"
    :name="formid"
    @change="onInput"
    @blur="onDirty"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
import { formId } from 'dkfds-vue3-utils';

import { defineProps, defineEmits, ref, onMounted } from 'vue';

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
});

const emit = defineEmits(['update:modelValue', 'dirty', 'change']);

const { formid } = formId(props.id, true);
const refElement = ref(null);
const dirty = ref(false);

const onInput = (event: Event) =>
  emit('update:modelValue', (event?.target as HTMLInputElement).value);
const onDirty = () => {
  dirty.value = true;
  emit('dirty', true);
};

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (refElement.value as any).dispatchEvent(new Event('change'));
});
</script>

<style scoped lang="scss"></style>
