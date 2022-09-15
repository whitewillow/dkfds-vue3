<template>
  <div class="flex-items-center">
    <input
      class="form-input d-flex"
      :class="inputClass"
      :readonly="readonly"
      :name="id"
      v-model="value"
      :id="id"
      :placeholder="placeholder"
      :type="inputType"
      :disabled="disabled"
      @input="handleInput"
      @focus="$emit('dirty')"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';
import fdsInputProps from '@/props/fds-input.props';

const props = defineProps({ ...fdsInputProps });

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);

const value = ref(props.modelValue);

const handleInput = () => emit('update:modelValue', value.value);
</script>

<style scoped lang="scss"></style>