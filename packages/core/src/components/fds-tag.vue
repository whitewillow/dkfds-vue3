<template>
  <button
    :id="formid"
    class="tag"
    :class="{ 'tag-icon': icon }">
    <slot />
    <svg
      v-if="icon"
      class="icon-svg"
      aria-hidden="true"
      @click="handleIconClick">
      <use :xlink:href="`#${icon}`"></use>
    </svg>
  </button>
</template>
<script setup lang="ts">
/**
 *
 * Komponent for Tags
 * https://designsystem.dk/komponenter/tags/
 *
 * */

import { defineProps, defineEmits } from 'vue';
import { formId } from 'dkfds-vue3-utils';

const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(['iconClick']);

const { formid } = formId(props.id, true);

const handleIconClick = () => {
  emit('iconClick', formid.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
