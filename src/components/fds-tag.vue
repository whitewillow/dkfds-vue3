<template>
  <button
    class="tag"
    :class="{ 'tag-icon': icon }"
    :id="formId">
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

import { defineProps, ref, defineEmits } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const props = defineProps({
  icon: {
    type: String,
  },
  id: {
    type: String,
  },
});

const formId = ref(props.id ?? uuidv4());

const emit = defineEmits(['iconClick']);

const handleIconClick = () => {
  emit('iconClick', formId.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>