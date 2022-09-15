<template>
  <fieldset>
    <input
      :id="formId"
      type="checkbox"
      :checked="value"
      class="form-checkbox"
      :class="{ 'checkbox-large': !small }"
      @change="handleInput"
      @focus="$emit('dirty')"
      :disabled="disabled"/>
    <label :for="formId" class="hand">
      <section class="pl-2 hand">
        <slot v-bind:id="formId" class="hand"></slot>
      </section>
    </label>
  </fieldset>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  ref,
  computed,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:checked', 'dirty']);

const value = ref(props.checked);

const handleInput = (event: Event) => emit('update:checked', (event?.target as HTMLInputElement).checked);

const formId = computed(() => props.id ?? uuidv4());
</script>

<style scoped lang="scss">
</style>