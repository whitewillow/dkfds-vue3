<template>
  <div class="flex-items-center">
    <textarea
      class="form-input"
      :class="inputClass"
      v-model="val"
      :maxlength="maxLength"
      :rows="getRows"
      :name="id"
      :id="id"
      :placeholder="placeholder"
      @input="handleInput"
      @blur="$emit('dirty')"
      :disabled="disabled"></textarea>
    <p
      class="mt-1 form-hint"
      v-if="val && val.length >= getMaxLength * 0.9">
      Antal tegn {{ val.length }} <span v-if="getMaxLength > -1">
        af {{ getMaxLength }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps, defineEmits, ref, computed,
} from 'vue';
import fdsTextareaProps from '@/props/fds-texarea.props';

const props = defineProps({ ...fdsTextareaProps });

const emit = defineEmits(['update:modelValue', 'dirty', 'input']);

const val = ref(props.modelValue);

const handleInput = () => emit('update:modelValue', val.value);

const getRows = computed(() => {
  if (!val.value) {
    return props.rows;
  }

  let result = Math.floor(val.value.length / props.rowlength) + 1;
  result = result >= props.rows ? result : props.rows;

  return result <= 10 ? result : 10;
});

const getMaxLength = computed(() => props.maxLength ?? 4000);
</script>

<style scoped lang="scss"></style>