<template>
  <div>
    <button
      v-if="!hideButton"
      class="accordion-bulk-button"
      :data-accordion-bulk-expand="collapse"
      @click="toggle">
      Åbn alle
    </button>
    <ul class="accordion">
      <slot :groupcollapse="collapse" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
  hideButton: {
    type: Boolean,
    default: false,
  },
});

const collapse = ref(true);

const toggle = () => {
  collapse.value = !collapse.value;
};
</script>

<style scoped lang="scss"></style>