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
    <ul
      :id="formid"
      class="nobullet-list">
      <li
        v-for="(radio, index) of options"
        :key="index">
        <input
          :id="'radio-' + formid + '-' + index"
          type="radio"
          class="form-radio radio-large"
          :name="'radio' + formid"
          :value="radio.value"
          :disabled="radio.disabled"
          :checked="value === radio.value.toString()"
          @change="handleInput"
          @blur="touchedEvent"
        />
        <label :for="'radio-' + formid + '-' + index">
          {{ radio.title }}
        </label>

        <div
          v-if="$slots[radio.value] && modelValue === radio.value.toString()"
          class="radio-content mt-2 ml-4 py-4"
        >
          <slot
            :name="radio.value"
            :radiovalue="value" />
        </div>
      </li>
    </ul>
  </xfds-form-group>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, PropType, ref, watch } from 'vue';
import { FdsOptionItem } from 'dkfds-vue3-utils';
import { formId } from 'dkfds-vue3-utils';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
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
    default: '',
  },
  options: {
    type: Array as PropType<FdsOptionItem[]>,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue', 'dirty', 'valid', 'input']);

const value = ref(props.modelValue);
const dirty = ref(false);

const touchedEvent = () => {
  dirty.value = true;
};

const { formid } = formId(props.id, true);

const handleInput = (event: Event) =>
  emit('update:modelValue', (event?.target as HTMLInputElement).value);

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
