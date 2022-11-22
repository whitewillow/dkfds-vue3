<template>
  <button
    class="tag"
    :class="{ 'tag-icon': icon }"
    :id="formid">
    <slot />
    <svg
      v-if="icon"
      @click="handleIconClick"
      class="icon-svg"
      aria-hidden="true">
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
import getFormId from '@/composable/formId';

const props = defineProps({
  icon: {
    type: String,
  },
  id: {
    type: String,
  },
});

const emit = defineEmits(['iconClick']);

const { formid } = getFormId(props.id, true);

const handleIconClick = () => {
  emit('iconClick', formid.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>