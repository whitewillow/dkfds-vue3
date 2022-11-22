<template>
  <fieldset>
    <ul class="nobullet-list">
      <li
        v-for="(radio, index) of choices"
        :key="index">
        <input
          :id="'radio-' + formid + '-' + index"
          type="radio"
          :name="'radio' + formid"
          :value="radio.value"
          :disabled="radio.disabled"
          :checked="isValueSet && modelValue?.toString() === radio.value.toString()"
          @change="handleInput"
          class="form-radio radio-large"/>
        <label :for="'radio-' + formid + '-' + index">
          {{ radio.title }}
        </label>

        <div
          class="radio-content mt-2 ml-4 py-4"
          :class="{ disabled: isDisabled }"
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
import { FdsOptionItem } from '@/model/fds.model';
import getFormId from '@/composable/formId';

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
  isDisabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: null,
  },
});

const choices: Array<FdsOptionItem> = [
  {
    title: props.trueLabel,
    value: 'true',
    disabled: props.isDisabled,
  },
  {
    title: props.falseLabel,
    value: 'false',
    disabled: props.isDisabled,
  },
];

const emit = defineEmits(['update:modelValue', 'dirty']);

const { formid } = getFormId(props.id, true);

const isValueSet = computed(() => props.modelValue !== undefined && props.modelValue !== null);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value === 'true');
</script>

<style scoped lang="scss"></style>