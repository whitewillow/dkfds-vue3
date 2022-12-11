<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }"
  >
    <xfds-dropdown
      v-bind="attrs"
      :options="options"
      v-model="value"
      @update:modelValue="handleInput"
      @dirty="touchedEvent"
    />
  </xfds-form-group>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, PropType, ref, useAttrs, watch } from "vue";
import { FdsOptionItem } from "dkfds-vue3-utils";

const attrs = useAttrs();

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  tooltip: {
    type: String,
    default: null,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array as PropType<FdsOptionItem[]>,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "dirty", "valid", "input"]);

const value = ref(props.modelValue);
const dirty = ref(false);

const touchedEvent = () => {
  dirty.value = true;
  emit("dirty", true);
};

const handleInput = () => emit("update:modelValue", value.value);

watch(
  () => [props.modelValue],
  () => {
    value.value = props.modelValue;
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="scss"></style>
