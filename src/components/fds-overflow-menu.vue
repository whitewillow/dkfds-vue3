<template>
  <div class="overflow-menu overflow-menu--open-right">
    <button
      class="button-overflow-menu js-dropdown"
      @click="handleOverflowClick"
      @blur="hideOverflow"
      data-js-target="overflow1"
      aria-haspopup="true"
      :aria-expanded="showOverflow">
      {{ header }}
      <svg
        class="icon-svg"
        aria-hidden="true"
        focusable="false">
        <use xlink:href="#more-vert"></use>
      </svg>
    </button>
    <div
      class="overflow-menu-inner"
      :id="id"
      :aria-hidden="!showOverflow">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *
 * Komponent for Modal
 * https://designsystem.dk/komponenter/modal/
 *
 * */
import { defineProps, ref } from 'vue';

const props = defineProps({
  header: {
    type: String,
  },
  id: {
    type: String,
  },
});

const showOverflow = ref(false);

const handleOverflowClick = () => {
  showOverflow.value = !showOverflow.value;
};

const hideOverflow = () => {
  setTimeout(() => {
    showOverflow.value = false;
  }, 100);
};
</script>