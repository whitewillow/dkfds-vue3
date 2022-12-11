<template>
  <select
    class="form-select"
    :class="{ dirty: dirty }"
    :name="formid"
    ref="refElement"
    :id="formid"
    v-bind="refValue"
    @change="onInput"
    @blur="onDirty"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
import { formId } from "dkfds-vue3-utils";

import { defineProps, defineEmits, ref, onMounted } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "dirty", "change"]);

const { formid } = formId(props.id, true);
const refElement = ref(null);
const refValue = ref(props.modelValue);
const dirty = ref(false);

const onInput = (event: Event) =>
  emit("update:modelValue", (event?.target as HTMLInputElement).value);
const onDirty = () => {
  dirty.value = true;
  emit("dirty", true);
};

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (refElement.value as any).dispatchEvent(new Event("change"));
});
</script>

<style scoped lang="scss"></style>
