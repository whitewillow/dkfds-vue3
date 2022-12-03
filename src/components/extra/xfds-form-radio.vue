<template>
  <xfds-form-group
    v-bind="{
      label,
      hint,
      tooltip,
      isValid,
      errorMessage,
    }">
    <ul
      class="nobullet-list"
      :id="formid">
      <li
        v-for="(radio, index) of options"
        :key="index">
        <input
          type="radio"
          class="form-radio radio-large"
          :id="'radio-' + formid + '-' + index"
          :name="'radio' + formid"
          :value="radio.value"
          :disabled="radio.disabled"
          :checked="value === radio.value.toString()"
          @change="handleInput"
          @blur="touchedEvent"/>
        <label :for="'radio-' + formid + '-' + index">
          {{ radio.title }}
        </label>

        <div
          class="radio-content mt-2 ml-4 py-4"
          v-if="$slots[radio.value] && modelValue === radio.value.toString()">
          <slot
            :name="radio.value"
            v-bind:radiovalue="value" />
        </div>
      </li>
    </ul>
  </xfds-form-group>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, PropType, ref, watch,
} from 'vue';
import { FdsOptionItem } from '@/model/fds.model';
import getFormId from '@/composable/formId';

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

const { formid } = getFormId(props.id, true);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);

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