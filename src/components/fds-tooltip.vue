<template>
  <button
    class="js-tooltip button-unstyled"
    :id="formId"
    :data-tooltip="text"
    data-tooltip-trigger="click">
    <svg
      class="icon-svg"
      aria-hidden="true">
      <use xlink:href="#help"></use>
    </svg>
    <span class="sr-only">
      {{ text }}
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
// import DKFDS from 'dkfds';
import { defineProps, onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/no-extraneous-dependencies
import DKFDS from 'dkfds';

defineProps({
  text: {
    type: String,
    required: true,
  },
});

const formId = ref(uuidv4());

onMounted(() => {
  new DKFDS.Tooltip(document.getElementById(formId.value)).init();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>