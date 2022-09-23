<template>
  <ul
    class="nobullet-list"
    :id="formId">
    <li
      v-for="(radio, index) of list"
      :key="index">
      <input
        :id="'radio-' + formId + '-' + index"
        type="radio"
        :name="'radio' + formId"
        :value="radio.value"
        :disabled="radio.disabled"
        :checked="value === radio.value.toString()"
        @change="handleInput"
        @blur="$emit('dirty', true)"
        class="form-radio radio-large"/>
      <label :for="'radio-' + formId + '-' + index">
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
  defineProps, defineEmits, ref, computed, PropType,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { FdsRadioItem } from '@/model/fds.model';

const props = defineProps({
  modelValue: {
    type: String,
  },
  list: {
    type: Array as PropType<Array<FdsRadioItem>>,
    required: true,
    default: () => [],
  },
  id: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);

const formId = computed(() => uuidv4());
</script>

<style scoped lang="scss"></style>