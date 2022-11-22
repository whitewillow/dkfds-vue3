<template>
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
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const { formid } = getFormId(props.id);
const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);
</script>

<style scoped lang="scss"></style>