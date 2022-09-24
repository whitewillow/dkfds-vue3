<template>
  <ul
    class="nobullet-list"
    :id="formId">
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
        @blur="handleDirty"
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
  defineProps, defineEmits, ref, computed,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import fdsCheckboxProps from '@/props/fds-checkbox.props';

const props = defineProps({
  ...fdsCheckboxProps,
  id: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue', 'dirty']);

const value = ref(props.modelValue);

const handleDirty = () => {
  emit('dirty', true);
};

const handleInput = () => {
  emit('update:modelValue', value.value);
};

const formId = computed(() => uuidv4());
</script>

<style scoped lang="scss"></style>