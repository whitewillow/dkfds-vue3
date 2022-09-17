<template>
  <ul class="nobullet-list">
    <li
      v-for="(checkbox, index) of value"
      :key="index">
      <input
        :id="'checkbox-' + formId + '-' + index"
        type="checkbox"
        :name="'checkbox' + formId"
        v-model="checkbox.checked"
        :disabled="checkbox.disabled"
        @change="handleInput"
        class="form-checkbox checkbox-large"/>
      <label :for="'checkbox-' + formId + '-' + index">
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
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed, PropType, watch,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { FdsCheckboxItem } from '@/model/fds.model';

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<FdsCheckboxItem>>,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const value = ref(props.modelValue);

const handleInput = (event: Event) => emit('update:modelValue', value);

const formId = computed(() => uuidv4());

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