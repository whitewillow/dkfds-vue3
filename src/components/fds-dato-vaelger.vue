<template>
  <div
    class="date-picker"
    :id="`datepicker_${formid}`">
    <input
      class="form-input"
      @input="handleInput"
      @blur="$emit('dirty', true)"
      :id="formid"
      :name="formid"
      v-model="value"
      type="text"/>
  </div>
</template>
<script setup lang="ts">
import {
  defineProps, defineEmits, onMounted, ref,
} from 'vue';
import { datePicker } from 'dkfds';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
  },
  modelValue: {
    type: String, // JSON Date
    default: '',
  },
});
const emit = defineEmits(['update:modelValue', 'dirty']);
const formid = ref(props.id ?? uuidv4());
const value = ref(props.modelValue);

const handleInput = () => emit('update:modelValue', value.value);

onMounted(async () => {
  datePicker.on(document);
});
</script>