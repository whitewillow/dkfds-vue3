<template>
  <button
    :id="`tip_${formid}`"
    class="js-tooltip button-unstyled"
    :data-tooltip="slotContent"
    data-tooltip-trigger="click"
  >
    <svg
      class="icon-svg"
      aria-hidden="true">
      <use xlink:href="#help"></use>
    </svg>
    <span
      ref="slotText"
      class="sr-only">
      <slot />
    </span>
  </button>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, useSlots } from 'vue';

import { formId, tooltip } from 'dkfds-vue3-utils';

const { formid } = formId(undefined, true);
const slotText = ref(null);

const slots = useSlots();

const slotContent = computed(() => {
  try {
    if (slots.default && slotText.value) {
      return (slotText.value as unknown as HTMLElement).innerHTML ?? '';
    }
  } catch {
    return '';
  }
  return '';
});

onMounted(() => {
  new tooltip(document.getElementById(`tip_${formid.value}`)).init();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
