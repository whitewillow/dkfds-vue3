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
        v-for="(checkbox, index) of value"
        :key="index">
        <input
          v-model="checkbox.checked"
          type="checkbox"
          class="form-checkbox checkbox-large"
          :id="'checkbox-' + formid + '-' + index"
          :name="'checkbox' + formid"
          :disabled="checkbox.disabled"
          @change="handleInput"
          @blur="touchedEvent"/>
        <label :for="'checkbox-' + formid + '-' + index">
          {{ checkbox.title }}
        </label>

        <div
          class="checkbox-content mt-2 ml-4 py-4"
          v-if="$slots[checkbox.value] && checkbox.checked">
          <slot
            :name="checkbox.value"
            v-bind:checkboxvalue="value" />
        </div>
      </li>
    </ul>
  </xfds-form-group>
</template>

<script setup lang="ts">
import {
  defineEmits, defineProps, PropType, ref, watch,
} from 'vue';
import { FdsCheckboxItem } from '@/model/fds.model';
import getFormId from '@/composable/formId';

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<FdsCheckboxItem>>,
    required: true,
    default: () => [],
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
});

const emit = defineEmits(['update:modelValue', 'dirty', 'valid', 'input']);

const dirty = ref(false);

const touchedEvent = () => {
  dirty.value = true;
  emit('dirty', true);
};

const value = ref(props.modelValue);
const { formid } = getFormId(undefined, true);

const handleInput = () => {
  emit('update:modelValue', value.value);
};

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