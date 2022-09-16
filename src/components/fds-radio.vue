<template>
  <fieldset>
    <legend class="h5">
      {{ header }}
    </legend>
    <ul class="nobullet-list">
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
          class="form-radio radio-large"/>
        <label :for="'radio-' + formId + '-' + index">
          {{ radio.title }}
        </label>
      </li>
    </ul>
  </fieldset>
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
  header: {
    type: String,
  },
  list: {
    type: Array as PropType<Array<FdsRadioItem>>,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', (event?.target as HTMLInputElement).value);

const formId = computed(() => uuidv4());
</script>

<style scoped lang="scss"></style>