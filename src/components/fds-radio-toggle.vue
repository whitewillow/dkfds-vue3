<template>
  <fieldset>
    <ul class="nobullet-list">
      <li
        v-for="(radio, index) of choices"
        :key="index">
        <input
          :id="'radio-' + formId + '-' + index"
          type="radio"
          :name="'radio' + formId"
          :value="radio.value"
          :disabled="radio.disabled"
          :checked="isValueSet && modelValue?.toString() === radio.value.toString()"
          @change="handleInput"
          class="form-radio radio-large"/>
        <label :for="'radio-' + formId + '-' + index">
          {{ radio.title }}
        </label>

        <div
          class="radio-content mt-2 ml-4 py-4"
          :class="{ disabled: disableSlots }"
          v-if="
            isValueSet &&
              $slots[radio.value.toString()] &&
              modelValue?.toString() === radio.value.toString()
          ">
          <slot
            :name="radio.value.toString()"
            v-bind:radiovalue="modelValue?.toString()" />
        </div>
      </li>
    </ul>
  </fieldset>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { FdsOptionItem } from '@/model/fds.model';

const props = defineProps({
  modelValue: {
    type: Boolean as () => boolean | undefined | null,
  },
  trueLabel: {
    type: String,
    default: 'Ja',
  },
  falseLabel: {
    type: String,
    default: 'Nej',
  },
  noLabels: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disableSlots: {
    type: Boolean,
    default: false,
  },
});

const choices: Array<FdsOptionItem> = [
  {
    title: props.trueLabel,
    value: 'true',
    disabled: props.disabled,
  },
  {
    title: props.falseLabel,
    value: 'false',
    disabled: props.disabled,
  },
];

const emit = defineEmits(['update:modelValue', 'dirty']);

const isValueSet = computed(() => props.modelValue !== undefined && props.modelValue !== null);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value === 'true');

const formId = computed(() => uuidv4());
</script>

<style scoped lang="scss"></style>