<template>
  <fieldset>
    <input
      :id="formId"
      type="checkbox"
      :checked="value"
      class="form-checkbox"
      :class="{ 'checkbox-large': !small }"
      @input="handleInput"
      @blur="$emit('dirty', true)"
      :disabled="disabled"/>
    <label
      :for="formId"
      class="hand">
      <section class="pl-2 hand">
        <slot
          v-bind:id="formId"
          class="hand"></slot>
      </section>
    </label>
  </fieldset>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed, watch,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).checked);

const formId = computed(() => props.id ?? uuidv4());

watch(
  () => [props.modelValue],
  () => {
    value.value = props.modelValue;
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss"></style>