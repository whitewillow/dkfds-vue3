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
      <slot />
    </ul>
  </fieldset>
</template>

<script setup lang="ts">
import { defineProps, provide, computed } from 'vue';
import getFormId from '@/composable/formId';

const props = defineProps({
  modelValue: {
    type: String,
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

const value = computed(() => props.modelValue);

const exposeEmit = (newValue: string) => {
  emit('update:modelValue', newValue);
};

provide('provideGroupEmit', exposeEmit);
provide('provideGroupValue', value);
</script>

<style scoped lang="scss"></style>