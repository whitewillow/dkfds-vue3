<template>
  <div
    class="form-group"
    :key="formid"
    :class="{ 'form-error': isValid === false }">
    <fieldset>
      <legend
        class="form-label d-flex"
        v-if="label">
        {{ label }}
        <fds-tooltip
          v-if="tooltip"
          class="ml-2"
          :text="tooltip" />
      </legend>
      <slot :formid="formid" />
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: null,
  },
  tooltip: {
    type: String,
    default: null,
  },
});

const formid = computed(() => uuidv4());
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>