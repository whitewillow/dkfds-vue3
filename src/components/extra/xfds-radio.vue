<template>
  <fieldset>
    <legend class="form-label">
      <slot name="label">
        {{label}}
      </slot>
    </legend>
    <ul
      class="nobullet-list"
      :id="formid">
      <li
        v-for="(radio, index) of list"
        :key="index">
        <input
          :id="'radio-' + formid + '-' + index"
          type="radio"
          :name="'radio' + formid"
          :value="radio.value"
          :disabled="radio.disabled"
          :checked="value === radio.value.toString()"
          @change="handleInput"
          @blur="$emit('dirty', true)"
          class="form-radio radio-large"/>
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
  </fieldset>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, PropType,
} from 'vue';
import { FdsOptionItem } from '@/model/fds.model';
import getFormId from '@/composable/formId';

const props = defineProps({
  modelValue: {
    type: String,
  },
  list: {
    type: Array as PropType<Array<FdsOptionItem>>,
    required: true,
    default: () => [],
  },
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    required: true,
    validator (value: string) {
      return value?.length > 0;
    },
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const { formid } = getFormId(props.id);
const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>