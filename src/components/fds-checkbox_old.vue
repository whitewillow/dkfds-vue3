<template>
  <fieldset>
    <input
      :id="formId"
      type="checkbox"
      :checked="refValue"
      class="form-checkbox"
      :class="{ 'checkbox-large': !isSmall }"
      @input="onInput"
      @blur="$emit('dirty', true)"
      :disabled="isDisabled"/>
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
  /**
   * Vis som lille checkbox
   * */
  isSmall: {
    type: Boolean,
    default: false,
  },
  /**
   * Skal checkbox være disabled
   * */
  isDisabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const refValue = ref(props.modelValue);

const onInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).checked);

const formId = computed(() => props.id ?? uuidv4());

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